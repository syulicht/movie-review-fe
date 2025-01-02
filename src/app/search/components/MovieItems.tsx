import { RatingStar } from "@/components/RatingStar";
import { RecommendedMovie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  movie: RecommendedMovie;
};

export const MovieItems = ({ movie }: Props): React.JSX.Element => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="flex flex-nowrap w-full justify-around hover:bg-slate-800"
    >
      <Image
        src={movie.backdropUrl}
        alt="movie title"
        width={250}
        height={150}
        className="w-1/6"
      />
      <p className="w-1/2 text-white">{movie.title}</p>
      <RatingStar rating={movie.rating} readonly={true} />
    </Link>
  );
};
