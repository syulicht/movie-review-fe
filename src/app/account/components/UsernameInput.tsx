"use client";

import { useState } from "react";

type Props = {
  defaultValue: string;
};

export const UsernameInput = ({ defaultValue }: Props): React.JSX.Element => {
  const [name, setName] = useState(defaultValue);
  return (
    <div>
      <label className="text-white">User Name</label>
      <input
        type="text"
        className="w-4/5 bg-black border-white h-12 text-white border-2 rounded-md p-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
