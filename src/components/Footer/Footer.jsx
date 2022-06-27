import {
  AttachMoney,
  Facebook,
  Instagram,
  Language,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-card-container">
        <div className="footer-card-wrapper">
          <p className="footer-card-title">About</p>
          <ul className="footer-link-wrapper">
            <li>
              <a href="#" className="link footer-link">
                How Airbnb works
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Airbnb 2021
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Airbnb Plus
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Airbnb Luxe
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                HotelTonight
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Made possible by Hosts
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Founders' Letter
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-card-wrapper">
          <p className="footer-card-title">Community</p>
          <div className="footer-link-wrapper">
            <li>
              <a href="#" className="link footer-link">
                Diversity &amp; Belonging
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Airbnb Associates
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Host Afghan refugees
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Guest Referrals
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Gift cards
              </a>
            </li>
            <li>
              <a href="#" className="link footer-link">
                Airbnb.org
              </a>
            </li>
          </div>
        </div>
        <div className="footer-card-wrapper">
          <p className="footer-card-title">Host</p>
          <div className="footer-link-wrapper">
            <li>
              <a href="#" className="link">
                Host your home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Host an Online Experience
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Host an Experience
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Responsible hosting
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Resource Center
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Community Center
              </a>
            </li>
          </div>
        </div>
        <div className="footer-card-wrapper">
          <p className="footer-card-title">Support</p>
          <div className="footer-link-wrapper">
            <li>
              <a href="#" className="link">
                Our COVID-19 Response
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Cancellation options
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Neighborhood Support
              </a>
            </li>
            <li>
              <a href="#" className="link">
                Trust &amp; Safety
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-item">
            <div>
              <span>
                <Language className="footer-top-icon" />
                English(US)
              </span>
              <span>
                <AttachMoney className="footer-top-icon" />
                USD
              </span>
            </div>
          </div>
          <div className="footer-top-item media">
            <a href="#" className="link">
              <Facebook className="footer-top-media-icon" />
            </a>
            <a href="#" className="link">
              <Twitter className="footer-top-media-icon" />
            </a>
            <a href="#" className="link">
              <Instagram className="footer-top-media-icon" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copy-right">&copy; 2021 Airbnb, Inc.</p>
          <div>
            <span></span>
            <a href="#" className="link">
              Privacy
            </a>
            <span></span>
            <a href="#" className="link">
              Terms
            </a>
            <span></span>
            <a href="#" className="link">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
