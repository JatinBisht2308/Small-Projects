import React from "react";
import "./services.css";
import ServiceCard from "./ServiceCard";
import { cardData } from "./dataObjects";
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import Card4 from '../../assets/card4.png'
import Card5 from '../../assets/card5.png'
import Card6 from '../../assets/card6.png'
const Services = () => {
  console.log(cardData[0].img);
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
        <ServiceCard
          title={cardData[0].title}
          imgSrc={Card1}
          desc={cardData[0].desc}
        />
        <ServiceCard
          title={cardData[1].title}
          imgSrc={Card2}
          desc={cardData[1].desc}
        />
        <ServiceCard
          title={cardData[2].title}
          imgSrc={Card3}
          desc={cardData[2].desc}
        />
     </div>
     <div className="cards">   
        <ServiceCard
          title={cardData[3].title}
          imgSrc={Card4}
          desc={cardData[3].desc}
        />
        <ServiceCard
          title={cardData[4].title}
          imgSrc={Card5}
          desc={cardData[4].desc}
        />
        <ServiceCard
          title={cardData[5].title}
          imgSrc={Card6}
          desc={cardData[5].desc}
        />
      </div>
      <button className="service_lm">Learn more</button>
    </div>
  );
};

export default Services;
