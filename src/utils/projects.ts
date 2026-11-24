import type { ImageMetadata } from 'astro';
import type { Project } from '~/types';

const logos = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/logos/png/*-symbol.png', {
  eager: true,
});

/** The `*-symbol.png` mark for a project's company, or null if there isn't one. */
export const projectLogo = (key?: string): ImageMetadata | null =>
  key ? (logos[`/src/assets/images/logos/png/${key}-symbol.png`]?.default ?? null) : null;

/** "Jan 2024 - Aug 2025" -> "2024–2025", "Oct 2020 - Present" -> "2020–now", "Jan 2023 - April 2023" -> "2023". */
export const projectYears = (duration?: string): string | null => {
  if (!duration) return null;
  const years = duration.match(/\d{4}/g) ?? [];
  if (!years.length) return duration;
  const start = years[0];
  const end = /present/i.test(duration) ? 'now' : years[years.length - 1];
  return start === end ? start : `${start}–${end}`;
};

/** First sentence, and whatever follows it, for a quote that hides its tail behind "See more". */
export const splitFirstSentence = (text = ''): [string, string] => {
  const match = text.match(/^(.+?[.!?])\s+(.+)$/s);
  return match ? [match[1], match[2]] : [text, ''];
};

/** Every stack item across the projects, with how many projects used it. Most-used first. */
export const stackCounts = (projects: Project[]) => {
  const counts = new Map<string, number>();
  for (const p of projects) for (const s of p.stack ?? []) counts.set(s, (counts.get(s) ?? 0) + 1);
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
};
