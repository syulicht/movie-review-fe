import React, { FormEvent } from "react";

type Props = {
  class: string;
  action: (e?: FormEvent) => void;
  title: string;
};

const Button = (props: Props) => {
  return (
    <button onClick={(e) => props.action(e)} className={props.class}>
      {props.title}
    </button>
  );
};

export default Button;
