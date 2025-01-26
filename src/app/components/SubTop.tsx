import { RatingStar } from "@/components/RatingStar";
import { MovieSummary } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  movie: MovieSummary;
};

export const SubTop = ({ movie }: Props): React.JSX.Element => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="w-5/6 h-[300px] relative mt-4"
    >
      <div className="w-full h-full relative flex flex-col justify-between">
        <Image
          src={movie.backdropUrl}
          alt="sub top image"
          style={{ objectFit: "cover" }}
          className="w-full h-full"
          fill
        />
      </div>
      <div className="absolute w-full h-fit bottom-0 left-0 bg-black bg-opacity-40 p-4 flex flex-row justify-between z-10">
        <p className="text-white h-fit">{movie.title}</p>
        <RatingStar rating={movie.rating} readonly={true} />
      </div>
    </Link>
  );
};
