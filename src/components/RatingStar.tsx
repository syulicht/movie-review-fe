import React from "react";
import ReactStars from "react-stars";

type Props = {
  rate: number;
  edit: boolean;
  size: number;
};

const RatingStar = (props: Props): React.JSX.Element => {
  return (
    <div>
      <ReactStars
        count={5}
        edit={props.edit}
        size={props.size}
        value={props.rate}
        color1={"#ccc"}
        color2={"#ffd700"}
        half={true}
      />
    </div>
  );
};

export default RatingStar;
