import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { BRAND, ROLE_LABELS } from '@/shared/constants/copy';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';

function navClass({ isActive }: { isActive: boolean }): string {
  return `rounded-[var(--radius-md)] px-3 py-2.5 text-[var(--text-sm)] transition ${
    isActive
      ? 'bg-[var(--color-primary-soft)] font-semibold text-[var(--color-primary)]'
      : 'text-[var(--color-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]'
  }`;
}

export function AppLayout() {
  const { user, clearSession } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="app-canvas min-h-screen md:grid md:grid-cols-[var(--sidebar-width)_1fr]">
      <aside className="border-b border-[var(--color-border)] bg-[var(--color-surface)] md:border-b-0 md:border-e">
        <div className="flex h-full flex-col gap-6 px-4 py-5">
          <div className="flex items-center justify-between gap-2">
            <Link to={ROUTES.app} className="text-lg font-bold tracking-tight">
              {BRAND.name}
            </Link>
            <ThemeToggle />
          </div>

          <nav className="flex flex-col gap-1" aria-label="منوی اصلی">
            <NavLink to={ROUTES.app} end className={navClass}>
              پیشخوان
            </NavLink>
            <NavLink to={ROUTES.account} className={navClass}>
              حساب کاربری
            </NavLink>

            {user?.role === 'PATIENT' ? (
              <>
                <NavLink to={ROUTES.patient.profile} className={navClass}>
                  پرونده بیمار
                </NavLink>
                <NavLink to={ROUTES.patient.appointments} className={navClass}>
                  نوبت‌های من
                </NavLink>
                <NavLink to={ROUTES.patient.book} className={navClass}>
                  دریافت نوبت
                </NavLink>
              </>
            ) : null}

            {user?.role === 'DOCTOR' ? (
              <>
                <NavLink to={ROUTES.doctor.profile} className={navClass}>
                  پرونده پزشک
                </NavLink>
                <NavLink to={ROUTES.doctor.availability} className={navClass}>
                  زمان‌های آزاد
                </NavLink>
                <NavLink to={ROUTES.doctor.appointments} className={navClass}>
                  نوبت‌های مراجعان
                </NavLink>
              </>
            ) : null}
          </nav>

          <div className="mt-auto space-y-3 border-t border-[var(--color-border)] pt-4">
            <div className="text-[var(--text-sm)]">
              <p className="font-semibold">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-[var(--color-muted)]">
                {user ? ROLE_LABELS[user.role] : null}
              </p>
            </div>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                clearSession();
                void navigate(ROUTES.login);
              }}
            >
              خروج
            </Button>
          </div>
        </div>
      </aside>

      <main className="px-4 py-6 md:px-8">
        <Outlet />
      </main>
    </div>
  );
}
