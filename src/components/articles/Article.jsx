import React from "react";
import ArticleCard from "./ArticleCard";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
const Article = () => {
  const articleHeading = [
    {
      heading: "Disease detection, check up in the laboratory",
      para: "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
    {
      heading: "Herbal medicene that are safe for consumption",
      para: "Herbal medicene  is very widely used at this time because of its very good for your health",
    },
    {
      heading: "Natural care for healthy facial skin",
      para: "A healthy lifestyle should start from now and also for your skin health.There are some...",
    },
  ];
  return (
    <div className="Article">
      <h2>Check our latest article</h2>
      <div className="article_underline"></div>
      <div className="articleCards">
        <ArticleCard
          image={Blog1}
          heading={articleHeading[0].heading}
          para={articleHeading[0].para}
        />
        <ArticleCard
          image={Blog2}
          heading={articleHeading[1].heading}
          para={articleHeading[1].para}
        />
        <ArticleCard
          image={Blog3}
          heading={articleHeading[2].heading}
          para={articleHeading[2].para}
        />
      </div>
      <button className="viewAll">View all</button>
    </div>
  );
};

export default Article;
