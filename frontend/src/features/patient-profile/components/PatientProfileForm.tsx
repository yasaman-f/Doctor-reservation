import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { PatientProfile } from '@/features/patient-profile/types';
import {
  patientProfileFormSchema,
  toDateInputValue,
  toIsoDateOfBirth,
  type PatientProfileFormValues,
} from '@/features/patient-profile/schemas/patient-profile.schema';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { FormField } from '@/shared/ui/FormField';
import { Input } from '@/shared/ui/Input';

type PatientProfileFormProps = {
  mode: 'create' | 'edit';
  initialProfile?: PatientProfile | null;
  isSubmitting: boolean;
  error: unknown;
  onSubmit: (values: {
    nationalId: string;
    dateOfBirth?: string;
  }) => void;
};

export function PatientProfileForm({
  mode,
  initialProfile,
  isSubmitting,
  error,
  onSubmit,
}: PatientProfileFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PatientProfileFormValues>({
    resolver: zodResolver(patientProfileFormSchema),
    defaultValues: {
      nationalId: initialProfile?.nationalId ?? '',
      dateOfBirth: toDateInputValue(initialProfile?.dateOfBirth),
    },
  });

  useEffect(() => {
    reset({
      nationalId: initialProfile?.nationalId ?? '',
      dateOfBirth: toDateInputValue(initialProfile?.dateOfBirth),
    });
  }, [initialProfile, reset]);

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => {
        onSubmit({
          nationalId: values.nationalId.trim(),
          dateOfBirth: toIsoDateOfBirth(values.dateOfBirth),
        });
      })}
      noValidate
    >
      <FormField
        label="کد ملی"
        htmlFor="patient-national-id"
        error={errors.nationalId?.message}
        required
      >
        <Input
          id="patient-national-id"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.nationalId)}
          {...register('nationalId')}
        />
      </FormField>

      <FormField
        label="تاریخ تولد (اختیاری)"
        htmlFor="patient-dob"
        error={errors.dateOfBirth?.message}
      >
        <Input
          id="patient-dob"
          type="date"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.dateOfBirth)}
          {...register('dateOfBirth')}
        />
      </FormField>

      {error ? (
        <Alert variant="error" title={mode === 'create' ? 'ایجاد ناموفق' : 'ویرایش ناموفق'}>
          {getErrorMessage(error, 'عملیات ممکن نشد')}
        </Alert>
      ) : null}

      <Button type="submit" isLoading={isSubmitting}>
        {mode === 'create' ? 'ایجاد پرونده' : 'ذخیره تغییرات'}
      </Button>
    </form>
  );
}
