import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  register,
  type RegisterPayload,
} from '@/features/auth/api/register';
import { useAuth } from '@/features/auth/hooks/useAuth';
import type { RegisterFormValues } from '@/features/auth/schemas/register.schema';
import { resolvePostAuthPath } from '@/features/auth/utils/resolve-post-auth-path';
import { mapAuthResponseToSession } from '@/shared/utils/auth-mapper';

function toRegisterPayload(values: RegisterFormValues): RegisterPayload {
  const payload: RegisterPayload = {
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    email: values.email.trim(),
    password: values.password,
    role: values.role,
  };

  const phone = values.phone.trim();
  if (phone) {
    payload.phone = phone;
  }

  return payload;
}

export function useRegisterMutation() {
  const { setSession } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (values: RegisterFormValues) =>
      register(toRegisterPayload(values)),
    onSuccess: async (response) => {
      const session = mapAuthResponseToSession(response);
      setSession(session);
      const nextPath = await resolvePostAuthPath(session.user.role);
      void navigate(nextPath, { replace: true });
    },
  });
}
