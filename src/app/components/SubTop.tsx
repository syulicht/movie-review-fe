import { RatingStar } from "@/components/RatingStar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  rate: number;
  title: string;
  image: string;
};

export const SubTop = (props: Props): React.JSX.Element => {
  return (
    <Link href={"/description"} className="w-5/6 h-[300px] relative mt-4">
      <div className="w-full h-full relative flex flex-col justify-between">
        <Image
          src={props.image}
          alt="sub top image"
          style={{ objectFit: "cover" }}
          className="w-full h-full"
          fill
        />
      </div>
      <div className="absolute w-full h-fit bottom-0 left-0 bg-black bg-opacity-40 p-4 flex flex-row justify-between z-10">
        <p className="text-white h-fit">{props.title}</p>
        <RatingStar rate={props.rate} readonly={true} />
      </div>
    </Link>
  );
};
