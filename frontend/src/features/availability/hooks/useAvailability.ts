import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createAvailability,
  deleteAvailability,
  getMyAvailability,
  updateAvailability,
} from '@/features/availability/api/availability';
import type {
  CreateAvailabilityPayload,
  UpdateAvailabilityPayload,
} from '@/features/availability/types';
import { queryKeys } from '@/shared/lib/query-client';

export function useMyAvailabilityQuery(enabled = true) {
  return useQuery({
    queryKey: queryKeys.doctorAvailability,
    queryFn: getMyAvailability,
    enabled,
  });
}

export function useCreateAvailabilityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateAvailabilityPayload) =>
      createAvailability(payload),
    onSuccess: (slot) => {
      queryClient.setQueryData(
        queryKeys.doctorAvailability,
        (current: Awaited<ReturnType<typeof getMyAvailability>> | undefined) =>
          current ? [...current, slot] : [slot],
      );
    },
  });
}

export function useUpdateAvailabilityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateAvailabilityPayload;
    }) => updateAvailability(id, payload),
    onSuccess: (updated) => {
      queryClient.setQueryData(
        queryKeys.doctorAvailability,
        (current: Awaited<ReturnType<typeof getMyAvailability>> | undefined) =>
          current
            ? current.map((slot) => (slot.id === updated.id ? updated : slot))
            : [updated],
      );
    },
  });
}

export function useDeleteAvailabilityMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteAvailability(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: queryKeys.doctorAvailability,
      });
    },
  });
}
