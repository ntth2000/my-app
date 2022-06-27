import React from "react";
import "./MediumCard.scss";
const Mediumcard = (props) => {
  return (
    <div className="mediumCard">
      <div className="mediumCard-img">
        <img src={props.img} alt="" />
      </div>
      <p className="mediumCard-text">{props.text}</p>
    </div>
  );
};

export default Mediumcard;
