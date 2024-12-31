"use server";

import { PostReview } from "@/types/review";
import { cookies } from "next/headers";

type Result =
  | {
      status: "success";
    }
  | {
      status: "failure";
      message: string;
    };

export const postReview = async (
  review: PostReview,
  movieId: number,
): Promise<Result> => {
  const cookieList = await cookies();
  const token = cookieList.get("token")?.value ?? "";
  const res = await fetch(`${process.env.BE_URL}/movies/${movieId}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(review),
  });
  if (res.ok) {
    return {
      status: "success",
    };
  } else {
    return {
      status: "failure",
      message: "レビューの投稿に失敗しました",
    };
  }
};
