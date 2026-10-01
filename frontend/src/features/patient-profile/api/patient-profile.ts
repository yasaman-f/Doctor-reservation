import type { PatientProfile } from '@/features/patient-profile/types';
import { apiClient } from '@/shared/lib/axios';

export type CreatePatientProfilePayload = {
  nationalId: string;
  dateOfBirth?: string;
};

export type UpdatePatientProfilePayload = {
  nationalId?: string;
  dateOfBirth?: string;
};

export type DeleteProfileResponse = {
  message: string;
};

/** GET /patient/my-profile */
export async function getMyPatientProfile(): Promise<PatientProfile> {
  const { data } = await apiClient.get<PatientProfile>('/patient/my-profile');
  return data;
}

/** POST /patient/profile */
export async function createPatientProfile(
  payload: CreatePatientProfilePayload,
): Promise<PatientProfile> {
  const body: CreatePatientProfilePayload = {
    nationalId: payload.nationalId,
  };
  if (payload.dateOfBirth) {
    body.dateOfBirth = payload.dateOfBirth;
  }
  const { data } = await apiClient.post<PatientProfile>('/patient/profile', body);
  return data;
}

/** PATCH /patient/edit-profile */
export async function updatePatientProfile(
  payload: UpdatePatientProfilePayload,
): Promise<PatientProfile> {
  const { data } = await apiClient.patch<PatientProfile>(
    '/patient/edit-profile',
    payload,
  );
  return data;
}

/** DELETE /patient/remove-profile */
export async function deletePatientProfile(): Promise<DeleteProfileResponse> {
  const { data } = await apiClient.delete<DeleteProfileResponse>(
    '/patient/remove-profile',
  );
  return data;
}
