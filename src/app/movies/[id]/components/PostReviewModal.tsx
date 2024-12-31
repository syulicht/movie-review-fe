"use client";

import { RatingStar } from "@/components/RatingStar";
import { Button } from "@/components/Button";
import { FormEvent, useState } from "react";
import { postReview } from "@/actions/review";
import { useRouter } from "next/navigation";

type Props = {
  movieId: number;
  isOpen: boolean;
  closeModal: () => void;
  showSnackbar: (message: string) => void;
};

export const PostReviewModal = ({
  movieId,
  isOpen,
  closeModal,
  showSnackbar,
}: Props): React.JSX.Element => {
  const [rating, setRating] = useState(0);
  const [reviewContent, setReviewContent] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { status } = await postReview(
      { rating, content: reviewContent },
      movieId,
    );

    if (status === "success") {
      closeModal();
      router.refresh();
      showSnackbar("レビューを投稿しました");
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-10" />
      <dialog
        className="fixed inset-0 z-20 bg-[#232d3a] p-7 rounded-xl"
        open={isOpen}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <RatingStar rating={rating} readonly={false} onChange={setRating} />
          </div>
          <textarea
            className="w-[50vw] text-xl p-4 rounded-lg"
            placeholder="面白かった"
            rows={7}
            value={reviewContent}
            onChange={(event) => setReviewContent(event.target.value)}
          />

          <div className="my-4 flex gap-5">
            <Button onClick={closeModal}>キャンセル</Button>
            <Button isTypeSubmit>投稿する</Button>
          </div>
        </form>
      </dialog>
    </>
  );
};
