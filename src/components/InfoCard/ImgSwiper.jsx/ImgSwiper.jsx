import React from "react";
import "./ImgSwiper.scss";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import { ArrowBackIos, ArrowForwardIos, Star } from "@material-ui/icons";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
const Imgswiper = () => {
  return (
    <Swiper
      pagination={{ clickable: "false", dynamicBullets: "true" }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      slidesPerView="auto"
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://a0.muscache.com/im/pictures/f3fb1d7c-f4da-4960-8361-18e8d0456b27.jpg?im_w=720"
          alt=""
          className="infoCardImg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://a0.muscache.com/im/pictures/f3fb1d7c-f4da-4960-8361-18e8d0456b27.jpg?im_w=720"
          alt=""
          className="infoCardImg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://a0.muscache.com/im/pictures/f3fb1d7c-f4da-4960-8361-18e8d0456b27.jpg?im_w=720"
          alt=""
          className="infoCardImg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://a0.muscache.com/im/pictures/f3fb1d7c-f4da-4960-8361-18e8d0456b27.jpg?im_w=720"
          alt=""
          className="infoCardImg"
        />
      </SwiperSlide>
      <div className="swiper-button-prev">
        <ArrowBackIos className="swiper-button-icon" />
      </div>
      <div className="swiper-button-next">
        <ArrowForwardIos className="swiper-button-icon" />
      </div>
    </Swiper>
  );
};

export default Imgswiper;
