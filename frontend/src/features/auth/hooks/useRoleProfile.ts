import { useQuery } from '@tanstack/react-query';
import { getMyDoctorProfile } from '@/features/doctor-profile/api/get-my-profile';
import { getMyPatientProfile } from '@/features/patient-profile/api/get-my-profile';
import { queryKeys } from '@/shared/lib/query-client';
import { ApiError } from '@/shared/types/api';
import type { Role } from '@/shared/types/user';

type UseRoleProfileOptions = {
  role: Role | null | undefined;
  enabled?: boolean;
};

export function useRoleProfile({ role, enabled = true }: UseRoleProfileOptions) {
  const isPatient = role === 'PATIENT';
  const isDoctor = role === 'DOCTOR';

  const patientQuery = useQuery({
    queryKey: queryKeys.patientProfile,
    queryFn: getMyPatientProfile,
    enabled: enabled && isPatient,
  });

  const doctorQuery = useQuery({
    queryKey: queryKeys.doctorProfile,
    queryFn: getMyDoctorProfile,
    enabled: enabled && isDoctor,
  });

  if (isPatient) {
    const missing =
      patientQuery.isError &&
      patientQuery.error instanceof ApiError &&
      patientQuery.error.isNotFound;

    return {
      profile: patientQuery.data ?? null,
      isLoading: patientQuery.isLoading,
      isError: patientQuery.isError && !missing,
      error: missing ? null : patientQuery.error,
      isMissing: missing,
      refetch: patientQuery.refetch,
    };
  }

  if (isDoctor) {
    const missing =
      doctorQuery.isError &&
      doctorQuery.error instanceof ApiError &&
      doctorQuery.error.isNotFound;

    return {
      profile: doctorQuery.data ?? null,
      isLoading: doctorQuery.isLoading,
      isError: doctorQuery.isError && !missing,
      error: missing ? null : doctorQuery.error,
      isMissing: missing,
      refetch: doctorQuery.refetch,
    };
  }

  return {
    profile: null,
    isLoading: false,
    isError: false,
    error: null,
    isMissing: true,
    refetch: async () => undefined,
  };
}
