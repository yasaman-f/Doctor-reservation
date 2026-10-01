import { io, type Socket } from 'socket.io-client';
import {
  NOTIFICATION_EVENTS,
  type NotificationEventMap,
} from '@/features/notifications/types';

/**
 * Resolves the Socket.IO server origin.
 * - Empty in dev so socket.io-client connects to the current origin and the
 *   Vite proxy forwards /socket.io (ws) to the backend — never exposes a token
 *   in a URL.
 * - When set (e.g. production) it points to the backend origin.
 */
function socketOrigin(): string {
  return import.meta.env.VITE_API_URL ?? '';
}

/**
 * Single, module-level Socket.IO connection shared across the whole app.
 * Guarantees at most one connection per authenticated session and prevents
 * duplicate listeners/connections while navigating between pages.
 */
class NotificationSocket {
  private socket: Socket | null = null;
  private token: string | null = null;

  /**
   * Establishes (or reuses) one connection authenticated with `auth.token`.
   * The backend disconnects clients whose token fails verification; that
   * surfaces as a `connect_error` to our listeners.
   */
  connect(token: string): void {
    if (this.socket && this.token === token) {
      return;
    }

    this.disconnect();

    this.token = token;
    this.socket = io(socketOrigin(), {
      transports: ['websocket', 'polling'],
      auth: { token },
    });
  }

  /** Returns the current socket, or null when not connected. */
  getSocket(): Socket | null {
    return this.socket;
  }

  /**
   * Registers a typed listener for a backend notification event. Returns an
   * unsubscribe function so callers can avoid duplicate listeners.
   */
  on<K extends keyof NotificationEventMap>(
    event: K,
    handler: (payload: NotificationEventMap[K]) => void,
  ): () => void {
    this.socket?.on(event as string, handler);
    return () => {
      this.socket?.off(event as string, handler);
    };
  }

  /** Forwards Socket.IO lifecycle events (connect/disconnect/connect_error). */
  onLifecycle(event: 'connect' | 'disconnect' | 'connect_error', handler: () => void): () => void {
    this.socket?.on(event, handler);
    return () => {
      this.socket?.off(event, handler);
    };
  }

  /** Tears down the single connection. Safe to call repeatedly. */
  disconnect(): void {
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
    this.token = null;
  }
}

/** Exported event name helpers for listener registration. */
export { NOTIFICATION_EVENTS };
export type { NotificationEventMap };

export const notificationSocket = new NotificationSocket();