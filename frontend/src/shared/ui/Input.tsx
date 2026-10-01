import { forwardRef, type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ hasError = false, className = '', ...props }, ref) {
    return (
      <input
        ref={ref}
        className={`focus-ring min-h-11 w-full rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-3 text-[var(--text-base)] text-[var(--color-text)] transition placeholder:text-[var(--color-muted)] disabled:cursor-not-allowed disabled:bg-[var(--color-surface-muted)] ${
          hasError
            ? 'border-[var(--color-danger)]'
            : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
        } ${className}`}
        {...props}
      />
    );
  },
);
