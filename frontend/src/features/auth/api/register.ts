import type { AuthResponse } from '@/shared/types/auth';
import type { RegisterRole } from '@/shared/types/user';
import { apiClient } from '@/shared/lib/axios';

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  role: RegisterRole;
};

export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  const body: RegisterPayload = {
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    password: payload.password,
    role: payload.role,
  };

  if (payload.phone) {
    body.phone = payload.phone;
  }

  const { data } = await apiClient.post<AuthResponse>('/auth/register', body);
  return data;
}
