import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { ROLE_LABELS } from '@/shared/constants/copy';
import { ROUTES } from '@/shared/constants/routes';
import { formatIranPhone } from '@/shared/utils/phone';
import { formatJalaliDateTime } from '@/shared/utils/date';
import { Alert } from '@/shared/ui/Alert';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';

export function AccountPage() {
  const { user, session, clearSession } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-title">حساب کاربری</h1>
        <p className="text-helper mt-1">
          نشست شما در مرورگر ذخیره می‌شود. خروج فقط توکن‌های محلی را پاک می‌کند.
        </p>
      </div>

      <div className="surface-panel space-y-3 p-5 text-[var(--text-sm)]">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[var(--color-muted)]">نام</span>
          <span className="font-medium">
            {user?.firstName} {user?.lastName}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="text-[var(--color-muted)]">ایمیل</span>
          <span className="font-medium" dir="ltr">
            {user?.email}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="text-[var(--color-muted)]">موبایل</span>
          <span className="font-medium" dir="ltr">
            {formatIranPhone(user?.phone)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="text-[var(--color-muted)]">نقش</span>
          <Badge tone="primary">
            {user ? ROLE_LABELS[user.role] : null}
          </Badge>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="text-[var(--color-muted)]">ایجاد حساب</span>
          <span>{formatJalaliDateTime(user?.createdAt)}</span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="text-[var(--color-muted)]">نوع توکن</span>
          <span dir="ltr">{session?.tokenType}</span>
        </div>
      </div>

      <Alert variant="info" title="عمر توکن دسترسی">
        توکن دسترسی حدود ۱۵ دقیقه اعتبار دارد. توکن تازه‌سازی ذخیره می‌شود اما
        هنوز از سمت سرور قابل استفاده نیست.
      </Alert>

      <Button
        variant="secondary"
        onClick={() => {
          clearSession();
          void navigate(ROUTES.login);
        }}
      >
        خروج از حساب
      </Button>
    </div>
  );
}
