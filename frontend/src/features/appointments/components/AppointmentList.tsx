import type { Appointment } from '@/features/appointments/types';
import type { AppointmentAction } from '@/features/appointments/utils/appointment-actions';
import { getAvailableAppointmentActions } from '@/features/appointments/utils/appointment-actions';
import { AppointmentStatusBadge } from '@/features/appointments/components/AppointmentStatusBadge';
import type { Role } from '@/shared/types/user';
import { formatJalaliDateTime } from '@/shared/utils/date';
import { Button } from '@/shared/ui/Button';

const ACTION_LABELS: Record<AppointmentAction, string> = {
  CONFIRMED: 'تأیید',
  CANCELED: 'لغو',
  COMPLETED: 'اتمام',
};

type AppointmentListProps = {
  appointments: Appointment[];
  role: Role | null | undefined;
  pendingAppointmentId: string | null;
  onAction: (appointment: Appointment, action: AppointmentAction) => void;
};

function sortAppointments(items: Appointment[]): Appointment[] {
  return [...items].sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function AppointmentList({
  appointments,
  role,
  pendingAppointmentId,
  onAction,
}: AppointmentListProps) {
  return (
    <ul className="space-y-3">
      {sortAppointments(appointments).map((appointment) => {
        const actions = getAvailableAppointmentActions(appointment, role);
        const isPending = pendingAppointmentId === appointment.id;

        return (
          <li key={appointment.id} className="surface-panel space-y-3 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1 text-[var(--text-sm)]">
                <p className="font-medium">نوبت</p>
                <p className="text-[var(--color-muted)]" dir="ltr">
                  ID: {appointment.id}
                </p>
                <p className="text-[var(--color-muted)]" dir="ltr">
                  Slot: {appointment.availabilitySlotId}
                </p>
                <p className="text-[var(--color-muted)]" dir="ltr">
                  Doctor profile: {appointment.doctorId}
                </p>
                <p className="text-[var(--color-muted)]">
                  ایجاد: {formatJalaliDateTime(appointment.createdAt)}
                </p>
              </div>
              <AppointmentStatusBadge status={appointment.status} />
            </div>

            {actions.length > 0 ? (
              <div className="flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-3">
                {actions.map((action) => (
                  <Button
                    key={action}
                    size="sm"
                    variant={action === 'CANCELED' ? 'danger' : 'secondary'}
                    disabled={isPending}
                    onClick={() => onAction(appointment, action)}
                  >
                    {ACTION_LABELS[action]}
                  </Button>
                ))}
              </div>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
