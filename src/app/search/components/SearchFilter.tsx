import React from "react";
import { KeyWordTip } from "./KeyWordTip";

type Props = {
  keywords: string[];
  searchCount: number;
};

export const SearchFilter = ({
  keywords,
  searchCount,
}: Props): React.JSX.Element => {
  return (
    <div className="flex flex-row justify-between text-white mx-4 mt-4">
      <div className="flex flex-col">
        <div>検索条件：</div>
        <div className="flex flex-row flex-wrap">
          {keywords.map((keyword, index) => (
            <KeyWordTip keyword={keyword} key={index} />
          ))}
        </div>
      </div>
      <div>表示件数： {searchCount}件</div>
    </div>
  );
};
