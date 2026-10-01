import { forwardRef, type TextareaHTMLAttributes } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ hasError = false, className = '', ...props }, ref) {
    return (
      <textarea
        ref={ref}
        className={`focus-ring min-h-28 w-full resize-y rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-3 py-2.5 text-[var(--text-base)] text-[var(--color-text)] transition placeholder:text-[var(--color-muted)] disabled:cursor-not-allowed disabled:bg-[var(--color-surface-muted)] ${
          hasError
            ? 'border-[var(--color-danger)]'
            : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
        } ${className}`}
        {...props}
      />
    );
  },
);
