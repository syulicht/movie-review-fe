import Image from "next/image";
import React from "react";
import { MenuLink } from "@/components/MenuLink";
import { Search } from "@/components/Search";

export const Header = (): React.JSX.Element => {
  return (
    <div className="w-full flex flex-column justify-between items-center">
      <Image
        width={80}
        height={80}
        src={"/logo2.svg"}
        alt="logo"
        className="ml-4"
      />
      <Search />
      <div className="flex flex-column w-1/5 justify-around">
        <MenuLink image="Home.svg" path="/" />
        <MenuLink image="List.svg" path="/movie-list" />
        <MenuLink image="account_circle.svg" path="/account" />
      </div>
    </div>
  );
};
