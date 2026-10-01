import { useState } from 'react';
import { AppointmentList } from '@/features/appointments/components/AppointmentList';
import {
  useMyAppointmentsQuery,
  useUpdateAppointmentStatusMutation,
} from '@/features/appointments/hooks/useAppointments';
import type { Appointment } from '@/features/appointments/types';
import type { AppointmentAction } from '@/features/appointments/utils/appointment-actions';
import { useAuth } from '@/features/auth/hooks/useAuth';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Modal } from '@/shared/ui/Modal';
import { PageError } from '@/shared/ui/PageError';
import { FullPageSpinner } from '@/shared/ui/Spinner';
import { useToast } from '@/shared/ui/Toast';

const ACTION_SUCCESS: Record<AppointmentAction, { title: string; message: string }> = {
  CONFIRMED: { title: 'تأیید شد', message: 'نوبت تأیید شد.' },
  CANCELED: { title: 'لغو شد', message: 'نوبت لغو شد.' },
  COMPLETED: { title: 'اتمام', message: 'نوبت به‌عنوان انجام‌شده ثبت شد.' },
};

export function DoctorAppointmentsPage() {
  const { user } = useAuth();
  const { pushToast } = useToast();
  const appointmentsQuery = useMyAppointmentsQuery();
  const statusMutation = useUpdateAppointmentStatusMutation();
  const [pendingAction, setPendingAction] = useState<{
    appointment: Appointment;
    action: AppointmentAction;
  } | null>(null);

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
  const needsConfirm =
    pendingAction?.action === 'CANCELED' ||
    pendingAction?.action === 'COMPLETED';

  const runStatusUpdate = (
    appointment: Appointment,
    action: AppointmentAction,
  ) => {
    statusMutation.mutate(
      {
        id: appointment.id,
        payload: { status: action },
      },
      {
        onSuccess: () => {
          setPendingAction(null);
          pushToast({
            tone: 'success',
            title: ACTION_SUCCESS[action].title,
            message: ACTION_SUCCESS[action].message,
          });
        },
      },
    );
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-title">نوبت‌های مراجعان</h1>
        <p className="text-helper mt-1">
          تأیید، اتمام یا لغو نوبت‌های مربوط به شما
        </p>
      </div>

      {appointments.length === 0 ? (
        <EmptyState
          title="نوبتی وجود ندارد"
          description="وقتی بیمار بازه‌ای را رزرو کند، اینجا نمایش داده می‌شود."
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
            statusMutation.reset();
            if (action === 'CONFIRMED') {
              runStatusUpdate(appointment, action);
              return;
            }
            setPendingAction({ appointment, action });
          }}
        />
      )}

      {statusMutation.isError && !needsConfirm ? (
        <Alert variant="error" title="عملیات ناموفق">
          {getErrorMessage(statusMutation.error, 'به‌روزرسانی وضعیت ممکن نشد')}
        </Alert>
      ) : null}

      <Modal
        open={Boolean(pendingAction) && needsConfirm}
        title={
          pendingAction?.action === 'CANCELED' ? 'لغو نوبت' : 'اتمام نوبت'
        }
        onClose={() => {
          if (!statusMutation.isPending) {
            setPendingAction(null);
          }
        }}
        footer={
          <>
            <Button
              variant="secondary"
              disabled={statusMutation.isPending}
              onClick={() => setPendingAction(null)}
            >
              انصراف
            </Button>
            <Button
              variant={
                pendingAction?.action === 'CANCELED' ? 'danger' : 'primary'
              }
              isLoading={statusMutation.isPending}
              onClick={() => {
                if (!pendingAction) {
                  return;
                }
                runStatusUpdate(
                  pendingAction.appointment,
                  pendingAction.action,
                );
              }}
            >
              تأیید
            </Button>
          </>
        }
      >
        <p className="text-helper">
          {pendingAction?.action === 'CANCELED'
            ? 'آیا از لغو این نوبت مطمئن هستید؟'
            : 'اتمام فقط برای نوبت‌های تأییدشده پس از پایان زمان بازه مجاز است. در صورت رد شدن توسط سرور، پیام خطا نمایش داده می‌شود.'}
        </p>
        {statusMutation.isError ? (
          <Alert variant="error" title="عملیات ناموفق" className="mt-3">
            {getErrorMessage(statusMutation.error, 'به‌روزرسانی وضعیت ممکن نشد')}
          </Alert>
        ) : null}
      </Modal>
    </div>
  );
}
