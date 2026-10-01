import type { AvailabilitySlot } from '@/features/availability/types';
import { formatJalaliDateTime } from '@/shared/utils/date';
import { Badge } from '@/shared/ui/Badge';
import { Button } from '@/shared/ui/Button';

type AvailabilitySlotListProps = {
  slots: AvailabilitySlot[];
  editingId: string | null;
  isMutating: boolean;
  onEdit: (slot: AvailabilitySlot) => void;
  onDelete: (slot: AvailabilitySlot) => void;
};

function sortSlots(slots: AvailabilitySlot[]): AvailabilitySlot[] {
  return [...slots].sort(
    (a, b) =>
      new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
  );
}

export function AvailabilitySlotList({
  slots,
  editingId,
  isMutating,
  onEdit,
  onDelete,
}: AvailabilitySlotListProps) {
  return (
    <ul className="space-y-3">
      {sortSlots(slots).map((slot) => {
        const isEditing = editingId === slot.id;

        return (
          <li
            key={slot.id}
            className="surface-panel flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="space-y-1 text-[var(--text-sm)]">
              <p className="font-medium" dir="ltr">
                {formatJalaliDateTime(slot.startTime)}
                <span className="mx-2 text-[var(--color-muted)]">→</span>
                {formatJalaliDateTime(slot.endTime)}
              </p>
              <Badge tone={slot.isBooked ? 'warning' : 'success'}>
                {slot.isBooked ? 'رزرو شده' : 'آزاد'}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                size="sm"
                disabled={slot.isBooked || isMutating || isEditing}
                title={
                  slot.isBooked
                    ? 'Cannot edit a slot that is already booked'
                    : undefined
                }
                onClick={() => onEdit(slot)}
              >
                ویرایش
              </Button>
              <Button
                variant="danger"
                size="sm"
                disabled={slot.isBooked || isMutating || isEditing}
                title={
                  slot.isBooked
                    ? 'Cannot delete a slot that is already booked'
                    : undefined
                }
                onClick={() => onDelete(slot)}
              >
                حذف
              </Button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
