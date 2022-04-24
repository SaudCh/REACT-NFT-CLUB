import React from "react";
import "./bitcoin.css";
import BitcoinImg from "../Images/bitcoin.png";
import Girl from "../Images/anime.png";
import elon from "../Images/elon.png";
import post1 from "../Images/post1.png";

function Bitcoin() {
  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="bitcoin-section col-10 p-0">
          <div className="row">
            <div className="col-10 col-md-4 elon-post1-container">
              <img src={elon} className="elon-img" alt="" />
              <img src={post1} className="post1-img" alt="" />
            </div>
            <div className="col-10 col-md-4 abcs">
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