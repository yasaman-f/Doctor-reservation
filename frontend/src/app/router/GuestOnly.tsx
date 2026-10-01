import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { ROUTES } from '@/shared/constants/routes';
import { FullPageSpinner } from '@/shared/ui/Spinner';

/** Prevents authenticated users from seeing login/register. */
export function GuestOnly() {
  const { isAuthenticated, isBootstrapping } = useAuth();

  if (isBootstrapping) {
    return <FullPageSpinner label="در حال بررسی نشست…" />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.app} replace />;
  }

  return <Outlet />;
}
