import Image from "next/image";
import React from "react";

const search = () => {
  return (
    <div className="w-2/5 bg-white h-12 rounded-full flex flex-column justify-between items-center">
      <input
        type="text"
        className="focus:outline-none h-12 ml-4 w-3/4 h-3/4"
        placeholder="search..."
      />
      <button className="mr-4">
        <Image
          src={"/searchIcon.svg"}
          width={30}
          height={30}
          alt="search icon"
        />
      </button>
    </div>
  );
};

export default search;
