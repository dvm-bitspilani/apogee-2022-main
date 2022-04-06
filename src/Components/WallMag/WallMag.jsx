import React from "react";
import "./WallMag.css";
import WallMagArticle from "./WallMagArticle";

export default function MyComponent() {
  const articles = require("./articles.json");

  return (
    <div className="root-wallmag">
      <div className="hpc-heading">
        <h1>WallMag Apogee 2022</h1>
      </div>
      <div className="c-section">
        {articles.map((article, idx) => {
          return (
            <WallMagArticle
              depName={article.depName}
              coord={article.coord}
              depName2={article.depName2}
              article={article.article}
              imgLink={article.imgLink}
            />
          );
        })}
      </div>
    </div>
  );
}
