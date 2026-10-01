import { z } from 'zod';

/** Mirrors CreatePatientProfileDto / UpdatePatientProfileDto rules. */
export const patientProfileFormSchema = z.object({
  nationalId: z
    .string()
    .min(1, 'national ID is required')
    .min(10, 'national ID must be at least 10 characters'),
  /** HTML date input value (YYYY-MM-DD) or empty */
  dateOfBirth: z.string(),
});

export type PatientProfileFormValues = z.infer<typeof patientProfileFormSchema>;

export function toIsoDateOfBirth(dateOnly: string): string | undefined {
  const trimmed = dateOnly.trim();
  if (!trimmed) {
    return undefined;
  }
  return `${trimmed}T00:00:00.000Z`;
}

export function toDateInputValue(iso: string | null | undefined): string {
  if (!iso) {
    return '';
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  return date.toISOString().slice(0, 10);
}
