import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  path: string;
};

export const MenuLink = (props: Props): React.JSX.Element => {
  return (
    <div className="text-white">
      <Link href={props.path}>{props.name}</Link>
    </div>
  );
};
