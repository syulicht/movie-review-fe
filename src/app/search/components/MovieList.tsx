"use client";

import { RecommendedMovie } from "@/types/movie";
import React, { useEffect, useState } from "react";
import { MovieItems } from "./MovieItems";

type Props = {
  movies: RecommendedMovie[];
};

export const MovieList = ({ movies }: Props): React.JSX.Element => {
  const [movieList, setMovieList] = useState<RecommendedMovie[]>([]);

  useEffect(() => {
    setMovieList(movies);
  }, [movies]);
  return (
    <div className="flex flex-col gap-4">
      {movieList.map((movie, index) => (
        <MovieItems key={index} movie={movie} />
      ))}
    </div>
  );
};
