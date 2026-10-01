import { QueryClient } from '@tanstack/react-query';
import { ApiError } from '@/shared/types/api';

export const queryKeys = {
  patientProfile: ['patient', 'profile'] as const,
  doctorProfile: ['doctor', 'profile'] as const,
  doctorAvailability: ['doctor', 'availability'] as const,
  myAppointments: ['appointments', 'mine'] as const,
  doctors: ['patients', 'booking', 'doctors'] as const,
  doctorAvailableSlots: (doctorId: string) =>
    ['patients', 'booking', 'doctors', doctorId, 'slots'] as const,
};

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        retry: (failureCount, error) => {
          if (error instanceof ApiError && error.statusCode < 500) {
            return false;
          }
          return failureCount < 1;
        },
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: false,
      },
    },
  });
}
