import { Link } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { useRoleProfile } from '@/features/auth/hooks/useRoleProfile';
import { ROLE_LABELS } from '@/shared/constants/copy';
import { ROUTES } from '@/shared/constants/routes';
import { formatJalaliDate } from '@/shared/utils/date';
import { Alert } from '@/shared/ui/Alert';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';
import { Skeleton } from '@/shared/ui/Skeleton';

type QuickAction = {
  href: string;
  title: string;
  description: string;
};

function patientActions(): QuickAction[] {
  return [
    {
      href: ROUTES.patient.book,
      title: 'دریافت نوبت',
      description: 'یک بازه آزاد پزشک را انتخاب و درخواست ثبت کنید.',
    },
    {
      href: ROUTES.patient.appointments,
      title: 'نوبت‌های من',
      description: 'وضعیت نوبت‌های ثبت‌شده را پیگیری کنید.',
    },
    {
      href: ROUTES.patient.profile,
      title: 'پرونده بیمار',
      description: 'اطلاعات پرونده خود را تکمیل یا ویرایش کنید.',
    },
  ];
}

function doctorActions(): QuickAction[] {
  return [
    {
      href: ROUTES.doctor.availability,
      title: 'زمان‌های آزاد',
      description: 'بازه‌های ویزیت جدید اضافه یا حذف کنید.',
    },
    {
      href: ROUTES.doctor.appointments,
      title: 'نوبت‌های مراجعان',
      description: 'درخواست‌های نوبت را تأیید، تکمیل یا لغو کنید.',
    },
    {
      href: ROUTES.doctor.profile,
      title: 'پرونده پزشک',
      description: 'جزئیات تخصص و سوابق خود را مدیریت کنید.',
    },
  ];
}

export function DashboardPage() {
  const { user } = useAuth();
  const { isLoading, isMissing } = useRoleProfile({
    role: user?.role,
  });

  const profilePath =
    user?.role === 'DOCTOR' ? ROUTES.doctor.profile : ROUTES.patient.profile;
  const actions = user?.role === 'DOCTOR' ? doctorActions() : patientActions();

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-title">پیشخوان</h1>
          <p className="text-helper mt-1">
            {user?.firstName} {user?.lastName}
            {user ? ` · ${ROLE_LABELS[user.role]}` : null}
          </p>
        </div>
        <Badge tone="primary">{formatJalaliDate(new Date())}</Badge>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-2/3" />
        </div>
      ) : null}

      {!isLoading && isMissing ? (
        <Alert variant="warning" title="تکمیل پرونده لازم است">
          قبل از استفاده از نوبت‌دهی، پرونده {user ? ROLE_LABELS[user.role] : ''}{' '}
          خود را تکمیل کنید.
          <div className="mt-3">
            <Link to={profilePath}>
              <Button size="sm">تکمیل پرونده</Button>
            </Link>
          </div>
        </Alert>
      ) : null}

      {!isLoading && !isMissing ? (
        <Alert variant="success" title="پرونده آماده است">
          {user?.role === 'DOCTOR'
            ? 'برای مدیریت زمان‌های آزاد و نوبت‌های مراجعان، از منوی کناری استفاده کنید.'
            : 'برای دریافت نوبت و پیگیری درخواست‌ها، از منوی کناری استفاده کنید.'}
        </Alert>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action) => {
          const disabled = !isLoading && isMissing;
          return (
            <Link
              key={action.href}
              to={action.href}
              className={`focus-ring group surface-panel flex flex-col gap-2 p-5 transition hover:border-[var(--color-border-strong)] hover:shadow-[var(--shadow-md)] ${
                disabled
                  ? 'pointer-events-none opacity-60'
                  : 'hover:-translate-y-0.5'
              }`}
            >
              <span className="text-heading text-[var(--color-text)] group-hover:text-[var(--color-primary)]">
                {action.title}
              </span>
              <span className="text-helper text-start">{action.description}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
