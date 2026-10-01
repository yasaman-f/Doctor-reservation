import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '@/app/layouts/AppLayout';
import { AuthLayout } from '@/app/layouts/AuthLayout';
import { PublicLayout } from '@/app/layouts/PublicLayout';
import { GuestOnly } from '@/app/router/GuestOnly';
import { RequireAuth } from '@/app/router/RequireAuth';
import { RequireProfile } from '@/app/router/RequireProfile';
import { RequireRole } from '@/app/router/RequireRole';
import { DoctorAppointmentsPage } from '@/features/appointments/pages/DoctorAppointmentsPage';
import { PatientAppointmentsPage } from '@/features/appointments/pages/PatientAppointmentsPage';
import { PatientBookPage } from '@/features/appointments/pages/PatientBookPage';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { RegisterPage } from '@/features/auth/pages/RegisterPage';
import { AvailabilityPage } from '@/features/availability/pages/AvailabilityPage';
import { DoctorProfilePage } from '@/features/doctor-profile/pages/DoctorProfilePage';
import { PatientProfilePage } from '@/features/patient-profile/pages/PatientProfilePage';
import { AccountPage } from '@/pages/AccountPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { LandingPage } from '@/pages/LandingPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ROUTES } from '@/shared/constants/routes';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.home} element={<LandingPage />} />
        </Route>

        <Route element={<GuestOnly />}>
          <Route element={<AuthLayout />}>
            <Route path={ROUTES.login} element={<LoginPage />} />
            <Route path={ROUTES.register} element={<RegisterPage />} />
          </Route>
        </Route>

        <Route element={<RequireAuth />}>
          <Route path={ROUTES.app} element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="account" element={<AccountPage />} />

            <Route element={<RequireRole roles={['PATIENT']} />}>
              <Route path="patient/profile" element={<PatientProfilePage />} />
              <Route element={<RequireProfile />}>
                <Route
                  path="patient/appointments"
                  element={<PatientAppointmentsPage />}
                />
                <Route path="patient/book" element={<PatientBookPage />} />
              </Route>
            </Route>

            <Route element={<RequireRole roles={['DOCTOR']} />}>
              <Route path="doctor/profile" element={<DoctorProfilePage />} />
              <Route element={<RequireProfile />}>
                <Route
                  path="doctor/availability"
                  element={<AvailabilityPage />}
                />
                <Route
                  path="doctor/appointments"
                  element={<DoctorAppointmentsPage />}
                />
              </Route>
            </Route>
          </Route>
        </Route>

        <Route path="/app/*" element={<Navigate to={ROUTES.app} replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
