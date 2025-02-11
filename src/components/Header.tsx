import React, { Suspense } from "react";
import { MenuLink } from "@/components/MenuLink";
import { Search } from "@/components/Search";
import Link from "next/link";
import Image from "next/image";

export const Header = (): React.JSX.Element => {
  return (
    <header className="w-full flex flex-column justify-between items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="icon"
          width={80}
          height={80}
          className="ml-4"
        />
      </Link>
      <Suspense>
        <Search />
      </Suspense>
      <div className="mr-4">
        <MenuLink image="/account.svg" path="/account" />
      </div>
    </header>
  );
};
