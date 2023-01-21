import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
const Navbar = () => {
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
      </div>
      </div>
  )
}

export default Navbar