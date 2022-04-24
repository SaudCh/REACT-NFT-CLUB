import React from "react";
import "./css/bitcoin.css";
import BitcoinImg from "../Images/bitcoin-anime.png";
import elon from "../Images/elon.png";
import post1 from "../Images/post1.png";

function Bitcoin() {
  return (
    <div
      className="container-fluid"
      style={{ zIndex: 2, position: "relative" }}
    >
      <section
        className="justify-content-center pt-5"
        style={{ margin: "0 auto" }}
      >
        <div className="col-12 col-md-10 bitcoin-section p-0 m-auto">
          <div className="row">
            <div className="col-12 col-md-4 elon-post1-container">
              <img src={elon} className="elon-img" alt="" />
              <img src={post1} className="post1-img" alt="" />
            </div>
            <div className="col-12 col-md-4 bitcoin-container bitcoin-flex">
              <img src={BitcoinImg} className="bitcoin-img" alt="" />
            </div>
            <div className="col-12 col-md-4 bitcoin-flex">
              <img src={post1} className="post2-img" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bitcoin;
