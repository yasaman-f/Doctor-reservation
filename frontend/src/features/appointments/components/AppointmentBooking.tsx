import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useAvailableSlotsQuery,
  useCreateAppointmentMutation,
  useDoctorsQuery,
} from '@/features/appointments/hooks/useAppointments';
import type { Doctor } from '@/features/appointments/types';
import { Alert } from '@/shared/ui/Alert';
import { Button } from '@/shared/ui/Button';
import { ROUTES } from '@/shared/constants/routes';
import { formatJalaliShortDateTime } from '@/shared/utils/date';
import { useToast } from '@/shared/ui/Toast';
import { DoctorList } from '@/features/appointments/components/DoctorList';
import { SlotPicker } from '@/features/appointments/components/SlotPicker';

/**
 * End-to-end patient booking flow: pick a doctor → route their available
 * slots → select a slot → confirm. Slot IDs are chosen by the user from the
 * backend data; there is no manual availabilitySlotId input.
 */
export function AppointmentBooking() {
  const navigate = useNavigate();
  const { pushToast } = useToast();

  const doctorsQuery = useDoctorsQuery();
  const createMutation = useCreateAppointmentMutation();

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  const slotsQuery = useAvailableSlotsQuery(selectedDoctor?.id ?? null);

  const handleSelectDoctor = (doctor: Doctor) => {
    // Switching doctors must reset the previously chosen slot.
    setSelectedDoctor((current) => {
      if (current?.id !== doctor.id) {
        setSelectedSlotId(null);
      }
      return doctor;
    });
  };

  const selectedSlot = slotsQuery.data?.find((slot) => slot.id === selectedSlotId);

  const canSubmit = Boolean(selectedSlot) && !createMutation.isPending;

  const handleSubmit = () => {
    if (!selectedSlot) {
      return;
    }
    createMutation.mutate(
      { availabilitySlotId: selectedSlot.id },
      {
        onSuccess: () => {
          createMutation.reset();
          pushToast({
            tone: 'success',
            title: 'درخواست ثبت شد',
            message: 'نوبت با وضعیت در انتظار تأیید ایجاد شد.',
          });
          void navigate(ROUTES.patient.appointments);
        },
      },
    );
  };

  return (
    <div className="space-y-8">
      <section aria-labelledby="booking-step-doctor">
        <h2
          id="booking-step-doctor"
          className="mb-3 text-heading text-[var(--color-text)]"
        >
          ۱. انتخاب پزشک
        </h2>
        <DoctorList
          doctors={doctorsQuery.data ?? []}
          selectedDoctorId={selectedDoctor?.id ?? null}
          isLoading={doctorsQuery.isLoading}
          isError={doctorsQuery.isError}
          error={doctorsQuery.error}
          onSelect={handleSelectDoctor}
          onRetry={() => void doctorsQuery.refetch()}
        />
      </section>

      {selectedDoctor ? (
        <section aria-labelledby="booking-step-slot">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2
              id="booking-step-slot"
              className="text-heading text-[var(--color-text)]"
            >
              ۲. انتخاب زمان
            </h2>
            <p className="text-[var(--text-sm)] text-[var(--color-muted)]">
              {selectedDoctor.user.firstName} {selectedDoctor.user.lastName} ·{' '}
              {selectedDoctor.specialty}
            </p>
          </div>
          <SlotPicker
            slots={slotsQuery.data ?? []}
            selectedSlotId={selectedSlotId}
            isLoading={slotsQuery.isLoading}
            isError={slotsQuery.isError}
            error={slotsQuery.error}
            disabled={createMutation.isPending}
            onSelect={(slot) => setSelectedSlotId(slot.id)}
            onRetry={() => void slotsQuery.refetch()}
          />
        </section>
      ) : null}

      {selectedSlot ? (
        <section aria-labelledby="booking-step-confirm" className="surface-panel p-5">
          <h2
            id="booking-step-confirm"
            className="mb-3 text-heading text-[var(--color-text)]"
          >
            ۳. تأیید نوبت
          </h2>

          {createMutation.isError ? (
            <Alert variant="error" title="رزرو ناموفق" className="mb-4">
              {createMutation.error instanceof Error
                ? createMutation.error.message
                : 'رزرو نوبت ممکن نشد'}
            </Alert>
          ) : null}

          <div className="mb-4 space-y-1 text-[var(--text-sm)]">
            <p className="text-[var(--color-muted)]">
              پزشک: <span className="text-[var(--color-text)]">{selectedDoctor?.user.firstName} {selectedDoctor?.user.lastName}</span>
            </p>
            <p className="text-[var(--color-muted)]">
              نوبت {formatJalaliShortDateTime(selectedSlot.startTime)} برای این
              پزشک ثبت می‌شود.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button onClick={handleSubmit} disabled={!canSubmit} isLoading={createMutation.isPending}>
              تأیید و ثبت نوبت
            </Button>
            <Button
              variant="secondary"
              disabled={createMutation.isPending}
              onClick={() => setSelectedSlotId(null)}
            >
              تغییر زمان
            </Button>
          </div>
        </section>
      ) : null}
    </div>
  );
}

