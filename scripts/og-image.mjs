// Renders scripts/og-image.html to public/og.png (1200×630 link-preview card) using a
// local Chromium browser's headless screenshot mode. Set BROWSER to override the path.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const browser = process.env.BROWSER ?? '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const template = new URL('og-image.html', import.meta.url).href;
const out = fileURLToPath(new URL('../public/og.png', import.meta.url));

execFileSync(browser, [
  '--headless',
  '--disable-gpu',
  '--hide-scrollbars',
  '--allow-file-access-from-files',
  '--virtual-time-budget=2000',
  '--window-size=1200,630',
  `--screenshot=${out}`,
  template,
]);
console.log(`Wrote ${out}`);
