import { fetchMovieList } from "@/utils/api/movieApi";
import React from "react";
import { MovieList } from "./components/MovieList";
import { SearchFilter } from "./components/SearchFilter";
import { SkeltonItem } from "./components/SkeltonItem";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) => {
  const query = (await searchParams).query ?? "";
  const page = Number((await searchParams).page) ?? 1;
  if (query === "") {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, index) => (
          <SkeltonItem key={index} />
        ))}
      </div>
    );
  }
  const data = await fetchMovieList(query, page);
  const movies = data.movies;
  const total = data.count;

  return (
    <div>
      <SearchFilter query={query} searchCount={movies.length} />
      <MovieList movies={movies} total={total} query={query} propsPage={page} />
    </div>
  );
};

export default SearchPage;
