import type { AppointmentStatus } from '@/shared/types/appointment';

export type Appointment = {
  id: string;
  patientProfileId: string;
  doctorId: string;
  availabilitySlotId: string;
  status: AppointmentStatus;
  createdAt: string;
  updatedAt: string;
};

export type CreateAppointmentPayload = {
  availabilitySlotId: string;
};

export type UpdateAppointmentStatusPayload = {
  status: AppointmentStatus;
};
