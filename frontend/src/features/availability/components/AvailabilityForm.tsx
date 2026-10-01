import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  availabilityLocalFormSchema,
  isoToLocalDateTime,
  localDateTimeToIso,
  type AvailabilityLocalFormValues,
} from '@/features/availability/schemas/availability.schema';
import type { AvailabilitySlot } from '@/features/availability/types';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { FormField } from '@/shared/ui/FormField';
import { Input } from '@/shared/ui/Input';

type AvailabilityFormProps = {
  mode: 'create' | 'edit';
  initialSlot?: AvailabilitySlot | null;
  isSubmitting: boolean;
  error: unknown;
  onSubmit: (values: { startTime: string; endTime: string }) => void;
  onCancel?: () => void;
};

export function AvailabilityForm({
  mode,
  initialSlot,
  isSubmitting,
  error,
  onSubmit,
  onCancel,
}: AvailabilityFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AvailabilityLocalFormValues>({
    resolver: zodResolver(availabilityLocalFormSchema),
    defaultValues: {
      startTime: initialSlot ? isoToLocalDateTime(initialSlot.startTime) : '',
      endTime: initialSlot ? isoToLocalDateTime(initialSlot.endTime) : '',
    },
  });

  useEffect(() => {
    reset({
      startTime: initialSlot ? isoToLocalDateTime(initialSlot.startTime) : '',
      endTime: initialSlot ? isoToLocalDateTime(initialSlot.endTime) : '',
    });
  }, [initialSlot, reset]);

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => {
        onSubmit({
          startTime: localDateTimeToIso(values.startTime),
          endTime: localDateTimeToIso(values.endTime),
        });
      })}
      noValidate
    >
      <FormField
        label="شروع"
        htmlFor="availability-start"
        error={errors.startTime?.message}
        required
      >
        <Input
          id="availability-start"
          type="datetime-local"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.startTime)}
          {...register('startTime')}
        />
      </FormField>

      <FormField
        label="پایان"
        htmlFor="availability-end"
        error={errors.endTime?.message}
        required
      >
        <Input
          id="availability-end"
          type="datetime-local"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.endTime)}
          {...register('endTime')}
        />
      </FormField>

      {error ? (
        <Alert
          variant="error"
          title={mode === 'create' ? 'ایجاد ناموفق' : 'ویرایش ناموفق'}
        >
          {getErrorMessage(error, 'عملیات ممکن نشد')}
        </Alert>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <Button type="submit" isLoading={isSubmitting}>
          {mode === 'create' ? 'افزودن بازه' : 'ذخیره تغییرات'}
        </Button>
        {onCancel ? (
          <Button
            type="button"
            variant="secondary"
            disabled={isSubmitting}
            onClick={onCancel}
          >
            انصراف
          </Button>
        ) : null}
      </div>
    </form>
  );
}
