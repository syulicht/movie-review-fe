import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  iconUrl: z.string(),
});

export type User = z.infer<typeof userSchema>;
