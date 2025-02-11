import Image from "next/image";
import React, { Suspense } from "react";
import { MenuLink } from "@/components/MenuLink";
import { Search } from "@/components/Search";

export const Header = (): React.JSX.Element => {
  return (
    <header className="w-full flex flex-column justify-between items-center">
      <Image
        width={80}
        height={80}
        src={"/logo2.svg"}
        alt="logo"
        className="ml-4"
      />
      <Suspense>
        <Search />
      </Suspense>
      <div className="flex flex-column w-1/5 justify-around">
        <MenuLink image="/home.svg" path="/" />
        <MenuLink image="/list.svg" path="/search?page=1" />
        <MenuLink image="/account.svg" path="/account" />
      </div>
    </header>
  );
};
