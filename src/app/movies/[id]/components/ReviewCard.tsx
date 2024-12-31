import { RatingStar } from "@/components/RatingStar";
import { Review } from "@/types/review";
import Image from "next/image";

type Props = {
  review: Review;
};

export const ReviewCard = ({ review }: Props): React.JSX.Element => {
  return (
    <div className="flex gap-2 w-[1000px] bg-gray-800 p-10 rounded-3xl">
      <div className="w-1/6">
        <div className="w-16 h-16 rounded-[32px] mx-auto mb-2 overflow-hidden relative">
          <Image
            src="/account_circle.svg"
            alt="ユーザーアイコン"
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <RatingStar rating={review.rating} readonly />
        </div>
      </div>

      <p className="w-1/5 text-xl font-bold break-words">{review.user.name}</p>

      <p className="grow">{review.content}</p>
    </div>
  );
};
