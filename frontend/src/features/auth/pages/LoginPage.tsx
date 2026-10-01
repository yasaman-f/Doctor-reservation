import { LoginForm } from '@/features/auth/components/LoginForm';

export function LoginPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title">ورود به حساب</h1>
        <p className="text-helper mt-2">
          با ایمیل و رمز عبور وارد شوید.
        </p>
      </div>
      <div className="surface-panel p-6 sm:p-7">
        <LoginForm />
      </div>
    </div>
  );
}
