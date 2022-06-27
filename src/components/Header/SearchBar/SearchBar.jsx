import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./SearchBar.scss";
import { Search } from "@material-ui/icons";
import Searchbaritem from "./SearchBarItem/SearchBarItem";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Octr",
  "Nov",
  "Dec",
];
const Searchbar = ({ chosenDate }) => {
  const [location, setLocation] = useState(null);
  const convertedStartDate =
    chosenDate.startDate !== null &&
    `${
      monthNames[chosenDate.startDate.getMonth()]
    } ${chosenDate.startDate.getDate()}`;
  const convertedEndDate =
    chosenDate.endDate &&
    `${
      monthNames[chosenDate.endDate.getMonth()]
    } ${chosenDate.endDate.getDate()}`;
  useEffect(() => {
    $("document").ready(function () {
      $(".searchBarItem").click(function () {
        $(".searchBarItem").removeClass("active");
        $(this).addClass("active");
      });
      $(".checkinDate").click(function () {
        $(".datePicker").addClass("active");
        $(".guestPicker").removeClass("active");
      });
      $(".checkoutDate").click(function () {
        $(".datePicker").addClass("active");
        $(".guestPicker").removeClass("active");
      });
      $(".searchBarItem.location").click(function () {
        $(".datePicker").removeClass("active");
        $(".guestPicker").removeClass("active");
      });
      $(".searchBarItem.guests").click(function () {
        $(".datePicker").removeClass("active");
      });
      $(".searchBarItem.guests").click(function () {
        $(".guestPicker").addClass("active");
      });
    });
    $(".searchBar").click(function (e) {
      $(".searchBarItem").removeClass("active");
      $(".datePicker").removeClass("active");
      $(".guestPicker").removeClass("active");
      $(".searchBarItem").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
      $(".searchBar-icon-wrapper").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });

    });
  });
  return (
    <div className="searchBar">
      <div className="searchBarWrapper">
        <div className="searchBarItemContainer">
          <div className="searchBarItem location">
            <p className="searchBarName">Location</p>
            <input
              type="text"
              placeholder="Where are you going?"
              className="searchBarInput"
              style={{ cursor: "auto" }}
              name="location"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="searchBarItemContainer">
          <Searchbaritem
            label="Check in"
            placeholder={
              chosenDate.startDate ? convertedStartDate : "Add dates"
            }
            name="checkinDate"
          />
        </div>
        <div className="searchBarItemContainer">
          <Searchbaritem
            label="Check out"
            placeholder={chosenDate.endDate ? convertedEndDate : "Add dates"}
            name="checkoutDate"
          />
        </div>
        <div className="searchBarItemContainer">
          <Searchbaritem
            label="Guests"
            placeholder="Add guests"
            name="guests"
          />
          <div className="searchBarSubmit">
            <Link to="/search" className="link searchBar-icon-wrapper">
              {" "}
              <Search className={"searchBar-icon"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
