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
  "product",
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
    order: z.number().optional().default(Infinity),
    name: z.literal("march").default("march"),
  }),
});

const Product = defineCollection({
  type: "content",
  schema: baseSchema.extend({
    // type: z.literal(TypeEnum.enum.webserver).default(TypeEnum.enum.webserver),
    order: z.number().optional().default(Infinity),
    name: z.literal("product").default("product"),
  }),
});

export const collections = {
  march: March,
  product: Product,
};
