import type { AuthResponse, AuthSession } from '@/shared/types/auth';

export function mapAuthResponseToSession(response: AuthResponse): AuthSession {
  return {
    user: response.user,
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
    tokenType: response.token_type,
  };
}
