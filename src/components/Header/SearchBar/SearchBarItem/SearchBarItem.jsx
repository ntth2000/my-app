import React from "react";
import "./SearchBarItem.scss";
const Searchbaritem = (props) => {
  return (
    <div className={`searchBarItem ${props.name}`}>
      <p className="searchBarName">{props.label}</p>
      <p className="searchBarPlaceHolder">{props.placeholder}</p>
    </div>
  );
};

export default Searchbaritem;
