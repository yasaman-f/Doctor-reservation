import { useState } from 'react';
import { AvailabilityForm } from '@/features/availability/components/AvailabilityForm';
import { AvailabilitySlotList } from '@/features/availability/components/AvailabilitySlotList';
import {
  useCreateAvailabilityMutation,
  useDeleteAvailabilityMutation,
  useMyAvailabilityQuery,
  useUpdateAvailabilityMutation,
} from '@/features/availability/hooks/useAvailability';
import type { AvailabilitySlot } from '@/features/availability/types';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Modal } from '@/shared/ui/Modal';
import { PageError } from '@/shared/ui/PageError';
import { FullPageSpinner } from '@/shared/ui/Spinner';
import { useToast } from '@/shared/ui/Toast';

export function AvailabilityPage() {
  const { pushToast } = useToast();
  const [editingSlot, setEditingSlot] = useState<AvailabilitySlot | null>(null);
  const [slotToDelete, setSlotToDelete] = useState<AvailabilitySlot | null>(
    null,
  );
  const [createFormKey, setCreateFormKey] = useState(0);

  const availabilityQuery = useMyAvailabilityQuery();
  const createMutation = useCreateAvailabilityMutation();
  const updateMutation = useUpdateAvailabilityMutation();
  const deleteMutation = useDeleteAvailabilityMutation();

  const isMutating =
    createMutation.isPending ||
    updateMutation.isPending ||
    deleteMutation.isPending;

  if (availabilityQuery.isLoading) {
    return <FullPageSpinner label="در حال بارگذاری زمان‌های آزاد…" />;
  }

  if (availabilityQuery.isError) {
    return (
      <PageError
        title="بارگذاری ناموفق بود"
        message={getErrorMessage(
          availabilityQuery.error,
          'زمان‌های آزاد بارگذاری نشد',
        )}
        onRetry={() => {
          void availabilityQuery.refetch();
        }}
      />
    );
  }

  const slots = availabilityQuery.data ?? [];

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-title">زمان‌های آزاد</h1>
        <p className="text-helper mt-1">
          بازه‌هایی که بیماران می‌توانند برای نوبت انتخاب کنند.
        </p>
      </div>

      <div className="surface-panel space-y-4 p-5">
        <h2 className="text-heading">
          {editingSlot ? 'ویرایش بازه' : 'افزودن بازه جدید'}
        </h2>
        <AvailabilityForm
          key={editingSlot?.id ?? `create-${createFormKey}`}
          mode={editingSlot ? 'edit' : 'create'}
          initialSlot={editingSlot}
          isSubmitting={
            editingSlot ? updateMutation.isPending : createMutation.isPending
          }
          error={editingSlot ? updateMutation.error : createMutation.error}
          onCancel={
            editingSlot
              ? () => {
                  setEditingSlot(null);
                  updateMutation.reset();
                }
              : undefined
          }
          onSubmit={(values) => {
            if (editingSlot) {
              updateMutation.mutate(
                { id: editingSlot.id, payload: values },
                {
                  onSuccess: () => {
                    setEditingSlot(null);
                    pushToast({
                      tone: 'success',
                      title: 'ذخیره شد',
                      message: 'بازه زمانی به‌روزرسانی شد.',
                    });
                  },
                },
              );
              return;
            }

            createMutation.mutate(values, {
              onSuccess: () => {
                createMutation.reset();
                setCreateFormKey((key) => key + 1);
                pushToast({
                  tone: 'success',
                  title: 'ایجاد شد',
                  message: 'بازه زمانی جدید اضافه شد.',
                });
              },
            });
          }}
        />
      </div>

      {slots.length === 0 ? (
        <EmptyState
          title="هنوز بازه‌ای ثبت نشده"
          description="اولین زمان آزاد خود را از فرم بالا اضافه کنید."
        />
      ) : (
        <AvailabilitySlotList
          slots={slots}
          editingId={editingSlot?.id ?? null}
          isMutating={isMutating}
          onEdit={(slot) => {
            createMutation.reset();
            updateMutation.reset();
            setEditingSlot(slot);
          }}
          onDelete={(slot) => {
            deleteMutation.reset();
            setSlotToDelete(slot);
          }}
        />
      )}

      <Modal
        open={Boolean(slotToDelete)}
        title="حذف بازه زمانی"
        onClose={() => {
          if (!deleteMutation.isPending) {
            setSlotToDelete(null);
          }
        }}
        footer={
          <>
            <Button
              variant="secondary"
              disabled={deleteMutation.isPending}
              onClick={() => setSlotToDelete(null)}
            >
              انصراف
            </Button>
            <Button
              variant="danger"
              isLoading={deleteMutation.isPending}
              onClick={() => {
                if (!slotToDelete) {
                  return;
                }
                deleteMutation.mutate(slotToDelete.id, {
                  onSuccess: (result) => {
                    if (editingSlot?.id === slotToDelete.id) {
                      setEditingSlot(null);
                    }
                    setSlotToDelete(null);
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
          این بازه از فهرست زمان‌های آزاد حذف می‌شود.
        </p>
        {deleteMutation.isError ? (
          <Alert variant="error" title="حذف ناموفق" className="mt-3">
            {getErrorMessage(deleteMutation.error, 'حذف بازه ممکن نشد')}
          </Alert>
        ) : null}
      </Modal>
    </div>
  );
}
