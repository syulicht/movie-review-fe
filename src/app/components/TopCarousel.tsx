"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { RecommendedMovie } from "@/types/movie";

type Props = {
  movies: RecommendedMovie[];
};

export const TopCarousel = ({ movies }: Props): React.JSX.Element => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 5000 }),
  ]);

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex ">
        {movies.map((movie) => (
          <div
            className="transform translate-x-0 translate-y-0 translate-z-0 flex-[0_0_60%] min-w-0 pl-4 w-full h-96 relative"
            key={movie.id}
          >
            <Image
              src={movie.backdropUrl}
              alt={`${movie.title}の画像`}
              fill
              style={{
                objectFit: "contain",
              }}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};
