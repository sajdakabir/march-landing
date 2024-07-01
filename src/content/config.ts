import { defineCollection, z } from "astro:content";

export const TypeEnum = z.enum([
  "base",
  "database",
  "storage",
  "queue",
]);

export const ServiceName = z.enum([
  "base",
  "March",
  "Satellite",
]);

const baseSchema = z.object({
  type: z.literal("base").optional().default("base"),
  name: ServiceName.optional().default("base"),
  shortTitle: z.string(),
  order: z.number().optional().default(Infinity),
  title: z.string(),
  description: z.string(),
});

const March = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    type: z.literal(TypeEnum.enum.database).default(TypeEnum.enum.database),
    name: z.literal("march").default("march"),
  }),
});

const Satellite = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    type: z.literal(TypeEnum.enum.webserver).default(TypeEnum.enum.webserver),
    name: z.literal("satellite").default("satellite"),
  }),
});

export const collections = {
  march: March,
  satellite: Satellite,
};
