import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const auteurs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/auteurs' }),
  schema: z.object({
    nom: z.string(),
    role: z.string(),
    ville: z.string(),
    pratique: z.string(),
    bio: z.string(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),
    date: z.coerce.date(),
    auteur: reference('auteurs'),
    tags: z.array(z.string()).default([]),
    dureeLecture: z.number().int().positive(),
  }),
});

export const collections = { auteurs, articles };
