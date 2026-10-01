import type { Doctor } from '@/features/appointments/types';
import { EmptyState } from '@/shared/ui/EmptyState';
import { PageError } from '@/shared/ui/PageError';
import { Skeleton } from '@/shared/ui/Skeleton';

type DoctorListProps = {
  doctors: Doctor[];
  selectedDoctorId: string | null;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  onSelect: (doctor: Doctor) => void;
  onRetry: () => void;
};

export function DoctorList({
  doctors,
  selectedDoctorId,
  isLoading,
  isError,
  error,
  onSelect,
  onRetry,
}: DoctorListProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <PageError
        title="دریافت فهرست پزشکان ممکن نشد"
        message={error instanceof Error ? error.message : 'خطا در بارگذاری پزشکان'}
        onRetry={onRetry}
      />
    );
  }

  if (doctors.length === 0) {
    return (
      <EmptyState
        title="پزشکی یافت نشد"
        description="در حال حاضر پزشکی برای ثبت نوبت وجود ندارد."
      />
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {doctors.map((doctor) => {
        const selected = doctor.id === selectedDoctorId;
        const displayName = `${doctor.user.firstName} ${doctor.user.lastName}`;
        return (
          <button
            key={doctor.id}
            type="button"
            onClick={() => onSelect(doctor)}
            aria-pressed={selected}
            className={`focus-ring flex flex-col items-stretch gap-2 rounded-[var(--radius-md)] border p-4 text-start transition ${
              selected
                ? 'border-[var(--color-primary)] bg-[var(--color-primary-soft)]'
                : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-muted)]'
            }`}
          >
            <span className="font-semibold text-[var(--color-text)]">
              {displayName}
            </span>
            {doctor.specialty ? (
              <span className="text-[var(--text-sm)] text-[var(--color-muted)]">
                {doctor.specialty}
              </span>
            ) : null}
            {doctor.bio ? (
              <span className="text-[var(--text-sm)] leading-[var(--leading-normal)] text-[var(--color-muted)]">
                {doctor.bio}
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}