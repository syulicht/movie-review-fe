import { fetchRecommendedMovies } from "@/utils/api/movieApi";
import React from "react";
import { MovieList } from "./components/MovieList";
import { SearchFilter } from "./components/SearchFilter";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string; page: string }>;
}) => {
  const keywords = (await searchParams).keyword
    ? (await searchParams).keyword.split(" ")
    : [];
  const page = Number((await searchParams).page) ?? 1;
  const movies = (await fetchRecommendedMovies()).movies;

  return (
    <div>
      <SearchFilter keywords={keywords} searchCount={movies.length} />
      <MovieList movies={movies} keywords={keywords} propsPage={page} />
    </div>
  );
};

export default SearchPage;
