import { fetchRecommendedMovies } from "@/utils/api/movieApi";
import { TopCarousel } from "./components/TopCarousel";

const Home = async () => {
  const movies = await fetchRecommendedMovies();

  return (
    <main className="w-full min-h-screen flex flex-row justify-center">
      <TopCarousel movies={movies.movies} />
    </main>
  );
};

export default Home;
