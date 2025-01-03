"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const Search = (): React.JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search?keyword=${keyword}&page=1`);
    setKeyword("");
  };
  return (
    <div className="w-2/5 bg-white h-12 rounded-full flex flex-column justify-between items-center">
      <input
        type="text"
        className="focus:outline-none ml-4 w-3/4 h-3/4"
        placeholder="search..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className="mr-4" onClick={handleSearch}>
        <Image src={"/search.svg"} width={30} height={30} alt="search icon" />
      </button>
    </div>
  );
};
