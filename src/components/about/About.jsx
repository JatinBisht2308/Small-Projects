import React from 'react'
import Image1  from '../../assets/trafagar-about-image.png'
import BackImg from '../../assets/about-element.png'
import './about.css'
const About = () => {
  return (
    <div className='about' id="About">
      <img src={BackImg} alt="" className='backimg-about' />
        <div className="left-about">
          <h1>Virtual Healthcare for you</h1>
          <p>Trafalgar provides progressive and affordable healthcare, accessible on mobile and online for everyone.</p>
          <button>Consult today</button>
        </div>
        <div className='right-about'>
         <img src={Image1} alt="about-image" />
        </div>
</div>
  )
}

export default About