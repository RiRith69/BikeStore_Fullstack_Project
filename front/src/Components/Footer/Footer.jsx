import React from "react";
import "./Footer.css";
import shooper from "./../Assets/shopper.png";
import fb from "./../Assets/fb.png";
import ig from "./../Assets/ig.png";
import telegram from "./../Assets/telegram.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={shooper} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={fb} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={ig} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={telegram} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
