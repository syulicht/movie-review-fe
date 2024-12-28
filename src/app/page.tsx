import { fetchRecommendedMovies } from "@/utils/api/movieApi";
import Image from "next/image";

const Home = async () => {
  const movies = await fetchRecommendedMovies();

  const topMovie = movies.movies[0];

  return (
    <main className="w-full min-h-screen flex flex-row justify-center">
      <div className="w-full h-96 relative">
        <Image
          src={topMovie.backdropUrl}
          alt={`${topMovie.title}の画像`}
          fill
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </div>
    </main>
  );
};

export default Home;
