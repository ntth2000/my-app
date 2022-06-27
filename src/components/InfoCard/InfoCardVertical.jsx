import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import { ArrowBackIos, ArrowForwardIos, Star } from "@material-ui/icons";
import "./InfoCardVertical.scss";
import { Link } from "react-router-dom";
import Imgswiper from "./ImgSwiper.jsx/ImgSwiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Infocardvertical = ({item}) => {
  return (
    <div className="infoCardVertical">
      <Link to="/" className="link">
        <div className="infoCardVerticalContainer">
          <div className="infoCardVerticalImgContainer">
            <Imgswiper img={item.img} />
          </div>

          <div className="infoCardVerticalInformation">
            <p className="infoCardVerticalRate">
              <Star className="infoCardVerticalRateIcon" /> {item.star}
              <span className="infoCardVerticalRateTotalReviews">
                ({item.totalReviews})
              </span>
            </p>
            <p className="infoCardVerticalLocation">
              <span className="infoCardVerticalLocationType">{item.type}</span>
              <span className="infoCardVerticalLocationLocation">
                {item.location}
              </span>
            </p>
            <p className="infoCardVerticalDesc">{item.desc} </p>
            <p className="infoCardVerticalPrice">
              <span>{item.price}</span>/ night
            </p>
            <p className="infoCardVerticalTotalPrice">{item.total}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Infocardvertical;
