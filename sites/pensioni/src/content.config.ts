import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guide = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guide' }),
  schema: z.object({
    titolo: z.string(),
    sommario: z.string(),
    argomento: z.string(),
    inBreve: z.array(z.string()),
    aggiornata: z.coerce.date(),
    ordine: z.number(),
  }),
});

export const collections = { guide };
