import React from "react";
import "./bitcoin.css";
import BitcoinImg from "../Images/bitcoin.png";

function Bitcoin() {
  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="bitcoin-section col-10 p-0">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 bg-primary">
              <img src={BitcoinImg} className="bitcoin-img" alt="" />
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bitcoin;
