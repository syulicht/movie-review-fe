import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isTypeSubmit?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  isTypeSubmit = false,
  isLoading = false,
  onClick = () => {},
}: Props): React.JSX.Element => {
  const className = isTypeSubmit
    ? "bg-[#0080de] text-white font-bold text-xl py-4 px-14 min-w-56 rounded-2xl hover:bg-blue-400"
    : "bg-gray-500 text-white font-bold text-xl py-4 px-14 min-w-56 rounded-2xl hover:bg-gray-400";

  const loadingClassName = isLoading
    ? "bg-opacity-50 pointer-events-none text-opacity-40"
    : "";

  return (
    <button
      type={isTypeSubmit ? "submit" : undefined}
      className={`${className} ${loadingClassName}`}
      onClick={onClick}
    >
      {isLoading && (
        <div className="relative">
          <div
            className="absolute top-2 flex left-1/2 translate-x-[-50%]"
            aria-label="読み込み中"
          >
            <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
            <div className="animate-ping h-2 w-2 bg-white rounded-full mx-4"></div>
            <div className="animate-ping h-2 w-2 bg-white rounded-full"></div>
          </div>
        </div>
      )}
      {children}
    </button>
  );
};
