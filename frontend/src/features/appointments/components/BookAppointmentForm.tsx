import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  bookAppointmentFormSchema,
  type BookAppointmentFormValues,
} from '@/features/appointments/schemas/appointment.schema';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { FormField } from '@/shared/ui/FormField';
import { Input } from '@/shared/ui/Input';

type BookAppointmentFormProps = {
  isSubmitting: boolean;
  error: unknown;
  onSubmit: (values: { availabilitySlotId: string }) => void;
};

export function BookAppointmentForm({
  isSubmitting,
  error,
  onSubmit,
}: BookAppointmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookAppointmentFormValues>({
    resolver: zodResolver(bookAppointmentFormSchema),
    defaultValues: {
      availabilitySlotId: '',
    },
  });

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => {
        onSubmit({
          availabilitySlotId: values.availabilitySlotId.trim(),
        });
      })}
      noValidate
    >
      <FormField
        label="شناسه بازه زمانی (availabilitySlotId)"
        htmlFor="book-slot-id"
        error={errors.availabilitySlotId?.message}
        hint="بک‌اند فهرست عمومی پزشک/بازه ندارد؛ شناسه بازه آزاد پزشک را وارد کنید."
        required
      >
        <Input
          id="book-slot-id"
          dir="ltr"
          className="text-start"
          placeholder="clxavailability…"
          hasError={Boolean(errors.availabilitySlotId)}
          {...register('availabilitySlotId')}
        />
      </FormField>

      {error ? (
        <Alert variant="error" title="رزرو ناموفق">
          {getErrorMessage(error, 'رزرو نوبت ممکن نشد')}
        </Alert>
      ) : null}

      <Button type="submit" isLoading={isSubmitting}>
        ثبت درخواست نوبت
      </Button>
    </form>
  );
}
