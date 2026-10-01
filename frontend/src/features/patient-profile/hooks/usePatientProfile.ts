import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createPatientProfile,
  deletePatientProfile,
  getMyPatientProfile,
  updatePatientProfile,
  type CreatePatientProfilePayload,
  type UpdatePatientProfilePayload,
} from '@/features/patient-profile/api/patient-profile';
import { queryKeys } from '@/shared/lib/query-client';
import { ApiError } from '@/shared/types/api';

export function usePatientProfileQuery(enabled = true) {
  const query = useQuery({
    queryKey: queryKeys.patientProfile,
    queryFn: getMyPatientProfile,
    enabled,
  });

  const isMissing =
    query.isError &&
    query.error instanceof ApiError &&
    query.error.isNotFound;

  return {
    profile: query.data ?? null,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isMissing,
    isError: query.isError && !isMissing,
    error: isMissing ? null : query.error,
    refetch: query.refetch,
  };
}

export function useCreatePatientProfileMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreatePatientProfilePayload) =>
      createPatientProfile(payload),
    onSuccess: (profile) => {
      queryClient.setQueryData(queryKeys.patientProfile, profile);
    },
  });
}

export function useUpdatePatientProfileMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdatePatientProfilePayload) =>
      updatePatientProfile(payload),
    onSuccess: (profile) => {
      queryClient.setQueryData(queryKeys.patientProfile, profile);
    },
  });
}

export function useDeletePatientProfileMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deletePatientProfile(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.patientProfile });
    },
  });
}
