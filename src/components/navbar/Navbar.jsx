import {React,useState} from "react";
import "./navbar.css";
import Logo from "../../assets/logo.png";
import darkMode from "../../assets/dark_mode.png";
import lightMode from "../../assets/light_mode.png";
const Navbar = () => {
  const [mode,setMode] = useState(darkMode);
  const changeMode = () =>{
    if(mode === darkMode){
      setMode(lightMode);
    }else{
      setMode(darkMode);
    }
  }
  return (
    <div className="nav">
      <div className="left-nav">
        <img src={Logo} alt="logo" />
      </div>
      <div className="right-nav">
        <ul className="nav-list">
          <li className="nav-item one">Home</li>
          <li className="nav-item two">Find a doctor</li>
          <li className="nav-item three">Apps</li>
          <li className="nav-item four">Testimonial</li>
          <li className="nav-item five">About us</li>
        </ul>
        <button className="mode_changer" variant="contained">
          <img src={mode} alt="" onClick={changeMode} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
