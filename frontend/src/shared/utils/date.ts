/** Persian (Jalali) date presentation via the platform Intl API. */
const dateFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const dateTimeFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

const timeFormatter = new Intl.DateTimeFormat('fa-IR', {
  hour: '2-digit',
  minute: '2-digit',
});

const shortDateTimeFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

export function formatJalaliDate(value: string | Date | null | undefined): string {
  if (!value) {
    return '—';
  }

  const date = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) {
    return '—';
  }

  return dateFormatter.format(date);
}

export function formatJalaliDateTime(
  value: string | Date | null | undefined,
): string {
  if (!value) {
    return '—';
  }

  const date = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) {
    return '—';
  }

  return dateTimeFormatter.format(date);
}

/** Time-only, e.g. "۰۹:۳۰". Falls back to the raw value when unparseable. */
export function formatJalaliTime(value: string | Date | null | undefined): string {
  if (!value) {
    return '—';
  }
  const date = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) {
    return '—';
  }
  return timeFormatter.format(date);
}

/** Short date + time without the year, e.g. "۱ مهر ۰۹:۳۰". */
export function formatJalaliShortDateTime(
  value: string | Date | null | undefined,
): string {
  if (!value) {
    return '—';
  }
  const date = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) {
    return '—';
  }
  return shortDateTimeFormatter.format(date);
}
