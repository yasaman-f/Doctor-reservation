import type {
  Appointment,
  CreateAppointmentPayload,
  UpdateAppointmentStatusPayload,
} from '@/features/appointments/types';
import { apiClient } from '@/shared/lib/axios';

/** POST /appointment/add */
export async function createAppointment(
  payload: CreateAppointmentPayload,
): Promise<Appointment> {
  const { data } = await apiClient.post<Appointment>(
    '/appointment/add',
    payload,
  );
  return data;
}

/** GET /appointment/my-appointments */
export async function getMyAppointments(): Promise<Appointment[]> {
  const { data } = await apiClient.get<Appointment[]>(
    '/appointment/my-appointments',
  );
  return data;
}

/** PATCH /appointment/:id/status */
export async function updateAppointmentStatus(
  id: string,
  payload: UpdateAppointmentStatusPayload,
): Promise<Appointment> {
  const { data } = await apiClient.patch<Appointment>(
    `/appointment/${id}/status`,
    payload,
  );
  return data;
}
