import { Link } from 'react-router-dom';
import { BRAND } from '@/shared/constants/copy';
import { ROUTES } from '@/shared/constants/routes';
import { formatJalaliDate } from '@/shared/utils/date';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';

const FEATURES = [
  { title: 'مطابقت سریع نوبت', description: 'دو طرف بیمار و پزشک زودتر به نتیجه می‌رسند.' },
  { title: 'زمان‌های آزاد', description: 'پزشک می‌تواند زمان‌های خود را مدیریت کند.' },
  { title: 'پیگیری وضعیت', description: 'از ثبت تا انجام، وضعیت نوبت شفاف است.' },
];

export function LandingPage() {
  const today = formatJalaliDate(new Date());

  return (
    <section className="mx-auto grid min-h-[calc(100vh-var(--header-height))] max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="primary">{BRAND.name}</Badge>
          <p className="text-helper">امروز: {today}</p>
        </div>
        <h1 className="text-display max-w-xl text-[var(--color-text)]">
          {BRAND.tagline}
        </h1>
        <p className="text-body max-w-lg text-[var(--color-muted)]">
          نوبت ویزیت را با آرامش هماهنگ کنید؛ برای بیمار و پزشک، ساده و قابل
          اعتماد.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to={ROUTES.register}>
            <Button size="lg">شروع ثبت‌نام</Button>
          </Link>
          <Link to={ROUTES.login}>
            <Button size="lg" variant="secondary">
              ورود به حساب
            </Button>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <div className="surface-panel p-6">
          <p className="text-label text-[var(--color-primary)]">چرا نوبت‌یار؟</p>
          <ul className="mt-5 space-y-5 text-[var(--text-base)] text-[var(--color-text)]">
            {FEATURES.map((feature) => (
              <li
                key={feature.title}
                className="flex gap-3 border-b border-[var(--color-border)] pb-4 last:border-b-0 last:pb-0"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]"
                  aria-hidden
                />
                <span>
                  <span className="font-semibold">{feature.title}</span>
                  <span className="block text-[var(--text-sm)] text-[var(--color-muted)]">
                    {feature.description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
