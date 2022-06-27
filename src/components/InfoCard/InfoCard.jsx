import React from "react";
import Infocardhorizontal from "./InfoCardHorizontal";
import Infocardvertical from "./InfoCardVertical";

const Infocard = ({ item, key }) => {
  return (
    <React.Fragment>
      <Infocardhorizontal item={item} key={`${key}horizontal`} />
      <Infocardvertical item={item} key={`${key}vertical`} />
    </React.Fragment>
  );
};

export default Infocard;
