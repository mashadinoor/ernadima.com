import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string(),
    coverImage: z.string(),
    ogImage: z.string().optional(),
    category: z.string(),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    year: z.number().int().optional(),
    client: z.string().optional(),
    services: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    gallery: z.array(z.string()).default([]),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { portfolio };
