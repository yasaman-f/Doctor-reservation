/** Display helpers for Iranian phone numbers (UI only). */
export function formatIranPhone(value: string | null | undefined): string {
  if (!value) {
    return '—';
  }

  const digits = value.replace(/\D/g, '');

  let normalized = digits;
  if (normalized.startsWith('98') && normalized.length === 12) {
    normalized = `0${normalized.slice(2)}`;
  }

  if (/^09\d{9}$/.test(normalized)) {
    return `${normalized.slice(0, 4)} ${normalized.slice(4, 7)} ${normalized.slice(7)}`;
  }

  return value;
}
