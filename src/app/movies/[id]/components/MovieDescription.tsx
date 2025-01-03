import { MovieDetail } from "@/types/movie";
import Image from "next/image";
import { Chip } from "../../../../components/Chip";
import { RatingStar } from "@/components/RatingStar";

type Props = {
  movie: MovieDetail;
};

export const MovieDescription = ({ movie }: Props): React.JSX.Element => {
  return (
    <div className="flex">
      <div className="w-2/5 h-[500px] mt-5 relative" key={movie.id}>
        <Image
          src={movie.posterUrl}
          alt={`${movie.title}の画像`}
          fill
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </div>
      <div className="grow w-3/5 px-10">
        <h1 className="mt-10 font-bold text-3xl">{movie.title}</h1>
        <div className="my-3">
          <RatingStar rating={movie.rating} readonly />
        </div>
        <p className="my-3 text-xl text-gray-400">
          {new Date(movie.releaseDate).getFullYear()}年 |{" "}
          {movie.productionCountries.join(", ")}
        </p>
        <p className="my-3 text-xl text-gray-400">{movie.runtime}分</p>
        <p className="my-3 text-xl">{movie.overview}</p>
        <div className="flex flex-wrap gap-3 mt-5">
          {movie.genres.map((genre) => (
            <Chip name={genre.name} key={genre.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
