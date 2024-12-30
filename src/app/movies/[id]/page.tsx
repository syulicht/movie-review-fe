import { MovieDescription } from "./components/MovieDescription";

const MovieDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return (
    <main className="w-full min-h-screen text-white">
      <MovieDescription
        movie={{
          id: Number(id),
          title: "ソニック × シャドウ TOKYO MISSION",
          backdropUrl:
            "https://image.tmdb.org/t/p/original/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
          overview:
            "ついに舞台はセガとソニックの母国である日本。闇のダークヒーロー＜シャドウ＞が東京・渋谷に降臨！ソニック、テイルス、ナックルズが最強ダークヒーローに立ち向かうハイスピードバトルが開幕！",
          posterUrl:
            "https://image.tmdb.org/t/p/original/A5cYeCk3Ddmy5yOKahPznohn3eF.jpg",
          releaseDate: new Date("2024-12-31"),
          runtime: 120,
          rating: 4.5,
          productionCountries: ["日本"],
          genres: [
            {
              id: 28,
              name: "アクション",
            },
            {
              id: 878,
              name: "サイエンスフィクション",
            },
          ],
          reviews: [],
        }}
      />
    </main>
  );
};

export default MovieDetailPage;
