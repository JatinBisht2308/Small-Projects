import React from "react";
import "./testimonial.css";
import Customer from "../../assets/testimonial.png";
import Vector1 from "../../assets/grey_testi.png";
import Vector2 from "../../assets/blue_testi.png";
const testimonial_card = (props) => {
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
            <small className="customer_name">{props.name[props.index]}</small>
            <small className="customer_company">{props.company[props.index]}</small>
          </div>
        </div>
        <div className="testi_right">
          <p className="customer_review">
            {props.feedback[props.index]}
          </p>
        </div>
      </div>
      <img src={Vector2} alt="" className="testi_vector2" />
    </div>
  );
};

export default testimonial_card;
