import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const BLOG_CATEGORIES = [
  { slug: "remote-online-notary", label: "Remote Online Notary" },
  { slug: "mobile-notary", label: "Mobile Notary" },
  { slug: "documents-legal", label: "Documents & Legal" },
  { slug: "local-service-areas", label: "Local Service Areas" },
  { slug: "notary-basics", label: "Notary Basics & FAQs" },
] as const;

const categorySlugs = BLOG_CATEGORIES.map((c) => c.slug) as [string, ...string[]];

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default("Easy Day Notary"),
    category: z.enum(categorySlugs),
    tags: z.array(z.string()).default([]),
    faqs: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
