import React, { useEffect, useRef, useState } from "react";
import $ from "jquery";
import Mediumcard from "../MediumCard/MediumCard";
import Smallcard from "../SmallCard/SmallCard";
import { Link } from "react-router-dom";
import "./Home.scss";
import Largecard from "../LargeCard/LargeCard";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const exploreData = [
  {
    name: "Ho Chi Minh City",
    img: "https://a0.muscache.com/im/pictures/f73eff6c-cffd-4462-a2bf-9417f5d2fbe9.jpg?im_q=medq&im_w=240",
    time: "15 minute",
  },
  {
    name: "Nha Trang",
    img: "https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_q=medq&im_w=240",
    time: "6.5 hour",
  },
  {
    name: "Vung Tau City",
    img: "https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_q=medq&im_w=240",
    time: "2 hour",
  },
  {
    name: "Can Tho City",
    img: "https://a0.muscache.com/im/pictures/2f5a15c7-2170-420a-9c48-9ac88a80a7fa.jpg?im_q=medq&im_w=240",
    time: "3 hour",
  },
  {
    name: "Tuy Hoa",
    img: "https://a0.muscache.com/im/pictures/a1617dd0-7140-4c64-814f-384d174a78be.jpg?im_q=medq&im_w=240",
    time: "7.5 hour",
  },
  {
    name: "Bien Hoa City",
    img: "https://a0.muscache.com/im/pictures/1bb8b6ff-17ec-4f01-96df-27d0ba265b16.jpg?im_q=medq&im_w=240",
    time: "45 minute",
  },
  {
    name: "Phan Rang - Thap Cham",
    img: "https://a0.muscache.com/im/pictures/1a653f75-87bd-41f0-91b5-f9f2c3194984.jpg?im_q=medq&im_w=240",
    time: "5 hour",
  },
  {
    name: "Buon Ma Thuot",
    img: "https://a0.muscache.com/im/pictures/6a4bb597-0944-480b-94cc-b183c724f612.jpg?im_q=medq&im_w=240",
    time: "5 hour",
  },
];
const liveAnywhereData = [
  {
    img: "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320",
    text: "Outdoor getaways",
  },
  {
    img: "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=240",
    text: "Unique stays",
  },
  {
    img: "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240",

    text: "Retire homes",
  },
  {
    img: "https://images.unsplash.com/photo-1518108621213-2be030acb267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    text: "Pet allowed",
  },
];
const discoverData = [
  {
    img: "https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=320",
    title: "Experiences",
    desc: "Find unforgettable activities near you.",
  },
  {
    img: "https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=320",
    title: "Online Experiences",
    desc: "Live, interactive activities led by Hosts.",
  },
  {
    img: "https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=320",
    title: "Featured collection: Wanderlust",
    desc: "Travel from home with Onine Experiences.",
  },
];

const Home = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(".home-component-destination-title-item:first-child").addClass(
        "active"
      );
      $(".home-component-destination-item:first-child").addClass("active");
      $(".home-component-destination-title-item").click(function (e) {
        var chosen = this.id;
        $(".home-component-destination-title-item").removeClass("active");
        $(".home-component-destination-title-item" + "#" + chosen).addClass(
          "active"
        );
        $(".home-component-destination-item").removeClass("active");
        $(".home-component-destination-item" + "#" + chosen).addClass("active");
      });
    });
  }, []);
  return (
    <React.Fragment>
      <div className="home">
        <div className="home-top">
          <div className="img-wrapper">
            <img
              className="home-img small"
              src="https://a0.muscache.com/im/pictures/0c38042b-8685-4180-8d9b-12a6892ac6d8.jpg?im_w=320"
              alt=""
            />
            <img
              className="home-img medium"
              alt=""
              src="https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_w=720"
            />
            <img
              src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=960"
              alt=""
              className="home-img large"
            />
          </div>
          <div className="wrapper">
            <div className={"home-text"}>
              <span>Not sure where to go?</span>
              <span>Perfect.</span>
            </div>
            <div>
              <button className={"home-button"}>
                <span>I'm flexible</span>
              </button>
            </div>
          </div>
        </div>
        <div className="home-component">
          <h2 className="home-component-title">Expore nearby</h2>
          <div className="home-component-wrapper">
            <div className="card-container small" dir="ltr">
              {exploreData.map((item, i) => (
                <Smallcard
                  name={item.name}
                  time={item.time}
                  img={item.img}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="home-component">
          <h2 className="home-component-title">Live anywhere</h2>
          <div className="home-component-wrapper">
            <div className="home-component-wrapper-slider back">
              <span>
                <ArrowBackIos className="slider-icon " />
              </span>
            </div>

            <div className="card-container medium" dir="ltr">
              {liveAnywhereData.map((item, i) => (
                <Mediumcard img={item.img} text={item.text} key={i} />
              ))}
            </div>

            <div className="home-component-wrapper-slider forward">
              <span>
                <ArrowForwardIos className="slider-icon" />
              </span>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="home-component-hosting">
            <div className="home-component-hosting-wrapper">
              <div className="home-component-hosting-text">
                <h1>Try hosting</h1>
                <p className="text">
                  Earn extra income and unlock new opportunities by sharing your
                  space.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <img
              className="home-component-hosting-img vertical"
              src="https://a0.muscache.com/im/pictures/791aba62-2de8-4722-99b5-45838715eb34.jpg?im_w=320"
              alt=""
            />
            <img
              className="home-component-hosting-img horizontal"
              src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg?im_w=720"
              alt=""
            />
          </div>
        </Link>
        <div className="home-component">
          <h2 className="home-component-title">Discover things to do</h2>
          <div className="home-component-wrapper">
            <div className="card-container large" dir="ltr">
              {discoverData.map((item, i) => (
                <Largecard
                  key={i}
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="home-component">
          <h2 className="home-component-title">
            Inspiration for future getaways
          </h2>
          <div className="home-component-destination-wrapper">
            <div className="home-component-destination-title">
              <div className="home-component-destination-title-scrollbar">
                <p
                  id="artsCulture"
                  className="home-component-destination-title-item"
                >
                  Destination for arts &amp; culture
                </p>
                <p
                  id="outdoorAdventure"
                  className="home-component-destination-title-item"
                >
                  Destination for outdoor adventure
                </p>
                <p
                  id="mountainCabins"
                  className="home-component-destination-title-item"
                >
                  Destination for mountain cabins
                </p>
                <p
                  id="beachDestinations"
                  className="home-component-destination-title-item"
                >
                  Beach destinations
                </p>
                <p
                  id="popularDestinations"
                  className="home-component-destination-title-item"
                >
                  Popular destinations
                </p>
                <p
                  id="uniqueStays"
                  className="home-component-destination-title-item"
                >
                  Unique Stays
                </p>
              </div>{" "}
            </div>
            <div className="home-component-destination-addresses">
              <div className="home-component-destination-item" id="artsCulture">
                <ul>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="home-component-destination-item "
                id="outdoorAdventure"
              >
                <ul>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Los Angeles</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="home-component-destination-item "
                id="mountainCabins"
              >
                <ul>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="home-component-destination-item "
                id="beachDestinations"
              >
                <ul>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="home-component-destination-item "
                id="popularDestinations"
              >
                <ul>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="home-component-destination-item "
                id="uniqueStays"
              >
                <ul>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                  <li>
                    <div className="home-component-destination-address">
                      <p className="home-item-address">Phoenix</p>
                      <p className="home-item-state">Arizona</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
