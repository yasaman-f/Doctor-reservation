import type { Role } from '@/shared/types/user';
import type { Appointment } from '@/features/appointments/types';
import { AppointmentStatus } from '@/shared/types/appointment';

/**
 * Actions offered in the UI based on role + current status.
 * Matches backend ownership/role checks; COMPLETED still requires slot endTime
 * on the server — failures surface as API errors.
 */
export type AppointmentAction = 'CONFIRMED' | 'CANCELED' | 'COMPLETED';

export function getAvailableAppointmentActions(
  appointment: Appointment,
  role: Role | null | undefined,
): AppointmentAction[] {
  const { status } = appointment;

  if (status === AppointmentStatus.CANCELED || status === AppointmentStatus.COMPLETED) {
    return [];
  }

  if (role === 'PATIENT') {
    if (
      status === AppointmentStatus.PENDING ||
      status === AppointmentStatus.CONFIRMED
    ) {
      return ['CANCELED'];
    }
    return [];
  }

  if (role === 'DOCTOR') {
    if (status === AppointmentStatus.PENDING) {
      return ['CONFIRMED', 'CANCELED'];
    }
    if (status === AppointmentStatus.CONFIRMED) {
      return ['COMPLETED', 'CANCELED'];
    }
  }

  return [];
}
