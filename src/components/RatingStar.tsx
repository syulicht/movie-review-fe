import React from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type Props = {
  rate: number;
  readonly: boolean;
};

export const RatingStar = (props: Props): React.JSX.Element => {
  return (
    <Rating
      itemStyles={
        props.readonly
          ? {
              itemShapes: Star,
              activeFillColor: "#daaa00",
              inactiveFillColor: "#a2a2a2",
            }
          : {
              itemShapes: Star,
              activeFillColor: "#daaa00",
              inactiveFillColor: "#a2a2a2",
            }
      }
      style={props.readonly ? { width: "150px" } : { width: "300px" }}
      items={5}
      readOnly={props.readonly}
      value={props.rate}
    />
  );
};
