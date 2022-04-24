import React from "react";
import "./css/news.css";
import Image from "../Images/news-back.png";

function News() {
  return (
    <div className="news-container m-0 p-0">
      <div className="row">
        <div className="text-center">
          <h1 className="text-white text-center news-heading">
            <span className="heading-gredient">CCGBTCONE</span> IN THE NEWS
          </h1>
          <p className="text-white text-center">
            CCGBTCONE has been featured in well-known online publications due to
            its historical impact and significance. These articles clearly{" "}
            <br />
            depict the great potential of this NFT collection as a historical
            piece
            <br />
            as well as Elon’s interests in it over the years.
          </p>
          <img src={Image} style={{ width: "70%" }} alt="" />
        </div>
      </div>
    </div>
  );
}

export default News;
