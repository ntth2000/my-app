import React from "react";
import "./LargeCard.scss";
const Largecard = (props) => {
  return (
    <div className="largeCard">
      <div className="largeCard-img">
        <img src={props.img} alt="" />
      </div>
      <p className="largeCard-title">{props.title}</p>
      <p className="largeCard-desc">{props.desc}</p>
    </div>
  );
};

export default Largecard;
