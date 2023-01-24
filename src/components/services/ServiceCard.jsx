import React from 'react'
import './services.css'


const ServiceCard = (props)=> {
    console.log(props.imgSrc);
  return (
    <div className='serviceCard'>
        <img src={props.imgSrc} alt="" />
        <h3>{props.title}</h3>
        <small>{props.desc}</small>
    </div>
  )
}

export default ServiceCard