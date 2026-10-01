import type { User } from '@/shared/types/user';

/** Matches POST /auth/login and POST /auth/register response body. */
export type AuthResponse = {
  user: User;
  access_token: string;
  refresh_token: string;
  token_type: 'Bearer';
};

export type AuthSession = {
  user: User;
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
};
