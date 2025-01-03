import { z } from "zod";
import { reviewSchema } from "./review";

export const recommendedMovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  backdropUrl: z.string(),
  rating: z.number(),
});

export type MovieSummary = z.infer<typeof recommendedMovieSchema>;

export const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Genre = z.infer<typeof genreSchema>;

export const movieDetailSchema = z.object({
  id: z.number(),
  title: z.string(),
  overview: z.string(),
  backdropUrl: z.string(),
  posterUrl: z.string(),
  releaseDate: z.string(),
  runtime: z.number(),
  rating: z.number(),
  productionCountries: z.array(z.string()),
  genres: z.array(genreSchema),
  reviews: z.array(reviewSchema),
});

export type MovieDetail = z.infer<typeof movieDetailSchema>;
