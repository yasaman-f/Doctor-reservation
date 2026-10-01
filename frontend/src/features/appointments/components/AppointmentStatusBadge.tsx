import type { AppointmentStatus } from '@/shared/types/appointment';
import { Badge } from '@/shared/ui/Badge';

const STATUS_LABELS: Record<AppointmentStatus, string> = {
  PENDING: 'در انتظار تأیید',
  CONFIRMED: 'تأیید شده',
  CANCELED: 'لغو شده',
  COMPLETED: 'انجام شده',
};

const STATUS_TONES: Record<
  AppointmentStatus,
  'warning' | 'success' | 'danger' | 'neutral'
> = {
  PENDING: 'warning',
  CONFIRMED: 'success',
  CANCELED: 'danger',
  COMPLETED: 'neutral',
};

type AppointmentStatusBadgeProps = {
  status: AppointmentStatus;
};

export function AppointmentStatusBadge({ status }: AppointmentStatusBadgeProps) {
  return <Badge tone={STATUS_TONES[status]}>{STATUS_LABELS[status]}</Badge>;
}

export function getAppointmentStatusLabel(status: AppointmentStatus): string {
  return STATUS_LABELS[status];
}
