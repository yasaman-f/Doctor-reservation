import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookAppointmentForm } from '@/features/appointments/components/BookAppointmentForm';
import { useCreateAppointmentMutation } from '@/features/appointments/hooks/useAppointments';
import { ROUTES } from '@/shared/constants/routes';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { useToast } from '@/shared/ui/Toast';

export function PatientBookPage() {
  const navigate = useNavigate();
  const { pushToast } = useToast();
  const createMutation = useCreateAppointmentMutation();
  const [formKey, setFormKey] = useState(0);

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-title">دریافت نوبت</h1>
          <p className="text-helper mt-1">
            درخواست نوبت با شناسه بازه زمانی آزاد پزشک
          </p>
        </div>
        <Link to={ROUTES.patient.appointments}>
          <Button variant="secondary" size="sm">
            نوبت‌های من
          </Button>
        </Link>
      </div>

      <Alert variant="info" title="محدودیت بک‌اند">
        API عمومی برای فهرست پزشکان یا بازه‌های آزاد وجود ندارد. شناسه
        availabilitySlotId را مستقیماً وارد کنید.
      </Alert>

      <div className="surface-panel p-5">
        <BookAppointmentForm
          key={formKey}
          isSubmitting={createMutation.isPending}
          error={createMutation.error}
          onSubmit={(values) => {
            createMutation.mutate(values, {
              onSuccess: () => {
                createMutation.reset();
                setFormKey((key) => key + 1);
                pushToast({
                  tone: 'success',
                  title: 'درخواست ثبت شد',
                  message: 'نوبت با وضعیت در انتظار تأیید ایجاد شد.',
                });
                void navigate(ROUTES.patient.appointments);
              },
            });
          }}
        />
      </div>
    </div>
  );
}
