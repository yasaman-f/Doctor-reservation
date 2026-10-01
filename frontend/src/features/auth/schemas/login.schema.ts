import { z } from 'zod';
import { emailSchema } from '@/shared/lib/validation';

export const loginFormSchema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
