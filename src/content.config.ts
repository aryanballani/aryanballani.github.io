import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Keys map to files in src/assets/tech/*.svg (shown on project card hover)
export const techLogos = [
  'python',
  'typescript',
  'vue',
  'react-native',
  'r-letter',
  'jupyterlab',
  'java',
  'javascript',
  'kotlin',
] as const;

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    tech: z.array(z.string()),
    logo: z.enum(techLogos),
    year: z.number().int(),
    // Lower comes first. Featured projects get full cards; the rest go in a compact list.
    order: z.number(),
    featured: z.boolean().default(false),
    href: z.url().optional(),
    repo: z.url().optional(),
    // Repo isn't public: the card opens a dialog with this message instead of linking out
    private: z.string().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.md' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    start: z.string().regex(/^\d{4}-\d{2}$/, 'use YYYY-MM'),
    end: z.string().regex(/^\d{4}-\d{2}$/, 'use YYYY-MM').optional(),
    order: z.number(),
    url: z.url().optional(),
    highlights: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, experience };
