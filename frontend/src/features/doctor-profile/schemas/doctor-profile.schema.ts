import { z } from 'zod';

/** Mirrors CreateDoctorProfileDto / UpdateDoctorProfileDto rules. */
export const doctorProfileFormSchema = z.object({
  specialty: z.string().min(1, 'specialty is required'),
  licenseNo: z.string().min(1, 'license number is required'),
  bio: z.string(),
}).superRefine((values, ctx) => {
  const bio = values.bio.trim();
  if (bio.length > 0 && bio.length < 10) {
    ctx.addIssue({
      code: 'custom',
      path: ['bio'],
      message: 'bio must be at least 10 characters',
    });
  }
});

export type DoctorProfileFormValues = z.infer<typeof doctorProfileFormSchema>;
