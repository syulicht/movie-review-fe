"use client";

import { MovieSummary } from "@/types/movie";
import React from "react";
import { MovieItem } from "./MovieItem";
import Pagination from "rc-pagination";
import { useRouter } from "next/navigation";

type Props = {
  movies: MovieSummary[];
  propsPage: number;
  keywords: string[];
  total: number;
};

export const MovieList = ({
  keywords,
  movies,
  total,
  propsPage,
}: Props): React.JSX.Element => {
  const router = useRouter();
  const handlePageChange = (page: number) => {
    router.push(`/search?query=${keywords.join(" ")}&page=${page}`);
  };
  return (
    <div className="flex flex-col gap-4">
      {movies.length !== 0 ? (
        movies.map((movie, index) => <MovieItem key={index} movie={movie} />)
      ) : (
        <p className="text-white">表示できる映画がありません</p>
      )}
      <div className="text-white flex flex-row justify-center">
        <Pagination
          defaultCurrent={propsPage}
          current={propsPage}
          pageSize={20}
          total={total}
          className="flex justify-center space-x-2"
          onChange={handlePageChange}
          itemRender={(page, type, element) => {
            if (type === "page") {
              return (
                <button
                  className={`px-4 py-2 rounded ${
                    page === propsPage
                      ? "bg-white text-black"
                      : "bg-black text-white hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              );
            }
            if (type === "prev") {
              return (
                <button className="px-4 py-2 bg-black rounded hover:bg-gray-300">
                  Prev
                </button>
              );
            }
            if (type === "next") {
              return (
                <button className="px-4 py-2 bg-black rounded hover:bg-gray-300">
                  Next
                </button>
              );
            }
            return element;
          }}
        />
      </div>
    </div>
  );
};
