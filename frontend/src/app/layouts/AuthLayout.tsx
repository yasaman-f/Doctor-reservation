import { Link, Outlet } from 'react-router-dom';
import { BRAND } from '@/shared/constants/copy';
import { ROUTES } from '@/shared/constants/routes';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';

export function AuthLayout() {
  return (
    <div className="app-canvas min-h-screen">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto flex h-[var(--header-height)] max-w-md items-center justify-between px-4">
          <Link to={ROUTES.home} className="text-lg font-bold tracking-tight">
            {BRAND.name}
          </Link>
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <Link
              to={ROUTES.home}
              className="text-label text-[var(--color-muted)] hover:text-[var(--color-text)]"
            >
              بازگشت
            </Link>
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-md flex-col px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
