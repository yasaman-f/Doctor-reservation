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

/**
 * Shape returned by GET /doctor (public endpoint). Mirrors the backend
 * DoctorService.findAll projection: id, specialty, bio, user { firstName, lastName }.
 */
export type Doctor = {
  id: string;
  specialty: string;
  bio: string | null;
  user: {
    firstName: string;
    lastName: string;
  };
};

/**
 * Shape returned by GET /availability/doctor/:doctorId (public endpoint).
 * Backend returns ONLY unbooked slots (isBooked === false).
 */
export type AvailableSlot = {
  id: string;
  doctorId: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
};
