import React from "react";
import "./SmallCard.scss";
const Smallcard = (props) => {
  return (
    <div className="smallCard">
      <div className="smallCard-img">
        <img src={props.img} alt="" />
      </div>
      <div className="smallCard-infor">
        <p className="smallCard-location">{props.name}</p>
        <p className="smallCard-time">{props.time} drive</p>
      </div>
    </div>
  );
};

export default Smallcard;
