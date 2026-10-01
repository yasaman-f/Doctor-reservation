import { forwardRef, type SelectHTMLAttributes } from 'react';

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  hasError?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ hasError = false, className = '', children, ...props }, ref) {
    return (
      <select
        ref={ref}
        className={`focus-ring min-h-11 w-full appearance-none rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-3 text-[var(--text-base)] text-[var(--color-text)] transition disabled:cursor-not-allowed disabled:bg-[var(--color-surface-muted)] ${
          hasError
            ? 'border-[var(--color-danger)]'
            : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
        } ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  },
);
