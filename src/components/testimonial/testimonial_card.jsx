import React from "react";
import "./testimonial.css";
import Customer from "../../assets/testimonial.png";
import Vector1 from "../../assets/grey_testi.png";
import Vector2 from "../../assets/blue_testi.png";
const testimonial_card = () => {
  return (
    <div className="testimonial_container">
      <img src={Vector1} alt="" className="testi_vector1" />
      <div className="testi_container_upper">
        <h2 className="testi_heading">What our customer are saying</h2>
        <div className="testi_underline"></div>
      </div>
      <div className="testi_container_bottom">
        <div className="testi_left">
          <img src={Customer} alt="" />
          <div className="customer_info">
            <small className="customer_name">Edward Newgate</small>
            <small className="customer_company">Founder Circle</small>
          </div>
        </div>
        <div className="testi_right">
          <p className="customer_review">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </p>
        </div>
      </div>
      <img src={Vector2} alt="" className="testi_vector2" />
    </div>
  );
};

export default testimonial_card;
