import { RegisterForm } from '@/features/auth/components/RegisterForm';

export function RegisterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-title">ایجاد حساب کاربری</h1>
        <p className="text-helper mt-2">
          به‌عنوان بیمار یا پزشک ثبت‌نام کنید. سپس پرونده خود را تکمیل خواهید
          کرد.
        </p>
      </div>
      <div className="surface-panel p-6 sm:p-7">
        <RegisterForm />
      </div>
    </div>
  );
}
