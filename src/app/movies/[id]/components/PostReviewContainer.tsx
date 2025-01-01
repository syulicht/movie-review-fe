"use client";

import { useState } from "react";
import { PostReviewButton } from "./PostReviewButton";
import { PostReviewModal } from "./PostReviewModal";
import { Snackbar, useSnackbar } from "@/components/Snackbar";

type Props = {
  movieId: number;
};

export const PostReviewContainer = ({ movieId }: Props): React.JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { snackbarRef, showSnackbar } = useSnackbar();

  return (
    <>
      {isModalOpen && (
        <PostReviewModal
          movieId={movieId}
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          showSnackbar={showSnackbar}
        />
      )}
      <PostReviewButton handleClick={() => setIsModalOpen(true)} />

      <Snackbar ref={snackbarRef} />
    </>
  );
};
