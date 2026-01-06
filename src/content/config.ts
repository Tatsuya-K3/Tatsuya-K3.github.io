import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

// Blog posts collection
const blog = defineCollection({
  schema: rssSchema,
});

// Work experience collection
const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    type: z.string().optional(),
    period: z.string(),
    location: z.string().optional(),
    current: z.boolean().default(false),
    tech: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
  }),
});

// Projects collection
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'learning', 'experimental']).default('active'),
    featured: z.boolean().default(false),
    github: z.string().optional(),
    link: z.string().optional(),
    paper: z.string().optional(),
    tags: z.array(z.string()).optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

// Research papers collection
const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    authors: z.array(z.string()).optional(),
    pdf: z.string().optional(),
    externalLink: z.string().optional(),
    github: z.string().optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['published', 'preprint', 'in-progress']).default('published'),
    venue: z.string().optional(),
  }),
});

// Static pages collection (about, etc.)
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Section headings (optional, for customization)
    sectionTitles: z.object({
      whatIDo: z.string().default('What I Do'),
      skills: z.string().default('Skills'),
      experience: z.string().default('Experience'),
      certifications: z.string().default('Certifications'),
      contact: z.string().default("Let's Connect"),
    }).optional(),
    // Contact CTA message
    contactMessage: z.string().optional(),
  }),
});

export const collections = {
  blog,
  experience,
  projects,
  papers,
  pages,
};
