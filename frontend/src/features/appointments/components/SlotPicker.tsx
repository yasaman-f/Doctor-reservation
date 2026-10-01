import type { AvailableSlot } from '@/features/appointments/types';
import { formatJalaliDate, formatJalaliTime } from '@/shared/utils/date';
import { EmptyState } from '@/shared/ui/EmptyState';
import { PageError } from '@/shared/ui/PageError';
import { Skeleton } from '@/shared/ui/Skeleton';

type SlotPickerProps = {
  slots: AvailableSlot[];
  selectedSlotId: string | null;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  disabled?: boolean;
  onSelect: (slot: AvailableSlot) => void;
  onRetry: () => void;
};

/** Groups slots by their calendar date (using the local date the slot starts on). */
function groupByDate(slots: AvailableSlot[]): Map<string, AvailableSlot[]> {
  const groups = new Map<string, AvailableSlot[]>();
  for (const slot of slots) {
    const key = new Date(slot.startTime).toDateString();
    const list = groups.get(key);
    if (list) {
      list.push(slot);
    } else {
      groups.set(key, [slot]);
    }
  }
  return groups;
}

export function SlotPicker({
  slots,
  selectedSlotId,
  isLoading,
  isError,
  error,
  disabled = false,
  onSelect,
  onRetry,
}: SlotPickerProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <PageError
        title="دریافت بازه‌های آزاد ممکن نشد"
        message={error instanceof Error ? error.message : 'خطا در بارگذاری بازه‌ها'}
        onRetry={onRetry}
      />
    );
  }

  if (slots.length === 0) {
    return (
      <EmptyState
        title="بازه آزاد وجود ندارد"
        description="این پزشک در حال حاضر بازه زمانی آزادی برای رزرو ندارد."
      />
    );
  }

  const groups = groupByDate(slots);

  return (
    <div className="space-y-5">
      {Array.from(groups.entries()).map(([dateKey, daySlots]) => (
        <div key={dateKey}>
          <h3 className="mb-2 text-label text-[var(--color-text)]">
            {formatJalaliDate(daySlots[0].startTime)}
          </h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {daySlots.map((slot) => {
              const selected = slot.id === selectedSlotId;
              return (
                <button
                  key={slot.id}
                  type="button"
                  disabled={disabled}
                  aria-pressed={selected}
                  onClick={() => onSelect(slot)}
                  className={`focus-ring rounded-[var(--radius-md)] border px-3 py-2.5 text-center text-[var(--text-sm)] transition disabled:cursor-not-allowed disabled:opacity-50 ${
                    selected
                      ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                      : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]'
                  }`}
                >
                  {formatJalaliTime(slot.startTime)}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}