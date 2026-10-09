import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Contenido editable de la landing.
 * Para añadir una foto: guárdala en src/assets/images/ y referencia la ruta
 * relativa en el JSON (p. ej. "image": "../assets/images/clasicas.jpg").
 */

const services = defineCollection({
  loader: file('src/content/services.json'),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      description: z.string(),
      duration: z.string(),
      price: z.number(),
      priceFrom: z.boolean().default(false),
      image: image().optional(),
      imageAlt: z.string(),
    }),
});

const testimonials = defineCollection({
  loader: file('src/content/testimonials.json'),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      quote: z.string(),
      author: z.string(),
      service: z.string(),
      rating: z.number().min(1).max(5).default(5),
      avatar: image().optional(),
    }),
});

const faqs = defineCollection({
  loader: file('src/content/faqs.json'),
  schema: z.object({
    order: z.number(),
    question: z.string(),
    answer: z.string(),
  }),
});

const gallery = defineCollection({
  loader: file('src/content/gallery.json'),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      alt: z.string(),
      image: image().optional(),
    }),
});

export const collections = { services, testimonials, faqs, gallery };
