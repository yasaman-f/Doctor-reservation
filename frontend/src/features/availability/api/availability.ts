import type {
  AvailabilitySlot,
  CreateAvailabilityPayload,
  DeleteAvailabilityResponse,
  UpdateAvailabilityPayload,
} from '@/features/availability/types';
import { apiClient } from '@/shared/lib/axios';

/** POST /availability/add */
export async function createAvailability(
  payload: CreateAvailabilityPayload,
): Promise<AvailabilitySlot> {
  const { data } = await apiClient.post<AvailabilitySlot>(
    '/availability/add',
    payload,
  );
  return data;
}

/** GET /availability/my-availability */
export async function getMyAvailability(): Promise<AvailabilitySlot[]> {
  const { data } = await apiClient.get<AvailabilitySlot[]>(
    '/availability/my-availability',
  );
  return data;
}

/** PATCH /availability/:id */
export async function updateAvailability(
  id: string,
  payload: UpdateAvailabilityPayload,
): Promise<AvailabilitySlot> {
  const { data } = await apiClient.patch<AvailabilitySlot>(
    `/availability/${id}`,
    payload,
  );
  return data;
}

/** DELETE /availability/:id */
export async function deleteAvailability(
  id: string,
): Promise<DeleteAvailabilityResponse> {
  const { data } = await apiClient.delete<DeleteAvailabilityResponse>(
    `/availability/${id}`,
  );
  return data;
}
