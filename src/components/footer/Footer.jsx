import React from "react";
import './footer.css';
const Footer = () => {
  return (
    <div className="Footer">
     <div className="Footer__container">
     <div className="left-footer">
        <h2>Trafalgar</h2>
        <small>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </small>
        <small>©Trafalgar PTY LTD 2020. All rights reserved.</small>
      </div>
      <div className="right-footer">
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Testimonials</li>
            <li>Find a doctor</li>
            <li>Apps</li>
          </ul>
        </div>
        <div className="region">
          <h3>Region</h3>
          <ul>
            <li>Indonesia</li>
            <li>Singapore</li>
            <li>Hongkong</li>
            <li>Canada</li>
          </ul>
        </div>
        <div className="help">
          <h3>Help</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Support</li>
            <li>Instructions</li>
            <li>How it works</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
