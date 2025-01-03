import { RatingStar } from "@/components/RatingStar";
import React from "react";

export const SkeltonItem = () => {
  return (
    <div className="animate-pulse flex flex-row justify-between mt-4">
      <div className="w-[250px] h-[150px] bg-slate-500 rounded-xl"></div>
      <div className="w-1/2 flex flex-col">
        <div className="w-full h-[25px] mb-4 bg-slate-500 rounded-xl"></div>
        <div className="w-1/2 h-[25px] mb-4 bg-slate-500 rounded-xl"></div>
      </div>
      <RatingStar readonly={true} rating={0} />
    </div>
  );
};
