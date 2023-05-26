import React from "react";
import "./mobileApp.css";
import MobileAppImage from '../../assets/mobileApp.png'
const MobileApp = () => {
  return (
    <div className="mobileApp" id="App">
      <div className="left_ma">
        <h2>Download our mobile apps</h2>
        <div className="mobileApp_underline"></div>
        <small>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </small>
        <button>Download&nbsp;&nbsp; &darr;</button>
      </div>
      <div className="right_ma">
        <img src={MobileAppImage} alt="" />
      </div>
    </div>
  );
};

export default MobileApp;
