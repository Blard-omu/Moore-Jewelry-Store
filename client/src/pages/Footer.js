import React from "react";
import vect from "../images/Vector (10).png";
import vect1 from "../images/icons8-inquiry-50.png";
import vect2 from "../images/icons8-inquiry-50.png";
import vect4 from "../images/Vector (14).png";
import vect5 from "../images/image 10.png";
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { ImTwitter } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiSecurePaymentFill } from "react-icons/ri";
import "../css/Footer.css"

const Footer = () => {
  return (
    <div className="main-cont">
      <footer>
        <div className="head col-md-12">
          <div className="first-container">
            <div className="padlock">
              <div className="vect1">
                {/* <img src={vect} alt="" /> */}
              </div>
              <div className="percent">
                <h1>100%</h1>
                <h3>Payment Secured</h3>
              </div>
            </div>

            <div className="TW-FS-support">
              <div className="vect">
                <div className="vect-rel">
                  {/* <img src={vect1} alt="" className="vect11" />
                  <img src={vect2} alt="" className="vect2" /> */}

                </div>
              </div>

              <div className="twenty">
                <h1>24/7</h1>
                <h3>support</h3>
              </div>
            </div>
          </div>

          <div className="head2">
            <div className="download">
              <div className="download-img">
                <img src={vect4} alt="" className="img-fluid img1" />
              </div>
              <div className="dwnld-text">
                <a
                  href="http://https://apps.apple.com/ng/app/jazzys-burger/id1632442211"
                  target="_blank"
                >
                  <h1>Download App on</h1>
                  <h1>APP STORE</h1>
                </a>
              </div>
            </div>

            <div className="download">
              <div className="download-img">
                <img src={vect5} alt="" className="img-fluid img1" />
              </div>
              <div className="dwnld-text">
                <a
                  href="http://https://play.google.com/store/apps/details?id=co.awadigital.jazzyburger"
                  target="_blank"
                >
                  <h1>Download App on </h1>
                  <h1>GOOGLE PLAY</h1>
                </a>
              </div>
             </div>
          </div>
        </div>

        <div className="general">
          <div className="help-link">
            <h1 className="">Need help</h1>
            <div className="link">
              <a href="tel:+234 466 6655">+234 567 8910</a>{" "}
              <span className="link">or</span>
            </div>
            <div className="link">
              <a href="/">help@blardecommerceshop.com</a>
            </div>
          </div>

          <h1 className="follow-us">FOLLOW US</h1>

          <div className="Sm-icons">
            <div className="icons">
              <div className="icon1 ">
                <a
                  className="d-block"
                  href="#"
                  target="_blank"
                >
                  <FaFacebookF className="rotate-on-hover" />
                </a>
              </div>
              <div className="icon1">
                <a
                  href="https://twitter.com/blard-omu"
                  target="_blank"
                >
                  <ImTwitter className="rotate-on-hover" />
                </a>
              </div>
              <div className="icon1">
                <a
                  href="https://www.instagram.com/blard_dev"
                  target="_blank"
                >
                  <SiInstagram className="rotate-on-hover" />
                </a>
              </div>
              <div className="icon1">
                <a href="https://www.youtube/blard_dev" target="_blank">
                  <AiOutlineYoutube className="rotate-on-hover" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <small style={{background:"gray",color:"white", fontFamily:"Open Sans"}}> &copy; Blard's ecommerceshop.com</small>
    </div>
  );
};

export default Footer;