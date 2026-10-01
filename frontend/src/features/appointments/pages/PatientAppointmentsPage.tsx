import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppointmentList } from '@/features/appointments/components/AppointmentList';
import {
  useMyAppointmentsQuery,
  useUpdateAppointmentStatusMutation,
} from '@/features/appointments/hooks/useAppointments';
import type { Appointment } from '@/features/appointments/types';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { ROUTES } from '@/shared/constants/routes';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Modal } from '@/shared/ui/Modal';
import { PageError } from '@/shared/ui/PageError';
import { FullPageSpinner } from '@/shared/ui/Spinner';
import { useToast } from '@/shared/ui/Toast';

export function PatientAppointmentsPage() {
  const { user } = useAuth();
  const { pushToast } = useToast();
  const appointmentsQuery = useMyAppointmentsQuery();
  const statusMutation = useUpdateAppointmentStatusMutation();
  const [cancelTarget, setCancelTarget] = useState<Appointment | null>(null);

  if (appointmentsQuery.isLoading) {
    return <FullPageSpinner label="در حال بارگذاری نوبت‌ها…" />;
  }

  if (appointmentsQuery.isError) {
    return (
      <PageError
        title="بارگذاری ناموفق بود"
        message={getErrorMessage(
          appointmentsQuery.error,
          'نوبت‌ها بارگذاری نشد',
        )}
        onRetry={() => {
          void appointmentsQuery.refetch();
        }}
      />
    );
  }

  const appointments = appointmentsQuery.data ?? [];

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-title">نوبت‌های من</h1>
          <p className="text-helper mt-1">وضعیت درخواست‌های نوبت شما</p>
        </div>
        <Link to={ROUTES.patient.book}>
          <Button size="sm">دریافت نوبت</Button>
        </Link>
      </div>

      {appointments.length === 0 ? (
        <EmptyState
          title="نوبتی ثبت نشده"
          description="با وارد کردن شناسه بازه زمانی آزاد، درخواست نوبت ثبت کنید."
          action={
            <Link to={ROUTES.patient.book}>
              <Button variant="secondary">دریافت نوبت</Button>
            </Link>
          }
        />
      ) : (
        <AppointmentList
          appointments={appointments}
          role={user?.role}
          pendingAppointmentId={
            statusMutation.isPending
              ? (statusMutation.variables?.id ?? null)
              : null
          }
          onAction={(appointment, action) => {
            if (action === 'CANCELED') {
              statusMutation.reset();
              setCancelTarget(appointment);
            }
          }}
        />
      )}

      <Modal
        open={Boolean(cancelTarget)}
        title="لغو نوبت"
        onClose={() => {
          if (!statusMutation.isPending) {
            setCancelTarget(null);
          }
        }}
        footer={
          <>
            <Button
              variant="secondary"
              disabled={statusMutation.isPending}
              onClick={() => setCancelTarget(null)}
            >
              انصراف
            </Button>
            <Button
              variant="danger"
              isLoading={statusMutation.isPending}
              onClick={() => {
                if (!cancelTarget) {
                  return;
                }
                statusMutation.mutate(
                  {
                    id: cancelTarget.id,
                    payload: { status: 'CANCELED' },
                  },
                  {
                    onSuccess: () => {
                      setCancelTarget(null);
                      pushToast({
                        tone: 'success',
                        title: 'لغو شد',
                        message: 'نوبت لغو شد.',
                      });
                    },
                  },
                );
              }}
            >
              تأیید لغو
            </Button>
          </>
        }
      >
        <p className="text-helper">آیا از لغو این نوبت مطمئن هستید؟</p>
        {statusMutation.isError ? (
          <Alert variant="error" title="لغو ناموفق" className="mt-3">
            {getErrorMessage(statusMutation.error, 'لغو نوبت ممکن نشد')}
          </Alert>
        ) : null}
      </Modal>
    </div>
  );
}
