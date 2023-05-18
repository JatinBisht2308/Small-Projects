import {React, useState} from "react";
import "./testimonial.css";
import Card from "./testimonial_card";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonial = () => {
  const [isHighlight,setIsHighlight] = useState([false,true,false,false]);
  const leftTesti = () =>{
    for(let i=0;i<isHighlight.length;i++){
      if(isHighlight[i]===true)
      {
        if(i===0)
        {
          setIsHighlight([false,false,false,true]);
        }
        else{
          isHighlight[i] = false;
          isHighlight[i-1] = true;
          setIsHighlight([...isHighlight]);
        }
        break;
      }
      console.log(typeof(isHighlight));
    }
  }
  const rightTesti = () =>{
    for(let i=0;i<isHighlight.length;i++){
      if(isHighlight[i]===true)
      {
        if(i===isHighlight.length-1)
        {
          setIsHighlight([true,false,false,false]);
        }
        else{
          isHighlight[i] = false;
          isHighlight[i+1] = true;
          setIsHighlight([...isHighlight]);
        }
        break;
      }
    }
  }
  return (
    <div className="Testimonial">
      <Card />
      <div className="bottom_testi">
        <button className="left_slide">
          <BsArrowLeft onClick={leftTesti} />
        </button>
        <div className="testi_dots">
          <div className={isHighlight[0] ? 'dot highlight' : 'dot'}></div>
          <div className={isHighlight[1] ? 'dot highlight' : 'dot'}></div>
          <div className={isHighlight[2] ? 'dot highlight' : 'dot'}></div>
          <div className={isHighlight[3] ? 'dot highlight' : 'dot'}></div>
        </div>
        <button className="right_slide">
          {" "}
          <BsArrowRight onClick={rightTesti} />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
