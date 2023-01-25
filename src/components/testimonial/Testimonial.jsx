import React from "react";
import "./testimonial.css";
import Customer from "../../assets/testimonial.png";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <div className="testimonial_container">
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
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
