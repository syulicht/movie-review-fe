import { z } from "zod";
import { userSchema } from "./user";

export const reviewSchema = z.object({
  id: z.number(),
  content: z.string(),
  rating: z.number(),
  user: userSchema,
});

export type Review = z.infer<typeof reviewSchema>;
