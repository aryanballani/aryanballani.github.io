import type { techLogos } from '../content.config';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/tech/*.svg', { eager: true });

export function techLogo(name: (typeof techLogos)[number]) {
  const file = files[`../assets/tech/${name}.svg`];
  if (!file) throw new Error(`Missing tech logo: src/assets/tech/${name}.svg`);
  return file.default.src;
}
