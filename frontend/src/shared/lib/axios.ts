import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';
import { ApiError, type ApiErrorBody } from '@/shared/types/api';
import { clearSession, readSession } from '@/shared/utils/storage';
import { ROUTES } from '@/shared/constants/routes';

type TokenGetter = () => string | null;
type UnauthorizedHandler = () => void;

let getAccessToken: TokenGetter = () => readSession()?.accessToken ?? null;
let onUnauthorized: UnauthorizedHandler = () => {
  clearSession();
  if (window.location.pathname !== ROUTES.login) {
    window.location.assign(ROUTES.login);
  }
};

/** Allows AuthProvider to wire live token access and logout without circular imports. */
export function configureApiClient(options: {
  getAccessToken: TokenGetter;
  onUnauthorized: UnauthorizedHandler;
}): void {
  getAccessToken = options.getAccessToken;
  onUnauthorized = options.onUnauthorized;
}

function normalizeError(error: unknown): ApiError {
  if (error instanceof ApiError) {
    return error;
  }

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ApiErrorBody>;
    const statusCode = axiosError.response?.status ?? 500;
    const body = axiosError.response?.data;

    if (body && typeof body === 'object' && 'message' in body) {
      return new ApiError(body.statusCode ?? statusCode, body.message);
    }

    return new ApiError(
      statusCode,
      axiosError.message || 'Unexpected network error',
    );
  }

  if (error instanceof Error) {
    return new ApiError(500, error.message);
  }

  return new ApiError(500, 'Unexpected error');
}

function createAxiosInstance(): AxiosInstance {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? '',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error: unknown) => {
      const apiError = normalizeError(error);
      const axiosError = axios.isAxiosError(error) ? error : null;
      const sentAuthHeader = Boolean(
        axiosError?.config?.headers?.Authorization,
      );

      // Only clear session when a protected request failed auth.
      // Public auth endpoints (login) also return 401 for bad credentials.
      if (apiError.isUnauthorized && sentAuthHeader) {
        onUnauthorized();
      }

      return Promise.reject(apiError);
    },
  );

  return instance;
}

export const apiClient = createAxiosInstance();
