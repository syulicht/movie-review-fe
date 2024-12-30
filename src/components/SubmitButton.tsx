import React from "react";

type Props = {
  class: string;
  title: string;
};

export const SubmitButton = (props: Props): React.JSX.Element => {
  return (
    <button type="submit" className={props.class}>
      {props.title}
    </button>
  );
};
