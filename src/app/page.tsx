import { fetchRecommendedMovies } from "@/utils/api/movieApi";
import { TopCarousel } from "./components/TopCarousel";
import { SubTopList } from "./components/SubTopList";

const Home = async () => {
  const movies = await fetchRecommendedMovies();

  return (
    <main className="w-full min-h-screen">
      <TopCarousel movies={movies.movies} />
      <SubTopList movies={movies.movies} />
    </main>
  );
};

export default Home;
