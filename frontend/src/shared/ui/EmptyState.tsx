import type { ReactNode } from 'react';

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-10 text-center rounded-[var(--radius-lg)]">
      <h2 className="text-heading text-[var(--color-text)]">{title}</h2>
      {description ? <p className="text-helper max-w-xl">{description}</p> : null}
      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}
