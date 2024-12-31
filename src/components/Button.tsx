import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isTypeSubmit?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  isTypeSubmit = false,
  onClick = () => {},
}: Props): React.JSX.Element => {
  const className = isTypeSubmit
    ? "bg-[#0080de] text-white font-bold text-xl py-4 px-14 min-w-56 rounded-2xl hover:bg-blue-400"
    : "bg-gray-500 text-white font-bold text-xl py-4 px-14 min-w-56 rounded-2xl hover:bg-gray-400";

  return (
    <button
      type={isTypeSubmit ? "submit" : undefined}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
