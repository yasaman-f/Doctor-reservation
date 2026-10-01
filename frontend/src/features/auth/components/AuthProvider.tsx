import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '@/features/auth/hooks/useAuth';
import { ROUTES } from '@/shared/constants/routes';
import { configureApiClient } from '@/shared/lib/axios';
import type { AuthSession } from '@/shared/types/auth';
import {
  clearSession as clearStoredSession,
  readSession,
  writeSession,
} from '@/shared/utils/storage';

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const queryClient = useQueryClient();
  const [session, setSessionState] = useState<AuthSession | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(true);
  const sessionRef = useRef<AuthSession | null>(null);

  const clearSession = useCallback(() => {
    clearStoredSession();
    sessionRef.current = null;
    setSessionState(null);
    queryClient.clear();
  }, [queryClient]);

  const setSession = useCallback((next: AuthSession) => {
    writeSession(next);
    sessionRef.current = next;
    setSessionState(next);
  }, []);

  useEffect(() => {
    const existing = readSession();
    if (existing) {
      sessionRef.current = existing;
      setSessionState(existing);
    }
    setIsBootstrapping(false);
  }, []);

  useEffect(() => {
    configureApiClient({
      // Ref keeps token available immediately after setSession (before re-render).
      getAccessToken: () => sessionRef.current?.accessToken ?? null,
      onUnauthorized: () => {
        clearSession();
        if (window.location.pathname !== ROUTES.login) {
          window.location.assign(ROUTES.login);
        }
      },
    });
  }, [clearSession]);

  const value = useMemo(
    () => ({
      session,
      user: session?.user ?? null,
      accessToken: session?.accessToken ?? null,
      isAuthenticated: Boolean(session?.accessToken),
      isBootstrapping,
      setSession,
      clearSession,
    }),
    [session, isBootstrapping, setSession, clearSession],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
