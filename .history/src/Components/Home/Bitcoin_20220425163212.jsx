import React from "react";
import "./css/bitcoin.css";
import BitcoinImg from "../Images/bitcoin-anime.png";
import elon from "../Images/elon.png";
import post1 from "../Images/post1.png";
import post2 from "../Images/post-2.png";

function Bitcoin() {
  return (
    <div
      className=""
      style={{ zIndex: 2, position: "relative", marginTop: 50 }}
    >
      <section className=" pt-5">

        <div className="col-12 col-md-10 bitcoin-section p-0 m-auto">

          <div className="row bt-sec">

            <div className="col-12 col-md-4 border elon-post1-container">
              <img src={elon} className="elon-img" alt="" />
              <img src={post1} className="post1-img d-none " alt="" />
            </div>


            {/* <div
              className="col-12 bitcoin-flex col-md-4 d-md-none"
              style={{ marginTop: 150 }}
            >
              <img src={post1} className="post2-img" alt="" />
            </div> */}


            <div className="col-12 col-md-4 bitcoin-container bitcoin-flex">
              <img src={BitcoinImg} className="bitcoin-img" alt="" />
            </div>

            <div className="col-12 col-md-4 bitcoin-flex m-auto">
              <img src={post2} className="post2-img" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bitcoin;
