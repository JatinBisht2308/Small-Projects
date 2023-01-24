import React from "react";
import "./services.css";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <div className="Service">
      <h2>Our Services</h2>
      <div className="service_underline"></div>
      <p className="service_desc">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="cards">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
