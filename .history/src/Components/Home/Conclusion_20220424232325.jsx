import React from "react";
import Image from "../Images/conclusion-back.png";

function Conclusion() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-1"></div>

          <div className="col-12 col-md-5 d-flex flex-column text-white justify-content-center">
            <p className="p-0 m-0" style={{ fontSize: 15 }}>
              CONCLUSION
            </p>
            <h2 style={{ fontSize: 50 }}>
              What does
              <br />
              it all mean?
            </h2>
            <p className="text-desc">
              While we can only speculate if Elon Musk owns one or not, there
              will be only 300 of these available at any point in time. The fact
              that this NFT was involved in bitcoin related posts and was minted
              on the bitcoin blockchain through the Counterparty protocol can’t
              be nothing, right?
              <br />
              <br />
              Elon’s stand on NFT's in 2021 when they became mainstream is
              unclear, however, on March 15th 2021, he made this post with a
              cool art that was not minted on the blockchain by him.
              <br />
              <br />
              Even though he didn't explicitly disclose that he holds one, he
              did use CCGBTCONE in many posts and as his PFP, clearly proving he
              likes it. He could proudly own one, and in case he doesn't, we can
              always get him one.
              <br />
              <br />
              We all know Elon Musk posts cryptic tweets all the time, so do we
              believe in coincidences in this case?
            </p>
          </div>
          <div className="col-12 col-md-5">
            <img src={Image} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Conclusion;
