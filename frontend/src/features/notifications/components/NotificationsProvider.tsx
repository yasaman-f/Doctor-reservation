import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { useAuth } from '@/features/auth/hooks/useAuth';
import {
  NOTIFICATION_EVENTS,
  notificationSocket,
} from '@/features/notifications/socket/notification-socket';
import { queryKeys } from '@/shared/lib/query-client';
import { useToast } from '@/shared/ui/Toast';

const CONNECTION_ERROR_MESSAGE = 'اتصال زنده قطع شد؛ اتصال مجدد در حال انجام است.';

/**
 * Owns the single real-time connection for the authenticated session.
 * - Connects once when authenticated (multiple connections and duplicate
 *   listeners are prevented by the notificationSocket singleton + cleanup).
 * - Auth uses the current access token via `auth.token` (backend handshake
 *   contract). Invalid tokens are disconnected by the backend.
 * - On each backend appointment event it shows a toast and invalidates only
 *   the relevant appointment queries.
 * - Handles connect / disconnect / connect_error and logout cleanup.
 */
export function NotificationsProvider() {
  const { accessToken, isAuthenticated } = useAuth();
  const { pushToast } = useToast();
  const queryClient = useQueryClient();
  const reportedErrorRef = useRef(false);

  useEffect(() => {
    if (!isAuthenticated || !accessToken) {
      notificationSocket.disconnect();
      return;
    }

    notificationSocket.connect(accessToken);
    reportedErrorRef.current = false;

    const reportIfFirstError = () => {
      if (reportedErrorRef.current) {
        return;
      }
      reportedErrorRef.current = true;
      pushToast({ tone: 'error', message: CONNECTION_ERROR_MESSAGE });
    };

    const handleAppointmentEvent = () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.myAppointments });
    };

    const unsubscribeCreated = notificationSocket.on(
      NOTIFICATION_EVENTS.appointmentCreated,
      (payload) => {
        pushToast({ tone: 'info', message: payload.message });
        handleAppointmentEvent();
      },
    );
    const unsubscribeConfirmed = notificationSocket.on(
      NOTIFICATION_EVENTS.appointmentConfirmed,
      (payload) => {
        pushToast({ tone: 'success', message: payload.message });
        handleAppointmentEvent();
      },
    );
    const unsubscribeCanceled = notificationSocket.on(
      NOTIFICATION_EVENTS.appointmentCanceled,
      (payload) => {
        pushToast({ tone: 'warning', message: payload.message });
        handleAppointmentEvent();
      },
    );

    // A fresh connection means errors can be surfaced again.
    const unsubscribeConnected = notificationSocket.onLifecycle('connect', () => {
      reportedErrorRef.current = false;
    });
    const unsubscribeError = notificationSocket.onLifecycle('connect_error', () => {
      reportIfFirstError();
    });

    return () => {
      unsubscribeCreated();
      unsubscribeConfirmed();
      unsubscribeCanceled();
      unsubscribeConnected();
      unsubscribeError();
      notificationSocket.disconnect();
    };
  }, [accessToken, isAuthenticated, pushToast, queryClient]);

  return null;
}