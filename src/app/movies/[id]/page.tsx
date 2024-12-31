import { ReviewCard } from "@/app/movies/[id]/components/ReviewCard";
import { MovieDescription } from "./components/MovieDescription";
import { PostReviewContainer } from "./components/PostReviewContainer";
import { cookies } from "next/headers";
import Image from "next/image";
import { fetchMovieDetail } from "@/utils/api/movieApi";

const MovieDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  const cookieList = await cookies();
  const isLogin = cookieList.has("token");

  const movie = await fetchMovieDetail(Number(id));

  return (
    <main className="w-full min-h-screen text-white">
      <div className="fixed -z-10 w-screen h-screen bg-black bg-opacity-70" />
      <div className="fixed -z-20 w-screen h-screen">
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

      <MovieDescription movie={movie} />

      <div className="flex flex-col gap-6 items-center mt-10">
        <h2 className="text-2xl font-bold">この作品のレビュー</h2>

        {movie.reviews.length ? (
          movie.reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))
        ) : (
          <p className="mt-5">レビューはありません</p>
        )}
      </div>

      {isLogin && <PostReviewContainer movieId={Number(id)} />}
    </main>
  );
};

export default MovieDetailPage;
