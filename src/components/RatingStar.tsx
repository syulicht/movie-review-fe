import React from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type Props =
  | {
      rating: number;
      readonly: false;
      onChange: (rating: number) => void;
    }
  | {
      rating: number;
      readonly: true;
    };

export const RatingStar = (props: Props): React.JSX.Element => {
  return (
    <Rating
      itemStyles={{
        itemShapes: Star,
        activeFillColor: "#daaa00",
        inactiveFillColor: "#a2a2a2",
      }}
      style={props.readonly ? { width: "150px" } : { width: "300px" }}
      items={5}
      readOnly={props.readonly}
      value={props.rating}
      onChange={props.readonly ? undefined : props.onChange}
    />
  );
};
