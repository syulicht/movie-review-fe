import { fetchRecommendedMovies } from "@/utils/api/movieApi";
import React from "react";
import { MovieList } from "./components/MovieList";
import { SearchFilter } from "./components/SearchFilter";
import { SkeltonItem } from "./components/SkeltonItem";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string; page: string }>;
}) => {
  const keywords = (await searchParams).keyword
    ? (await searchParams).keyword.split(" ")
    : [];
  const page = Number((await searchParams).page) ?? 1;
  if (keywords.length === 0) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, index) => (
          <SkeltonItem key={index} />
        ))}
      </div>
    );
  }
  const movies = (await fetchRecommendedMovies()).movies;

  return (
    <div>
      <SearchFilter keywords={keywords} searchCount={movies.length} />
      <MovieList movies={movies} keywords={keywords} propsPage={page} />
    </div>
  );
};

export default SearchPage;
