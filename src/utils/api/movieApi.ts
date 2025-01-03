import { MovieDetail, MovieSummary } from "@/types/movie";

export type RecommendedMoviesResponse = {
  movies: MovieSummary[];
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

export const fetchMovieList = async (
  keyword: string,
  page: number,
): Promise<RecommendedMoviesResponse> => {
  const fetchResult = await fetch(
    `${process.env.BE_URL}/movies/search?keyword=${keyword}&page=${page}&sort=popular`,
    {
      cache: "no-store",
    },
  );
  return fetchResult.json();
};
