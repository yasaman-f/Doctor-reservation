import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--color-primary-hover)] disabled:bg-[var(--color-border-strong)] disabled:shadow-none',
  secondary:
    'bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] shadow-[var(--shadow-sm)] hover:bg-[var(--color-surface-muted)] disabled:opacity-60 disabled:shadow-none',
  danger:
    'bg-[var(--color-danger)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--color-danger-hover)] disabled:opacity-50 disabled:shadow-none',
  ghost:
    'bg-transparent text-[var(--color-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text)]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-3 text-[var(--text-sm)]',
  md: 'min-h-11 px-4 text-[var(--text-sm)]',
  lg: 'min-h-12 px-5 text-[var(--text-base)]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-medium transition disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? 'لطفاً صبر کنید…' : children}
    </button>
  );
}
