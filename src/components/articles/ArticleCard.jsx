import React from "react";
import "./article.css";
import { BsArrowRight } from "react-icons/bs";
const ArticleCard = (props) => {
  return (
    <div className="ArticleCard">
      <div className="article_image">
        <img src={props.image} alt="" />
      </div>
      <div className="article_content">
        <h4>{props.heading}</h4>
        <p>{props.para}</p>
        <button>
          Read more <BsArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
