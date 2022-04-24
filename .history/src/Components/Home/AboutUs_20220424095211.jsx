import React from "react";
import Image from "../Images/about-us-back.png";

function AboutUs() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-12 col-md-5">
            <img src={Image} alt="" style={{ height: "70vh" }} />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column text-white justify-content-center">
            <h6>ABOUT US</h6>
            <h2>
              Welcome to <br />
              CCGBTCONE <br />
              NFT Club
            </h2>
            <p>
              Welcome to CCGBTCONE NFT Club. CCGBTCONE is a vintage collectible
              minted July 26th 2017 on the Bitcoin blockchain through the
              Counterparty protocol. It's part of the Oasis Mining collection
              which consists of 66 different cards from different artists.
              <br />
              <br />
              It's one of the first Waifu NFT's minted on the blockchain and was
              used in multiple occasions by Elon Musk in his Twitter posts and
              even as his PFP.
            </p>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
