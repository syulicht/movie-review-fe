import { fetchRecommendedMovies } from "@/utils/api/movieApi";
import { TopCarousel } from "./components/TopCarousel";

const Home = async () => {
  const movies = await fetchRecommendedMovies();

  return (
    <main className="w-full min-h-screen">
      <TopCarousel movies={movies.movies} />
    </main>
  );
};

export default Home;
