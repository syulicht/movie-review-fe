import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  path: string;
};

export const MenuLink = (props: Props): React.JSX.Element => {
  return (
    <div className="text-white">
      <Link href={props.path}>
        <Image src={props.image} alt="icon" width={50} height={50} />
      </Link>
    </div>
  );
};
