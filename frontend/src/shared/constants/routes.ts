export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  app: '/app',
  account: '/app/account',
  patient: {
    root: '/app/patient',
    profile: '/app/patient/profile',
    appointments: '/app/patient/appointments',
    book: '/app/patient/book',
  },
  doctor: {
    root: '/app/doctor',
    profile: '/app/doctor/profile',
    availability: '/app/doctor/availability',
    appointments: '/app/doctor/appointments',
  },
} as const;
