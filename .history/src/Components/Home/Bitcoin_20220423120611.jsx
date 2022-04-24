import React from "react";
import "./bitcoin.css";
import BitcoinImg from "../Images/bitcoin.png";
import Girl from "../Images/anime.png";
import elon from '../Images/elon.png'

function Bitcoin() {
  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="bitcoin-section col-10 p-0">
          <div className="row">
            <div className="col-4">
              <img src={elon} className="elon-img" alt="" />
            </div>
            <div className="col-4 abcs">
              <img src={BitcoinImg} className="bitcoin-img" alt="" />
              <img src={Girl} className="anime-img" alt="" />
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bitcoin;