/**
 * Socket.IO event names emitted by the backend NotificationGateway.
 * Verified against src/notification/notification.gateway.ts and
 * src/appointment/appointment.service.ts. Do not rename without
 * updating the backend contract — the backend is read-only.
 */
export const NOTIFICATION_EVENTS = {
  appointmentCreated: 'appointment_created',
  appointmentConfirmed: 'appointment_confirmed',
  appointmentCanceled: 'appointment_canceled',
} as const;

export type NotificationEventName =
  (typeof NOTIFICATION_EVENTS)[keyof typeof NOTIFICATION_EVENTS];

/**
 * Payload shape emitted by NotificationGateway.notifyUser for every
 * appointment event. Mirrors the backend exactly:
 * { appointmentId, message }.
 */
export type AppointmentNotificationPayload = {
  appointmentId: string;
  message: string;
};

/**
 * Maps an incoming Socket.IO event to its typed payload.
 * Event names that are not part of the backend contract resolve to never.
 */
export type NotificationEventMap = {
  [NOTIFICATION_EVENTS.appointmentCreated]: AppointmentNotificationPayload;
  [NOTIFICATION_EVENTS.appointmentConfirmed]: AppointmentNotificationPayload;
  [NOTIFICATION_EVENTS.appointmentCanceled]: AppointmentNotificationPayload;
};