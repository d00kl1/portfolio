import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const paintings = defineCollection({
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

export const collections = { paintings };