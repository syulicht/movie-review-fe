import React from "react";
import { SubTop } from "./SubTop";
import { RecommendedMovie } from "@/types/movie";
type Props = {
  movies: RecommendedMovie[];
};

export const SubTopList = ({ movies }: Props): React.JSX.Element => {
  return (
    <div className="w-full place-items-center grid grid-cols-3 mt-16">
      {movies.map((movie) => (
        <SubTop movie={movie} key={movie.id} />
      ))}
    </div>
  );
};