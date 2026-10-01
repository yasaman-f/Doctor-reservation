import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PatientProfileForm } from '@/features/patient-profile/components/PatientProfileForm';
import {
  useCreatePatientProfileMutation,
  useDeletePatientProfileMutation,
  usePatientProfileQuery,
  useUpdatePatientProfileMutation,
} from '@/features/patient-profile/hooks/usePatientProfile';
import { ROUTES } from '@/shared/constants/routes';
import { formatJalaliDate } from '@/shared/utils/date';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Modal } from '@/shared/ui/Modal';
import { PageError } from '@/shared/ui/PageError';
import { FullPageSpinner } from '@/shared/ui/Spinner';
import { useToast } from '@/shared/ui/Toast';

export function PatientProfilePage() {
  const { pushToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { profile, isLoading, isMissing, isError, error, refetch } =
    usePatientProfileQuery();
  const createMutation = useCreatePatientProfileMutation();
  const updateMutation = useUpdatePatientProfileMutation();
  const deleteMutation = useDeletePatientProfileMutation();

  if (isLoading) {
    return <FullPageSpinner label="در حال بارگذاری پرونده…" />;
  }

  if (isError) {
    return (
      <PageError
        title="بارگذاری پرونده ناموفق بود"
        message={getErrorMessage(error, 'پرونده بیمار بارگذاری نشد')}
        onRetry={() => {
          void refetch();
        }}
      />
    );
  }

  if (isMissing || !profile) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <div>
          <h1 className="text-title">تکمیل پرونده بیمار</h1>
          <p className="text-helper mt-2">
            برای استفاده از نوبت‌دهی، ابتدا پرونده خود را ایجاد کنید.
          </p>
        </div>
        <div className="surface-panel p-5">
          <PatientProfileForm
            mode="create"
            isSubmitting={createMutation.isPending}
            error={createMutation.error}
            onSubmit={(values) => {
              createMutation.mutate(values, {
                onSuccess: () => {
                  pushToast({
                    tone: 'success',
                    title: 'پرونده ایجاد شد',
                    message: 'اکنون می‌توانید از امکانات بیمار استفاده کنید.',
                  });
                },
              });
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-title">پرونده بیمار</h1>
          <p className="text-helper mt-1">مشاهده و مدیریت اطلاعات پرونده</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsEditing((value) => !value)}
          >
            {isEditing ? 'انصراف از ویرایش' : 'ویرایش'}
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => setDeleteOpen(true)}
          >
            حذف پرونده
          </Button>
        </div>
      </div>

      <div className="surface-panel space-y-3 p-5 text-[var(--text-sm)]">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[var(--color-muted)]">کد ملی</span>
          <span className="font-medium" dir="ltr">
            {profile.nationalId}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="text-[var(--color-muted)]">تاریخ تولد</span>
          <span>{formatJalaliDate(profile.dateOfBirth)}</span>
        </div>
      </div>

      {isEditing ? (
        <div className="surface-panel space-y-4 p-5">
          <h2 className="text-heading">ویرایش پرونده</h2>
          <PatientProfileForm
            mode="edit"
            initialProfile={profile}
            isSubmitting={updateMutation.isPending}
            error={updateMutation.error}
            onSubmit={(values) => {
              updateMutation.mutate(values, {
                onSuccess: () => {
                  setIsEditing(false);
                  pushToast({
                    tone: 'success',
                    title: 'ذخیره شد',
                    message: 'پرونده بیمار به‌روزرسانی شد.',
                  });
                },
              });
            }}
          />
        </div>
      ) : (
        <EmptyState
          title="آماده استفاده"
          description="پرونده شما فعال است. می‌توانید نوبت‌ها را مدیریت کنید."
          action={
            <Link to={ROUTES.patient.appointments}>
              <Button variant="secondary">مشاهده نوبت‌ها</Button>
            </Link>
          }
        />
      )}

      <Modal
        open={deleteOpen}
        title="حذف پرونده بیمار"
        onClose={() => {
          if (!deleteMutation.isPending) {
            setDeleteOpen(false);
          }
        }}
        footer={
          <>
            <Button
              variant="secondary"
              disabled={deleteMutation.isPending}
              onClick={() => setDeleteOpen(false)}
            >
              انصراف
            </Button>
            <Button
              variant="danger"
              isLoading={deleteMutation.isPending}
              onClick={() => {
                deleteMutation.mutate(undefined, {
                  onSuccess: (result) => {
                    setDeleteOpen(false);
                    setIsEditing(false);
                    pushToast({
                      tone: 'success',
                      title: 'حذف شد',
                      message: result.message,
                    });
                  },
                });
              }}
            >
              تأیید حذف
            </Button>
          </>
        }
      >
        <p className="text-helper">
          با حذف پرونده، دسترسی به نوبت‌دهی تا ایجاد مجدد پرونده ممکن نیست. از
          حساب خارج نمی‌شوید.
        </p>
        {deleteMutation.isError ? (
          <Alert variant="error" title="حذف ناموفق" className="mt-3">
            {getErrorMessage(deleteMutation.error, 'حذف پرونده ممکن نشد')}
          </Alert>
        ) : null}
      </Modal>
    </div>
  );
}
