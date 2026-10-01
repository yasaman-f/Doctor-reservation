import type { AuthResponse } from '@/shared/types/auth';
import { apiClient } from '@/shared/lib/axios';

export type LoginPayload = {
  email: string;
  password: string;
};

export async function login(payload: LoginPayload): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>('/auth/login', payload);
  return data;
}
