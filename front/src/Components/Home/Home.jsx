import React from "react";
import "./Home.css";
import hand_icon from "./../Assets/hand.png";
import arrow_image from "../Assets/arrow-image.png";
import image_home from "../Assets/image_home.png";
const Home = () => {
  return (
    <div className="Home">
      <div className="left_home">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collection</p>
          <p>for everyone</p>
        </div>
        <div className="home_lastest_btn">
          <div>Lastest Collection</div>
          <img src={arrow_image} alt="" />
        </div>
      </div>
      <div className="right_home">
        <img src={image_home} alt="" />
      </div>
    </div>
  );
};

export default Home;
