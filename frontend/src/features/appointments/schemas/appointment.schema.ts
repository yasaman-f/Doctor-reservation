import { z } from 'zod';
import { AppointmentStatus } from '@/shared/types/appointment';

/** Mirrors CreateAppointmentDto */
export const bookAppointmentFormSchema = z.object({
  availabilitySlotId: z
    .string()
    .min(1, 'availability slot id is required'),
});

export type BookAppointmentFormValues = z.infer<
  typeof bookAppointmentFormSchema
>;

/** Mirrors UpdateAppointmentStatusDto — status must be a Status enum value */
export const updateAppointmentStatusSchema = z.object({
  status: z.enum([
    AppointmentStatus.PENDING,
    AppointmentStatus.CONFIRMED,
    AppointmentStatus.CANCELED,
    AppointmentStatus.COMPLETED,
  ]),
});
