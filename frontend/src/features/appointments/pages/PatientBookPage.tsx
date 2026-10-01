import { Link } from 'react-router-dom';
import { AppointmentBooking } from '@/features/appointments/components/AppointmentBooking';
import { ROUTES } from '@/shared/constants/routes';
import { Button } from '@/shared/ui/Button';

export function PatientBookPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-title">دریافت نوبت</h1>
          <p className="text-helper mt-1">
            پزشک را انتخاب کنید، سپس از بازه‌های آزاد، زمان مناسب را برگزینید.
          </p>
        </div>
        <Link to={ROUTES.patient.appointments}>
          <Button variant="secondary" size="sm">
            نوبت‌های من
          </Button>
        </Link>
      </div>

      <AppointmentBooking />
    </div>
  );
}