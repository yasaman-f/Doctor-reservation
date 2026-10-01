type SpinnerProps = {
  label?: string;
  className?: string;
};

export function Spinner({ label = 'در حال بارگذاری', className = '' }: SpinnerProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[var(--text-sm)] text-[var(--color-muted)] ${className}`}
      role="status"
      aria-live="polite"
    >
      <span
        className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-primary)] border-s-transparent"
        aria-hidden
      />
      <span>{label}</span>
    </div>
  );
}

export function FullPageSpinner({
  label = 'در حال بارگذاری…',
}: {
  label?: string;
}) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Spinner label={label} />
    </div>
  );
}
