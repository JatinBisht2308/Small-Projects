import React from "react";
import "./testimonial.css";
import Card from "./testimonial_card";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div className="Testimonial">
      <Card />
      <div className="bottom_testi">
        <button className="left_slide">
          <BsArrowLeft />
        </button>
        <div className="testi_dots">
          <div className="dot highlight"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <button className="right_slide">
          {" "}
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
