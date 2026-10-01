import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '@/features/auth/hooks/useRegisterMutation';
import {
  registerFormSchema,
  type RegisterFormValues,
} from '@/features/auth/schemas/register.schema';
import { ROUTES } from '@/shared/constants/routes';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { FormField } from '@/shared/ui/FormField';
import { Input } from '@/shared/ui/Input';
import { Select } from '@/shared/ui/Select';

export function RegisterForm() {
  const registerMutation = useRegisterMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      role: 'PATIENT',
    },
  });

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => {
        registerMutation.mutate(values);
      })}
      noValidate
    >
      <FormField
        label="نام"
        htmlFor="register-first-name"
        error={errors.firstName?.message}
        required
      >
        <Input
          id="register-first-name"
          autoComplete="given-name"
          placeholder="مثلاً سارا"
          hasError={Boolean(errors.firstName)}
          {...register('firstName')}
        />
      </FormField>

      <FormField
        label="نام خانوادگی"
        htmlFor="register-last-name"
        error={errors.lastName?.message}
        required
      >
        <Input
          id="register-last-name"
          autoComplete="family-name"
          placeholder="مثلاً محمدی"
          hasError={Boolean(errors.lastName)}
          {...register('lastName')}
        />
      </FormField>

      <FormField
        label="ایمیل"
        htmlFor="register-email"
        error={errors.email?.message}
        required
      >
        <Input
          id="register-email"
          type="email"
          autoComplete="email"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.email)}
          {...register('email')}
        />
      </FormField>

      <FormField
        label="شماره موبایل (اختیاری)"
        htmlFor="register-phone"
        error={errors.phone?.message}
        hint="فرمت ایرانی، مثلاً 09123456789"
      >
        <Input
          id="register-phone"
          type="tel"
          autoComplete="tel"
          dir="ltr"
          className="text-start"
          placeholder="09123456789"
          hasError={Boolean(errors.phone)}
          {...register('phone')}
        />
      </FormField>

      <FormField
        label="رمز عبور"
        htmlFor="register-password"
        error={errors.password?.message}
        hint="حداقل ۸ کاراکتر با حرف بزرگ، کوچک، عدد و کاراکتر خاص"
        required
      >
        <Input
          id="register-password"
          type="password"
          autoComplete="new-password"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.password)}
          {...register('password')}
        />
      </FormField>

      <FormField
        label="نوع حساب"
        htmlFor="register-role"
        error={errors.role?.message}
        required
      >
        <Select
          id="register-role"
          hasError={Boolean(errors.role)}
          {...register('role')}
        >
          <option value="PATIENT">بیمار</option>
          <option value="DOCTOR">پزشک</option>
        </Select>
      </FormField>

      {registerMutation.isError ? (
        <Alert variant="error" title="ثبت‌نام ناموفق">
          {getErrorMessage(registerMutation.error, 'ثبت‌نام ممکن نشد')}
        </Alert>
      ) : null}

      <Button
        type="submit"
        className="w-full"
        isLoading={registerMutation.isPending}
      >
        ایجاد حساب
      </Button>

      <p className="text-center text-[var(--text-sm)] text-[var(--color-muted)]">
        قبلاً ثبت‌نام کرده‌اید؟{' '}
        <Link
          to={ROUTES.login}
          className="font-medium text-[var(--color-primary)] hover:underline"
        >
          ورود
        </Link>
      </p>
    </form>
  );
}
