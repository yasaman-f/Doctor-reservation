import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '@/features/auth/hooks/useLoginMutation';
import {
  loginFormSchema,
  type LoginFormValues,
} from '@/features/auth/schemas/login.schema';
import { ROUTES } from '@/shared/constants/routes';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { FormField } from '@/shared/ui/FormField';
import { Input } from '@/shared/ui/Input';

export function LoginForm() {
  const loginMutation = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => {
        loginMutation.mutate(values);
      })}
      noValidate
    >
      <FormField
        label="ایمیل"
        htmlFor="login-email"
        error={errors.email?.message}
        required
      >
        <Input
          id="login-email"
          type="email"
          autoComplete="email"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.email)}
          {...register('email')}
        />
      </FormField>

      <FormField
        label="رمز عبور"
        htmlFor="login-password"
        error={errors.password?.message}
        required
      >
        <Input
          id="login-password"
          type="password"
          autoComplete="current-password"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.password)}
          {...register('password')}
        />
      </FormField>

      {loginMutation.isError ? (
        <Alert variant="error" title="ورود ناموفق">
          {getErrorMessage(loginMutation.error, 'ورود ممکن نشد')}
        </Alert>
      ) : null}

      <Button
        type="submit"
        className="w-full"
        isLoading={loginMutation.isPending}
      >
        ورود
      </Button>

      <p className="text-center text-[var(--text-sm)] text-[var(--color-muted)]">
        حساب ندارید؟{' '}
        <Link
          to={ROUTES.register}
          className="font-medium text-[var(--color-primary)] hover:underline"
        >
          ثبت‌نام
        </Link>
      </p>
    </form>
  );
}
