import { ApiError } from '@/shared/types/api';

/** Prefer backend-provided messages; fall back only when none exist. */
export function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof ApiError) {
    return error.messages.join(', ') || fallback;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}
