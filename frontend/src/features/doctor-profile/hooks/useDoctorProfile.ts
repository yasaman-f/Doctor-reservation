import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createDoctorProfile,
  deleteDoctorProfile,
  getMyDoctorProfile,
  updateDoctorProfile,
  type CreateDoctorProfilePayload,
  type UpdateDoctorProfilePayload,
} from '@/features/doctor-profile/api/doctor-profile';
import { queryKeys } from '@/shared/lib/query-client';
import { ApiError } from '@/shared/types/api';

export function useDoctorProfileQuery(enabled = true) {
  const query = useQuery({
    queryKey: queryKeys.doctorProfile,
    queryFn: getMyDoctorProfile,
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

export function useCreateDoctorProfileMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateDoctorProfilePayload) =>
      createDoctorProfile(payload),
    onSuccess: (profile) => {
      queryClient.setQueryData(queryKeys.doctorProfile, profile);
    },
  });
}

export function useUpdateDoctorProfileMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateDoctorProfilePayload) =>
      updateDoctorProfile(payload),
    onSuccess: (profile) => {
      queryClient.setQueryData(queryKeys.doctorProfile, profile);
    },
  });
}

export function useDeleteDoctorProfileMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteDoctorProfile(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: queryKeys.doctorProfile });
    },
  });
}
