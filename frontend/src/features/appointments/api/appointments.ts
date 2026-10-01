import type {
  Appointment,
  AvailableSlot,
  CreateAppointmentPayload,
  Doctor,
  UpdateAppointmentStatusPayload,
} from '@/features/appointments/types';
import { apiClient } from '@/shared/lib/axios';

/** GET /doctor — public; lists doctor profiles. */
export async function getDoctors(): Promise<Doctor[]> {
  const { data } = await apiClient.get<Doctor[]>('/doctor');
  return data;
}

/** GET /availability/doctor/:doctorId — public; returns only unbooked slots. */
export async function getAvailableSlots(
  doctorId: string,
): Promise<AvailableSlot[]> {
  const { data } = await apiClient.get<AvailableSlot[]>(
    `/availability/doctor/${doctorId}`,
  );
  return data;
}

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
