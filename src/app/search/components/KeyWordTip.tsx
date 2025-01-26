import React from "react";

type Props = {
  keyword: string;
};

export const KeyWordTip = ({ keyword }: Props): React.JSX.Element => {
  return (
    <div className="inline-flex items-center py-1 px-3 text-white bg-gray-500 rounded-2xl font-bold my-8">
      {keyword}
    </div>
  );
};
