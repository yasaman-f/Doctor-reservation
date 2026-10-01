import { Link, Outlet } from 'react-router-dom';
import { BRAND } from '@/shared/constants/copy';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';

export function PublicLayout() {
  return (
    <div className="app-canvas min-h-screen">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto flex h-[var(--header-height)] max-w-6xl items-center justify-between gap-3 px-4">
          <Link to={ROUTES.home} className="text-lg font-bold tracking-tight">
            {BRAND.name}
          </Link>
          <nav className="flex items-center gap-1.5">
            <ThemeToggle />
            <Link to={ROUTES.login}>
              <Button variant="ghost" size="sm">
                ورود
              </Button>
            </Link>
            <Link to={ROUTES.register}>
              <Button size="sm">ثبت‌نام</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
