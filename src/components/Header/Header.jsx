import { Dehaze, Language, Person, Search } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./Header.scss";
import $ from "jquery";
import Searchbar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Datepicker from "../DatePicker/DatePicker";
import Guestpicker from "../GuestPicker/GuestPicker";
const Header = () => {
  const [chosenDate, setChosenDate] = useState({
    endDate: null,
    startDate: null,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  useEffect(() => {
    $(window).ready(function () {
      $(".search-larger").click(function () {
        $(".searchBar").addClass("active");
        $(this).hide();
      });
    });
    $(window).click(function (e) {
      if (!$(e.target).parents().hasClass("searchBar")) {
        $(".searchBar").removeClass("active");
        $(".datePicker").removeClass("active");
        $(".guestPicker").removeClass("active");
        $(".search-larger").show();
      }
      $(".datePicker").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
      $(".guestPicker").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
      $(".header").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
      $(".searchBar").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
      $(".guestPickerItemRightRemoveButton").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
      $(".guestPickerItemRightButton").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    });
    $(".header").click(function (e) {
      $(".searchBarItem").removeClass("active");
      $(".datePicker").removeClass("active");
      $(".guestPicker").removeClass("active");
      $(".searchBarItem").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
      $(".link").click(function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    });
  });
  return (
    <React.Fragment>
      <div className={isScrolled ? "header scrolled" : "header"}>
        <div className={"header-left"}>
          <Link
            to="/"
            className="link"
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            <img
              src="https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png"
              alt=""
              className={"logo-small"}
            />
            <img
              className={"logo-big"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div
          className={`${isScrolled ? "scrolled search-small" : "search-small"}`}
        >
          <Search className={"search-icon"} />
          Where are you going?
        </div>
        <div className={"header-center"}>
          <div
            className={`search-larger`}
            onClick={() => setOpenSearchBar(true)}
          >
            <span className={"search-larger-text-wrapper"}>
              Start your search
            </span>
            <span className={"search-larger-icon-wrapper"}>
              {" "}
              <Search className={"search-icon"} />
            </span>
          </div>
        </div>
        <div className={"header-right"}>
          <span className={"header-right-text"}>Become a host</span>
          <span className={"header-right-language-wrapper"}>
            <Language className={"header-right-language-icon"} />
          </span>
          <div className={"header-right-menu"}>
            <Dehaze className={"header-right-menu-icon"} />
            <Person className={"header-right-person-icon"} />{" "}
          </div>
        </div>
      </div>
      <Searchbar chosenDate={chosenDate} />
      <Datepicker setChosenDate={setChosenDate} />

      <Guestpicker />
    </React.Fragment>
  );
};

export default Header;
