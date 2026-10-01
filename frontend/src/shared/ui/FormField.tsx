import type { ReactNode } from 'react';

type FormFieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
};

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-label text-[var(--color-text)]">
        {label}
        {required ? (
          <span className="ms-1 text-[var(--color-danger)]" aria-hidden>
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint && !error ? <p className="text-helper">{hint}</p> : null}
      {error ? <p className="text-error">{error}</p> : null}
    </div>
  );
}
