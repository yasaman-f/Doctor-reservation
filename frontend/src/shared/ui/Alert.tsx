import type { ReactNode } from 'react';

type AlertVariant = 'error' | 'info' | 'success' | 'warning';

type AlertProps = {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
  className?: string;
};

const variantClasses: Record<AlertVariant, string> = {
  error:
    'border-[var(--color-danger)]/25 bg-[var(--color-danger-soft)] text-[var(--color-danger)]',
  info: 'border-[var(--color-info)]/20 bg-[var(--color-info-soft)] text-[var(--color-info)]',
  success:
    'border-[var(--color-success)]/20 bg-[var(--color-success-soft)] text-[var(--color-success)]',
  warning:
    'border-[var(--color-warning)]/25 bg-[var(--color-warning-soft)] text-[var(--color-warning)]',
};

const accentClasses: Record<AlertVariant, string> = {
  error: 'bg-[var(--color-danger)]',
  info: 'bg-[var(--color-info)]',
  success: 'bg-[var(--color-success)]',
  warning: 'bg-[var(--color-warning)]',
};

export function Alert({
  variant = 'info',
  title,
  children,
  className = '',
}: AlertProps) {
  return (
    <div
      role="alert"
      className={`relative rounded-[var(--radius-md)] border px-3.5 py-3 text-[var(--text-sm)] ${variantClasses[variant]} ${className}`}
    >
      <span
        className={`absolute inset-y-2 start-0 w-1 rounded-e-sm ${accentClasses[variant]}`}
        aria-hidden
      />
      {title ? <p className="mb-1 font-semibold ps-2">{title}</p> : null}
      <div className="leading-[var(--leading-normal)] ps-2">{children}</div>
    </div>
  );
}
