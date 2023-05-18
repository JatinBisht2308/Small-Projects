import {React, useState} from "react";
import "./testimonial.css";
import Card from "./testimonial_card";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Testimonial = () => {
  const [isHighlight,setIsHighlight] = useState([false,true,false,false]);
  const [dataIndex,setDataIndex] = useState(0);
  const names = ["Edward Newgate","Tom Holland","Lionel Messi","Anish Thakur"];
  const companies = ["Founder Circle","Marvel Studios","Barcelona","Pied Piper"];
  const feedbacks = [
    "1)- Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    "2)- Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    "3)- Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    "4)- Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
  ]
  const leftTesti = () =>{
    for(let i=0;i<isHighlight.length;i++){
      if(isHighlight[i]===true)
      {
        if(i===0)
        {
          setDataIndex(3);
          setIsHighlight([false,false,false,true]);
        }
        else{
          isHighlight[i] = false;
          isHighlight[i-1] = true;
          setDataIndex(i-1);
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
          setDataIndex(0);
          setIsHighlight([true,false,false,false]);
        }
        else{
          isHighlight[i] = false;
          isHighlight[i+1] = true;
          setDataIndex(i+1);
          setIsHighlight([...isHighlight]);
        }
        break;
      }
    }
  }
  return (
    <div className="Testimonial">
      <Card name={names} company={companies} feedback={feedbacks} index={dataIndex} />
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
