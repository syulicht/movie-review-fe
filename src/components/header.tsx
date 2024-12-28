import Image from "next/image";
import React from "react";
import MenuLink from "@/app/components/menuLink";
import Search from "@/app/components/search";

const header = () => {
  return (
    <div className="w-full flex flex-column justify-between items-center">
      <Image
        width={80}
        height={80}
        src={"/logo2.svg"}
        alt="logo"
        className="ml-4"
      />
      <div className="flex flex-column w-2/5 justify-around">
        <MenuLink name="ホーム" path="/" />
        <MenuLink name="映画のリスト" path="/movie-list" />
        <MenuLink name="アカウント" path="/account" />
      </div>
      <Search />
      <button className="mr-4">
        <Image width={35} height={40} src={"/Login.svg"} alt="login icon" />
      </button>
    </div>
  );
};

export default header;
