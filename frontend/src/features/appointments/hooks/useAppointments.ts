import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createAppointment,
  getMyAppointments,
  updateAppointmentStatus,
} from '@/features/appointments/api/appointments';
import type {
  CreateAppointmentPayload,
  UpdateAppointmentStatusPayload,
} from '@/features/appointments/types';
import { queryKeys } from '@/shared/lib/query-client';

export function useMyAppointmentsQuery(enabled = true) {
  return useQuery({
    queryKey: queryKeys.myAppointments,
    queryFn: getMyAppointments,
    enabled,
  });
}

export function useCreateAppointmentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateAppointmentPayload) =>
      createAppointment(payload),
    onSuccess: (appointment) => {
      queryClient.setQueryData(
        queryKeys.myAppointments,
        (current: Awaited<ReturnType<typeof getMyAppointments>> | undefined) =>
          current ? [appointment, ...current] : [appointment],
      );
    },
  });
}

export function useUpdateAppointmentStatusMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateAppointmentStatusPayload;
    }) => updateAppointmentStatus(id, payload),
    onSuccess: (updated) => {
      queryClient.setQueryData(
        queryKeys.myAppointments,
        (current: Awaited<ReturnType<typeof getMyAppointments>> | undefined) =>
          current
            ? current.map((item) =>
                item.id === updated.id ? updated : item,
              )
            : [updated],
      );
    },
  });
}
