import { Link } from 'react-router-dom';
import { ROUTES } from '@/shared/constants/routes';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Button } from '@/shared/ui/Button';

export function NotFoundPage() {
  return (
    <div className="app-canvas mx-auto max-w-lg px-4 py-16">
      <EmptyState
        title="صفحه پیدا نشد"
        description="این مسیر در نسخه فعلی وجود ندارد."
        action={
          <Link to={ROUTES.home}>
            <Button>بازگشت به خانه</Button>
          </Link>
        }
      />
    </div>
  );
}
