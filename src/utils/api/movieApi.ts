import { MovieDetail, MovieSummary } from "@/types/movie";

export type RecommendedMoviesResponse = {
  movies: MovieSummary[];
};

export type SearchMoviesResponse = {
  movies: MovieSummary[];
  count: number;
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
): Promise<SearchMoviesResponse> => {
  const fetchResult = await fetch(
    `${process.env.BE_URL}/movies/search?query=${keyword}&page=${page}`,
    {
      cache: "no-store",
    },
  );
  return fetchResult.json();
};
