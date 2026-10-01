import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DoctorProfileForm } from '@/features/doctor-profile/components/DoctorProfileForm';
import {
  useCreateDoctorProfileMutation,
  useDeleteDoctorProfileMutation,
  useDoctorProfileQuery,
  useUpdateDoctorProfileMutation,
} from '@/features/doctor-profile/hooks/useDoctorProfile';
import { ROUTES } from '@/shared/constants/routes';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Modal } from '@/shared/ui/Modal';
import { PageError } from '@/shared/ui/PageError';
import { FullPageSpinner } from '@/shared/ui/Spinner';
import { useToast } from '@/shared/ui/Toast';

export function DoctorProfilePage() {
  const { pushToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { profile, isLoading, isMissing, isError, error, refetch } =
    useDoctorProfileQuery();
  const createMutation = useCreateDoctorProfileMutation();
  const updateMutation = useUpdateDoctorProfileMutation();
  const deleteMutation = useDeleteDoctorProfileMutation();

  if (isLoading) {
    return <FullPageSpinner label="در حال بارگذاری پرونده…" />;
  }

  if (isError) {
    return (
      <PageError
        title="بارگذاری پرونده ناموفق بود"
        message={getErrorMessage(error, 'پرونده پزشک بارگذاری نشد')}
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
          <h1 className="text-title">تکمیل پرونده پزشک</h1>
          <p className="text-helper mt-2">
            برای مدیریت زمان‌های آزاد و نوبت‌ها، ابتدا پرونده خود را ایجاد کنید.
          </p>
        </div>
        <div className="surface-panel p-5">
          <DoctorProfileForm
            mode="create"
            isSubmitting={createMutation.isPending}
            error={createMutation.error}
            onSubmit={(values) => {
              createMutation.mutate(values, {
                onSuccess: () => {
                  pushToast({
                    tone: 'success',
                    title: 'پرونده ایجاد شد',
                    message: 'اکنون می‌توانید زمان‌های آزاد را مدیریت کنید.',
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
          <h1 className="text-title">پرونده پزشک</h1>
          <p className="text-helper mt-1">مشاهده و مدیریت اطلاعات حرفه‌ای</p>
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
          <span className="text-[var(--color-muted)]">تخصص</span>
          <span className="font-medium">{profile.specialty}</span>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-[var(--color-border)] pt-3">
          <span className="text-[var(--color-muted)]">شماره پروانه</span>
          <span className="font-medium" dir="ltr">
            {profile.licenseNo}
          </span>
        </div>
        <div className="border-t border-[var(--color-border)] pt-3">
          <p className="mb-1 text-[var(--color-muted)]">بیوگرافی</p>
          <p>{profile.bio?.trim() ? profile.bio : '—'}</p>
        </div>
      </div>

      {isEditing ? (
        <div className="surface-panel space-y-4 p-5">
          <h2 className="text-heading">ویرایش پرونده</h2>
          <DoctorProfileForm
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
                    message: 'پرونده پزشک به‌روزرسانی شد.',
                  });
                },
              });
            }}
          />
        </div>
      ) : (
        <EmptyState
          title="آماده استفاده"
          description="پرونده شما فعال است. می‌توانید زمان‌های آزاد را مدیریت کنید."
          action={
            <Link to={ROUTES.doctor.availability}>
              <Button variant="secondary">زمان‌های آزاد</Button>
            </Link>
          }
        />
      )}

      <Modal
        open={deleteOpen}
        title="حذف پرونده پزشک"
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
          با حذف پرونده، دسترسی به زمان‌های آزاد و نوبت‌ها تا ایجاد مجدد پرونده
          ممکن نیست. از حساب خارج نمی‌شوید.
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
