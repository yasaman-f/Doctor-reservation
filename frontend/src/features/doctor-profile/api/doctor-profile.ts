import type { DoctorProfile } from '@/features/doctor-profile/types';
import { apiClient } from '@/shared/lib/axios';

export type CreateDoctorProfilePayload = {
  specialty: string;
  licenseNo: string;
  bio?: string;
};

export type UpdateDoctorProfilePayload = {
  specialty?: string;
  licenseNo?: string;
  bio?: string;
};

export type DeleteProfileResponse = {
  message: string;
};

/** GET /doctor/my-profile */
export async function getMyDoctorProfile(): Promise<DoctorProfile> {
  const { data } = await apiClient.get<DoctorProfile>('/doctor/my-profile');
  return data;
}

/** POST /doctor/profile */
export async function createDoctorProfile(
  payload: CreateDoctorProfilePayload,
): Promise<DoctorProfile> {
  const body: CreateDoctorProfilePayload = {
    specialty: payload.specialty,
    licenseNo: payload.licenseNo,
  };
  if (payload.bio) {
    body.bio = payload.bio;
  }
  const { data } = await apiClient.post<DoctorProfile>('/doctor/profile', body);
  return data;
}

/** PATCH /doctor/edit-profile */
export async function updateDoctorProfile(
  payload: UpdateDoctorProfilePayload,
): Promise<DoctorProfile> {
  const { data } = await apiClient.patch<DoctorProfile>(
    '/doctor/edit-profile',
    payload,
  );
  return data;
}

/** DELETE /doctor/remove-profile */
export async function deleteDoctorProfile(): Promise<DeleteProfileResponse> {
  const { data } = await apiClient.delete<DeleteProfileResponse>(
    '/doctor/remove-profile',
  );
  return data;
}
