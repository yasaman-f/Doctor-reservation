import { z } from 'zod';
import {
  emailSchema,
  passwordSchema,
  phoneSchema,
} from '@/shared/lib/validation';

export const registerFormSchema = z.object({
  firstName: z.string().min(2, 'نام باید حداقل ۲ کاراکتر باشد'),
  lastName: z.string().min(4, 'نام خانوادگی باید حداقل ۴ کاراکتر باشد'),
  email: emailSchema,
  phone: phoneSchema,
  password: passwordSchema,
  role: z.enum(['PATIENT', 'DOCTOR'], {
    message: 'نقش باید بیمار یا پزشک باشد',
  }),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
