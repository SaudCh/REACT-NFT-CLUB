import React from "react";
import "./css/news.css";
import forbes from "../Images/forbes.svg";
import coinDesk from "../Images/coindesk.svg";
import yahoo from "../Images/yahoo.svg";
import market from "../Images/market.svg";
import utoday from "../Images/utoday.svg";
import cnew1 from "../Images/cnews1.svg";
import cnews2 from "../Images/cnews2.svg";

function News() {
  return (
    <div className="news-container m-0 p-0 py-3">
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
          <div className="row">
            <div className="col-2"></div>
            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={coinDesk} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={forbes} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={yahoo} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={market} alt="" />
              </a>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row mt-4">
            <div className="col-2"></div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={utoday} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={cnew1} alt="" />
              </a>
            </div>

            <div className="col-2">
              <a target="_blank" rel="noreferrer" href="#h">
                <img src={cnew2} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
