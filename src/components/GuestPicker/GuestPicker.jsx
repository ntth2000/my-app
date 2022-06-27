import React, { useEffect, useState } from "react";
import { Remove, Add } from "@material-ui/icons";
import $ from "jquery";
import "./GuestPicker.scss";
const Guestpicker = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [guests, setGuests] = useState({ adults, children, infants });
  useEffect(() => {
    setGuests({ adults, children, infants });
  }, [adults, children, infants]);
  useEffect(() => {
    $("document").ready(function () {
      if (adults <= 0) {
        $(".guestPickerItemRightRemoveButton.adults").prop("disabled", true);
        console.log('heeh')
      } else {
        $(".guestPickerItemRightRemoveButton.adults").prop("disabled", false);
      }
      if (children <= 0) {
        $(".guestPickerItemRightRemoveButton.children").prop("disabled", true);
      } else {
        $(".guestPickerItemRightRemoveButton.children").prop("disabled", false);
      }
      if (infants <= 0) {
        $(".guestPickerItemRightRemoveButton.infants").prop("disabled", true);
      } else {
        $(".guestPickerItemRightRemoveButton.infants").prop("disabled", false);
      }
    });
  });
  return (
    <div className="guestPicker">
      <div className="guestPickerItem">
        <div className="guestPickerItemLeft">
          <p className="guestPickerItemLeftName">Adults</p>
          <p className="guestPickerItemLeftDesc">Ages 13 or above</p>
        </div>
        <div className="guestPickerItemRight">
          <button
            onClick={() => {
              if (adults > 0) {
                setAdults(adults - 1);
              }
            }}
            className="guestPickerItemRightRemoveButton adults"
          >
            {" "}
            <Remove className="guestPickerItemRightIcon" />
          </button>
          <p className="guestPickerItemInput">{adults}</p>{" "}
          <button
            onClick={() => {setAdults(adults + 1);console.log('heelelel')}}
            className="guestPickerItemRightButton"
          >
            <Add className="guestPickerItemRightIcon" />
          </button>
        </div>
      </div>
      <div className="guestPickerItemMarker"></div>
      <div className="guestPickerItem">
        <div className="guestPickerItemLeft">
          <p className="guestPickerItemLeftName">Childrens</p>
          <p className="guestPickerItemLeftDesc">Ages 2-12</p>
        </div>
        <div className="guestPickerItemRight">
          <button className="guestPickerItemRightRemoveButton children">
            {" "}
            <Remove
              className="guestPickerItemRightIcon"
              onClick={() => children > 0 && setChildren(children - 1)}
            />
          </button>
          <p className="guestPickerItemInput">{children}</p>
          <button className="guestPickerItemRightButton">
            <Add
              className="guestPickerItemRightIcon"
              onClick={() => setChildren(children + 1)}
            />
          </button>
        </div>
      </div>{" "}
      <div className="guestPickerItemMarker"></div>
      <div className="guestPickerItem">
        <div className="guestPickerItemLeft">
          <p className="guestPickerItemLeftName">Infants</p>
          <p className="guestPickerItemLeftDesc">Under 2</p>
        </div>
        <div className="guestPickerItemRight">
          <button
            className="guestPickerItemRightRemoveButton infants"
            onClick={() => infants > 0 && setInfants(infants - 1)}
          >
            {" "}
            <Remove className="guestPickerItemRightIcon" />
          </button>
          <p className="guestPickerItemInput">{infants}</p>{" "}
          <button className="guestPickerItemRightButton">
            <Add
              className="guestPickerItemRightIcon"
              onClick={() => setInfants(infants + 1)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guestpicker;
