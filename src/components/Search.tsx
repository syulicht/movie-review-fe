"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Search = (): React.JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const handleSearch = () => {
    if (keyword === "") {
      setErrorMsg("なにか入力してください");
      return;
    }
    router.push(`/search?query=${keyword}&page=1`);
    setKeyword("");
    setErrorMsg("");
  };
  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    handleSearch();
  };
  useEffect(() => {
    setErrorMsg("");
  }, [searchParams]);
  return (
    <div className="w-2/5 flex flex-col">
      <div className="w-full bg-white h-12 rounded-full flex flex-column justify-between items-center">
        <input
          type="text"
          className="focus:outline-none ml-4 w-3/4 h-3/4"
          placeholder="search..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => handleEnterKeyDown(e)}
        />
        <button className="mr-4" onClick={handleSearch}>
          <Image src={"/search.svg"} width={30} height={30} alt="search icon" />
        </button>
      </div>
      <div className="w-full text-red-500">{errorMsg}</div>
    </div>
  );
};
