import { z } from 'zod';

/** Shared validators mirroring backend DTO rules. */
export const emailSchema = z.email('ایمیل معتبر وارد کنید');

export const passwordSchema = z
  .string()
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'رمز عبور باید حداقل ۸ کاراکتر و شامل حرف بزرگ، حرف کوچک، عدد و کاراکتر خاص باشد',
  );

export const phoneSchema = z.union([
  z.literal(''),
  z
    .string()
    .regex(/^(\+98|0)?9\d{9}$/, 'phone number is not valid'),
]);
