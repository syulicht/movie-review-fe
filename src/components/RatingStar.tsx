import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type Props = {
  rate: number;
  readonly: boolean;
  style: object;
};

const RatingStar = (props: Props): React.JSX.Element => {
  return (
    <div>
      <Rating
        style={props.style}
        items={5}
        readOnly={props.readonly}
        value={props.rate}
      />
    </div>
  );
};

export default RatingStar;
