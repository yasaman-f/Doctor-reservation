import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { ROLE_LABELS } from '@/shared/constants/copy';
import { ROUTES } from '@/shared/constants/routes';
import type { Role } from '@/shared/types/user';
import { Alert } from '@/shared/ui/Alert';
import { FullPageSpinner } from '@/shared/ui/Spinner';

type RequireRoleProps = {
  roles: Role[];
};

export function RequireRole({ roles }: RequireRoleProps) {
  const { user, isBootstrapping, isAuthenticated } = useAuth();

  if (isBootstrapping) {
    return <FullPageSpinner label="در حال بررسی دسترسی…" />;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to={ROUTES.login} replace />;
  }

  if (!roles.includes(user.role)) {
    return (
      <div className="mx-auto max-w-lg p-6">
        <Alert variant="error" title="دسترسی مجاز نیست">
          نقش حساب شما ({ROLE_LABELS[user.role] ?? user.role}) اجازه ورود به این
          بخش را ندارد.
        </Alert>
      </div>
    );
  }

  return <Outlet />;
}
