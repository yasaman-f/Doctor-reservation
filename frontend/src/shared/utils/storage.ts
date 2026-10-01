import type { AuthSession } from '@/shared/types/auth';
import { STORAGE_KEYS } from '@/shared/constants/storage-keys';

export function readSession(): AuthSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.session);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as AuthSession;
  } catch {
    return null;
  }
}

export function writeSession(session: AuthSession): void {
  localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
}

export function clearSession(): void {
  localStorage.removeItem(STORAGE_KEYS.session);
}

export type ThemePreference = 'light' | 'dark' | 'system';

export function readThemePreference(): ThemePreference | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.theme);
    if (raw === 'light' || raw === 'dark' || raw === 'system') {
      return raw;
    }
    return null;
  } catch {
    return null;
  }
}

export function writeThemePreference(preference: ThemePreference): void {
  localStorage.setItem(STORAGE_KEYS.theme, preference);
}
