import {defineCollection} from "astro:content";
import {glob} from "astro/loaders";
import {z} from "astro/zod";

const projects = defineCollection({
    loader: glob({pattern: "src/content/projects/**/*.md"}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        thumbnail: image(),
        chips: z.array(z.string()),
        link: z.url().optional(),
        draft: z.boolean().optional()
    })
});

const pastWork = defineCollection({
    loader: glob({pattern: "src/content/past-work/**/*.md"}),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        thumbnail: image(),
        chips: z.array(z.string()),
        draft: z.boolean().optional()
    })
});

export const collections = { projects, pastWork };