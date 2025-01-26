import React from "react";
import { Chip } from "@/components/Chip";

type Props = {
  query: string;
  searchCount: number;
};

export const SearchFilter = ({
  query,
  searchCount,
}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-row justify-between text-white mx-4 my-4">
      <div className="flex flex-col">
        <div>検索条件：</div>
        <div className="flex flex-row flex-wrap">
          <Chip name={query} />
        </div>
      </div>
      <div>表示件数： {searchCount}件</div>
    </div>
  );
};
