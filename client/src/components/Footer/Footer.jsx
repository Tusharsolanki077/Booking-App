import React from "react";
import playStore from "../../../assets/playstore.png";
import appStore from "../../../assets/Appstore.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Bokking-App.</h1>
        <p>Download App Now !</p>

        <p>Copyrights 2023 &copy; Tushar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://youtube.com/">Youtube</a>
        <a href="https://youtube.com/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;