import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import {
  ArrowBackIos,
  ArrowForwardIos,
  FavoriteBorder,
  HearingOutlined,
  Star,
} from "@material-ui/icons";
import "./InfoCardHorizontal.scss";
import { Link } from "react-router-dom";
import Imgswiper from "./ImgSwiper.jsx/ImgSwiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Infocardhorizontal = ({ item }) => {
  return (
    <div className="infoCardHorizontal">
      <Link to="/" className="link">
        <div className="infoCardHorizontalContainer">
          <div className="infoCardHorizontalImgContainer">
            <Imgswiper />
          </div>

          <div className="infoCardHorizontalInformation">
            <div className="infoCardHorizontalInformationTop">
              <div className="infoCardHorizontalInformationTopLeft">
                <p className="infoCardHorizontalLocation">
                  {item.type} in {item.location}
                </p>
                <p className="infoCardHorizontalDesc">{item.desc} </p>
                <p className="infoCardHorizontalDetail">
                  {item.detail.map((each) => (
                    <span>{each}</span>
                  ))}
                </p>
                <p className="infoCardHorizontalDetail">
                  {item.feature.map((each) => (
                    <span>{each}</span>
                  ))}
                </p>
              </div>
              <div className="infoCardHorizontalInformationTopRight">
                <p className="infoCardHorizontalInformationTopRightIconWrapper">
                  <FavoriteBorder className="infoCardHorizontalInformationTopRightIcon" />
                </p>
              </div>
            </div>
            <div className="infoCardHorizontalInformationBottom">
              <div className="infoCardHorizontalInformationBottomLeft">
                <p className="infoCardHorizontalRate">
                  <Star className="infoCardHorizontalRateIcon" /> {item.star}{" "}
                  <span className="infoCardHorizontalRateTotalReviews">
                    ({item.totalReviews} reviews)
                  </span>
                </p>
              </div>
              <div className="infoCardHorizontalInformationBottomRight">
                <p className="infoCardHorizontalPrice">
                  <span>{item.price}</span>/ night
                </p>
                <p className="infoCardHorizontalTotalPrice">{item.total}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Infocardhorizontal;
