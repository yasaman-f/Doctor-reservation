import { createContext, useContext } from 'react';
import type { AuthSession } from '@/shared/types/auth';
import type { User } from '@/shared/types/user';

export type AuthContextValue = {
  session: AuthSession | null;
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isBootstrapping: boolean;
  setSession: (session: AuthSession) => void;
  clearSession: () => void;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
