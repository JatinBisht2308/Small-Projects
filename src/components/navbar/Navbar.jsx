import { React, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import darkMode from "../../assets/dark_mode.png";
import lightMode from "../../assets/light_mode.png";
const Navbar = () => {
  const [mode, setMode] = useState(darkMode);
  const changeMode = () => {
    if (mode === darkMode) {
      document.body.className = "dark-mode";
      localStorage.setItem("mode", "dark");
      setMode(lightMode);
      window.location.reload(true);
    } else {
      document.body.className = "light-mode";
      localStorage.setItem("mode", "light");
      setMode(darkMode);
      window.location.reload(true);
    }
  };
  // save this in local storage so that it will be saved even after refresh
  useEffect(() => {
    if (localStorage.getItem("mode") === "dark") {
      document.body.className = "dark-mode";
      setMode(lightMode);
    } else {
      document.body.className = "light-mode";
      setMode(darkMode);
    }
  }, []);
  return (
    <div className="nav">
      <div className="left-nav">
        <img src={Logo} alt="logo" />
      </div>
      <div className="right-nav">
        <ul className="nav-list">
          <AnchorLink href="#About" style={{ textDecoration: "none" }}>
            <li className="nav-item one">Home</li>
          </AnchorLink>
          <AnchorLink href="#Services" style={{ textDecoration: "none" }}>
            <li className="nav-item two">Our Services</li>
          </AnchorLink>
          <AnchorLink
            offset="100"
            href="#App"
            style={{ textDecoration: "none" }}
          >
            <li className="nav-item three">Apps</li>
          </AnchorLink>
          <AnchorLink
            offset="100"
            href="#Testimonial"
            style={{ textDecoration: "none" }}
          >
            <li className="nav-item four">Testimonial</li>
          </AnchorLink>
          <AnchorLink href="#Article" style={{ textDecoration: "none" }}>
            <li className="nav-item five">Articles</li>
          </AnchorLink>
        </ul>
        <button className="mode_changer" variant="contained">
          <img src={mode} alt="" onClick={changeMode} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
