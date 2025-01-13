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
  const keywords = (await searchParams).query
    ? (await searchParams).query.split(" ")
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
  const data = await fetchMovieList(keywords[0], page);
  const movies = data.movies;
  const total = data.count;

  return (
    <div>
      <SearchFilter keywords={keywords} searchCount={movies.length} />
      <MovieList
        movies={movies}
        total={total}
        keywords={keywords}
        propsPage={page}
      />
    </div>
  );
};

export default SearchPage;
