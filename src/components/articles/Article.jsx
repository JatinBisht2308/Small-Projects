import React from "react";
import ArticleCard from "./ArticleCard";
const Article = () => {
  return (
    <div className="Article">
        <h2>Check our latest article</h2>
        <div className="article_underline"></div>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <button className="viewAll">View all</button>
    </div>
  );
};

export default Article;
