import type { Post, Project } from '~/types';
import { getPermalink } from '~/utils/permalinks';

/**
 * Helpers that summarize the data behind an index page into a compact,
 * serializable shape. Dev Mode feeds these to the artistic JSON renderer
 * (see `artisticJson.ts` / `DevDoc.astro`).
 */

const isoDate = (date?: Date): string | undefined =>
  date instanceof Date ? date.toISOString().slice(0, 10) : undefined;

/** A linkable category value (rendered as a link in Dev Mode). */
export const categoryLink = (category?: string) =>
  category ? { __type: 'link', label: category, href: getPermalink(category, 'category') } : null;

/** Linkable tag chips. */
export const tagLinks = (tags?: string[]) =>
  tags && tags.length ? { __type: 'linkchips', items: tags.map((t) => ({ label: t, href: getPermalink(t, 'tag') })) } : [];

/** Reduce a blog post to the fields shown in an index listing. */
export const summarizePost = (post: Post) => ({
  id: post.id,
  slug: post.slug,
  title: post.title,
  permalink: getPermalink(post.permalink, 'post'),
  publishDate: isoDate(post.publishDate),
  category: categoryLink(post.category),
  tags: tagLinks(post.tags),
  readingTime: post.readingTime ?? null,
  excerpt: post.excerpt ?? null,
});

/** Reduce a portfolio project to the fields shown in an index card. */
export const summarizeProject = (project: Project) => ({
  slug: project.slug ?? null,
  title: project.title ?? null,
  company: project.company?.name ?? null,
  thumbnail: typeof project.image?.src === 'string' ? project.image?.src : null,
});

interface PostIndexOptions {
  title: string;
  posts: Post[];
  page?: { currentPage?: number; total?: number; lastPage?: number };
  category?: string;
  tag?: string;
}

/** Build the JSON summary for any post-based index (home, blog, category, tag). */
export const postIndexJson = ({ title, posts, page, category, tag }: PostIndexOptions) => ({
  index: title,
  ...(category ? { category } : {}),
  ...(tag ? { tag } : {}),
  ...(page
    ? {
        pagination: {
          currentPage: page.currentPage ?? 1,
          lastPage: page.lastPage ?? 1,
          total: page.total ?? posts.length,
        },
      }
    : {}),
  count: posts.length,
  posts: posts.map(summarizePost),
});

/** Build the JSON summary for the projects index. */
export const projectIndexJson = (projects: Project[]) => ({
  index: 'projects',
  count: projects.length,
  projects: projects.map(summarizeProject),
});
