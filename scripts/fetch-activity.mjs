// Fetches the public GitHub contribution calendars for both of Aryan's accounts and
// writes the combined daily counts to src/data/activity.json (used by ActivityStrip.astro).
//
// Runs in CI before each deploy. On any failure it keeps the existing snapshot and exits 0,
// so a GitHub hiccup never blocks a deploy. Run locally with: npm run activity
import { readFile, writeFile } from 'node:fs/promises';

const ACCOUNTS = ['aryanballani', 'Aryan-Railtown'];
const OUT = new URL('../src/data/activity.json', import.meta.url);

async function fetchCalendar(login) {
  const res = await fetch(`https://github.com/users/${login}/contributions`, {
    headers: { 'User-Agent': 'aryanballani.github.io build' },
  });
  if (!res.ok) throw new Error(`${login}: HTTP ${res.status}`);
  const html = await res.text();

  // Each day cell: <td data-date="2026-01-31" id="contribution-day-component-x-y" ...>
  // Its count lives in a sibling tooltip: <tool-tip for="contribution-day-component-x-y">3 contributions on …</tool-tip>
  const dateById = new Map(
    [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"\s+id="(contribution-day-component-[\d-]+)"/g)].map((m) => [m[2], m[1]]),
  );
  const days = new Map();
  for (const [, id, text] of html.matchAll(/<tool-tip[^>]*for="(contribution-day-component-[\d-]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
    const date = dateById.get(id);
    if (!date) continue;
    const count = Number(text.match(/^(\d+) contribution/)?.[1] ?? 0);
    days.set(date, count);
  }
  if (days.size < 300) throw new Error(`${login}: parsed only ${days.size} days, page format may have changed`);
  return days;
}

try {
  const calendars = await Promise.all(ACCOUNTS.map(fetchCalendar));
  const combined = new Map();
  for (const cal of calendars) for (const [date, n] of cal) combined.set(date, (combined.get(date) ?? 0) + n);

  const data = {
    generatedAt: new Date().toISOString().slice(0, 10),
    accounts: ACCOUNTS.map((login, i) => ({ login, total: [...calendars[i].values()].reduce((a, b) => a + b, 0) })),
    days: [...combined].sort(([a], [b]) => a.localeCompare(b)).map(([date, count]) => ({ date, count })),
  };
  await writeFile(OUT, JSON.stringify(data, null, 2) + '\n');
  console.log(`activity: ${data.days.length} days, ${data.accounts.map((a) => `${a.login}=${a.total}`).join(' ')}`);
} catch (err) {
  const existing = await readFile(OUT, 'utf8').catch(() => null);
  console.warn(`activity: fetch failed (${err.message}); ${existing ? 'keeping existing snapshot' : 'no snapshot available'}`);
  if (!existing) process.exitCode = 1;
}
