import { MovieDetail, RecommendedMovie } from "@/types/movie";

export type RecommendedMoviesResponse = {
  movies: RecommendedMovie[];
};

export const fetchRecommendedMovies =
  async (): Promise<RecommendedMoviesResponse> => {
    const fetchResult = await fetch(
      `${process.env.BE_URL}/movies/recommended`,
      {
        cache: "no-store",
      },
    );
    return fetchResult.json();
  };

export const fetchMovieDetail = async (
  movieId: number,
): Promise<MovieDetail> => {
  const fetchResult = await fetch(`${process.env.BE_URL}/movies/${movieId}`, {
    cache: "no-store",
  });
  return fetchResult.json();
};
