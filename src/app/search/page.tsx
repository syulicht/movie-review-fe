import { fetchRecommendedMovies } from "@/utils/api/movieApi";
import React from "react";
import { MovieList } from "./components/MovieList";
import { SearchFilter } from "./components/SearchFilter";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ keyword: string }>;
}) => {
  const movies = (await fetchRecommendedMovies()).movies;
  const keywords = (await searchParams).keyword
    ? (await searchParams).keyword.split(" ")
    : [];

  return (
    <div>
      <SearchFilter keywords={keywords} searchCount={movies.length} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
