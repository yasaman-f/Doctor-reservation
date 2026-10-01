import { getMyDoctorProfile } from '@/features/doctor-profile/api/get-my-profile';
import { getMyPatientProfile } from '@/features/patient-profile/api/get-my-profile';
import { ROUTES } from '@/shared/constants/routes';
import { ApiError } from '@/shared/types/api';
import type { Role } from '@/shared/types/user';

function isSafeAppPath(path: string | null | undefined): path is string {
  return Boolean(path && path.startsWith('/app'));
}

/**
 * After login/register: send users with no profile to setup,
 * otherwise restore intended route or dashboard.
 */
export async function resolvePostAuthPath(
  role: Role,
  intendedPath?: string | null,
): Promise<string> {
  if (role === 'ADMIN') {
    return isSafeAppPath(intendedPath) ? intendedPath : ROUTES.app;
  }

  try {
    if (role === 'PATIENT') {
      await getMyPatientProfile();
    } else if (role === 'DOCTOR') {
      await getMyDoctorProfile();
    }

    return isSafeAppPath(intendedPath) ? intendedPath : ROUTES.app;
  } catch (error) {
    if (error instanceof ApiError && error.isNotFound) {
      if (role === 'DOCTOR') {
        return ROUTES.doctor.profile;
      }
      if (role === 'PATIENT') {
        return ROUTES.patient.profile;
      }
    }

    return ROUTES.app;
  }
}
