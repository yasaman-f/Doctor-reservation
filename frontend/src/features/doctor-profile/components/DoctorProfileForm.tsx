import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { DoctorProfile } from '@/features/doctor-profile/types';
import {
  doctorProfileFormSchema,
  type DoctorProfileFormValues,
} from '@/features/doctor-profile/schemas/doctor-profile.schema';
import { getErrorMessage } from '@/shared/utils/error-message';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { FormField } from '@/shared/ui/FormField';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';

type DoctorProfileFormProps = {
  mode: 'create' | 'edit';
  initialProfile?: DoctorProfile | null;
  isSubmitting: boolean;
  error: unknown;
  onSubmit: (values: {
    specialty: string;
    licenseNo: string;
    bio?: string;
  }) => void;
};

export function DoctorProfileForm({
  mode,
  initialProfile,
  isSubmitting,
  error,
  onSubmit,
}: DoctorProfileFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DoctorProfileFormValues>({
    resolver: zodResolver(doctorProfileFormSchema),
    defaultValues: {
      specialty: initialProfile?.specialty ?? '',
      licenseNo: initialProfile?.licenseNo ?? '',
      bio: initialProfile?.bio ?? '',
    },
  });

  useEffect(() => {
    reset({
      specialty: initialProfile?.specialty ?? '',
      licenseNo: initialProfile?.licenseNo ?? '',
      bio: initialProfile?.bio ?? '',
    });
  }, [initialProfile, reset]);

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => {
        const bio = values.bio.trim();
        onSubmit({
          specialty: values.specialty.trim(),
          licenseNo: values.licenseNo.trim(),
          ...(bio ? { bio } : {}),
        });
      })}
      noValidate
    >
      <FormField
        label="تخصص"
        htmlFor="doctor-specialty"
        error={errors.specialty?.message}
        required
      >
        <Input
          id="doctor-specialty"
          hasError={Boolean(errors.specialty)}
          {...register('specialty')}
        />
      </FormField>

      <FormField
        label="شماره پروانه"
        htmlFor="doctor-license"
        error={errors.licenseNo?.message}
        required
      >
        <Input
          id="doctor-license"
          dir="ltr"
          className="text-start"
          hasError={Boolean(errors.licenseNo)}
          {...register('licenseNo')}
        />
      </FormField>

      <FormField
        label="بیوگرافی (اختیاری)"
        htmlFor="doctor-bio"
        error={errors.bio?.message}
        hint="در صورت وارد کردن، حداقل ۱۰ کاراکتر"
      >
        <Textarea
          id="doctor-bio"
          hasError={Boolean(errors.bio)}
          {...register('bio')}
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
