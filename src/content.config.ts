import { defineCollection} from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const paintingsCollection = defineCollection({
  // 1. Define the loader pointing to your markdown files inside src/content/paintings/
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/paintings' }),
  
  // 2. Define your schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      medium: z.string(),
      dimensions: z.string(),
      coverImage: image(),
      alt: z.string().default('Oil painting artwork'),
    }),
});

const mangaCollection = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/manga' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  paintings: paintingsCollection,
  manga: mangaCollection,
};