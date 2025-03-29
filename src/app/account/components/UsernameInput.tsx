"use client";

import { useState } from "react";

type Props = {
  defaultValue: string;
};

export const UsernameInput = ({ defaultValue }: Props): React.JSX.Element => {
  const [name, setName] = useState(defaultValue);
  return (
    <div className="flex flex-col w-full gap-4">
      <label className="text-white text-lg">User Name</label>
      <input
        type="text"
        className="w-full bg-black border-white h-12 text-white border-2 rounded-md p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
