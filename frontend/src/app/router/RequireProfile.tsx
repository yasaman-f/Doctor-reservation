import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRoleProfile } from '@/features/auth/hooks/useRoleProfile';
import { ROUTES } from '@/shared/constants/routes';
import { PageError } from '@/shared/ui/PageError';
import { FullPageSpinner } from '@/shared/ui/Spinner';

function profileSetupPath(role: string | undefined): string {
  if (role === 'DOCTOR') {
    return ROUTES.doctor.profile;
  }
  return ROUTES.patient.profile;
}

export function RequireProfile() {
  const { user, isAuthenticated } = useAuth();
  const { isLoading, isMissing, isError, error, refetch } = useRoleProfile({
    role: user?.role,
    enabled: isAuthenticated,
  });

  if (isLoading) {
    return <FullPageSpinner label="در حال بررسی پرونده…" />;
  }

  if (isMissing) {
    return <Navigate to={profileSetupPath(user?.role)} replace />;
  }

  if (isError) {
    const message =
      error instanceof Error ? error.message : 'بارگذاری پرونده ممکن نشد';
    return (
      <div className="mx-auto max-w-lg p-6">
        <PageError
          title="بررسی پرونده ناموفق بود"
          message={message}
          onRetry={() => {
            void refetch();
          }}
        />
      </div>
    );
  }

  return <Outlet />;
}
