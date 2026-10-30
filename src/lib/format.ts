const monthFormat = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' });

/** "2025-01" -> "Jan 2025" */
export function formatMonth(yearMonth: string) {
  return monthFormat.format(new Date(`${yearMonth}-01T00:00:00Z`));
}

/** Single month if start === end, otherwise "Jan 2025 — Present" */
export function formatRange(start: string, end?: string) {
  if (start === end) return formatMonth(start);
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'Present'}`;
}
