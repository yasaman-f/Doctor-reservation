export type Role = 'PATIENT' | 'DOCTOR' | 'ADMIN';

export type RegisterRole = 'PATIENT' | 'DOCTOR';

/** User shape returned by auth endpoints (password stripped). */
export type User = {
  id: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
  phone: string | null;
  createdAt: string;
  updatedAt: string;
};
