import { z } from 'zod';

/**
 * Form fields use datetime-local; payload mirrors CreateAvailabilityDto
 * (startTime / endTime as ISO 8601 via @IsDateString + @IsNotEmpty).
 */
export const availabilityLocalFormSchema = z.object({
  startTime: z
    .string()
    .min(1, 'startTime should not be empty')
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: 'startTime must be a valid ISO 8601 date string',
    }),
  endTime: z
    .string()
    .min(1, 'endTime should not be empty')
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: 'endTime must be a valid ISO 8601 date string',
    }),
});

export type AvailabilityLocalFormValues = z.infer<
  typeof availabilityLocalFormSchema
>;

/** Convert datetime-local value to ISO 8601 for the API. */
export function localDateTimeToIso(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toISOString();
}

/** Convert ISO string to datetime-local input value (local timezone). */
export function isoToLocalDateTime(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
