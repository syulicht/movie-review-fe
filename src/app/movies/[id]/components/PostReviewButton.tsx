import Image from "next/image";

type Props = {
  handleClick: () => void;
};

export const PostReviewButton = ({ handleClick }: Props): React.JSX.Element => {
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-14 right-14 bg-[#0080de] p-5 rounded-[45px] hover:bg-blue-400"
    >
      <Image src="/pen.svg" alt="レビュー投稿" width={50} height={50} />
    </button>
  );
};
