import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  path: string;
};

const menuLink = (props: Props) => {
  return (
    <div className="text-white">
      <Link href={props.path}>{props.name}</Link>
    </div>
  );
};

export default menuLink;
