import React from "react";
import "./healthcare.css";
import healthcareVector from "../../assets/healthcare.png";
const Healthcare = () => {
  return (
    <div className="Healthcare">
      <div className="left_healthcare">
        <img src={healthcareVector} alt="" />
      </div>
      <div className="right_healthcare">
        <h2>Leading healthcare providers</h2>
        <div className="healthcare_underline"></div>
        <small>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </small>
        <button>Learn more</button>
      </div>
    </div>
  );
};

export default Healthcare;
