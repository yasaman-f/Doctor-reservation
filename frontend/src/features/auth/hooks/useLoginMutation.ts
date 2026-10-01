import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '@/features/auth/api/login';
import { useAuth } from '@/features/auth/hooks/useAuth';
import type { LoginFormValues } from '@/features/auth/schemas/login.schema';
import { resolvePostAuthPath } from '@/features/auth/utils/resolve-post-auth-path';
import { mapAuthResponseToSession } from '@/shared/utils/auth-mapper';

function readIntendedPath(state: unknown): string | null {
  if (
    typeof state === 'object' &&
    state !== null &&
    'from' in state &&
    typeof (state as { from?: unknown }).from === 'string'
  ) {
    return (state as { from: string }).from;
  }
  return null;
}

export function useLoginMutation() {
  const { setSession } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const intendedPath = readIntendedPath(location.state);

  return useMutation({
    mutationFn: (values: LoginFormValues) => login(values),
    onSuccess: async (response) => {
      const session = mapAuthResponseToSession(response);
      setSession(session);
      const nextPath = await resolvePostAuthPath(
        session.user.role,
        intendedPath,
      );
      void navigate(nextPath, { replace: true });
    },
  });
}
