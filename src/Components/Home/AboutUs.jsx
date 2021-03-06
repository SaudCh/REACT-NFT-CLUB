import React from "react";
import Image from "../Images/about-us-back.png";

function AboutUs() {
  return (
    <div className="">
      <div className="container-fluid" style={{ marginTop: 100 }} id="about">
        <div className="row align-items-center">
          <div className="col-1"></div>
          <div className="col-12 col-md-5">
            <img src={Image} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column text-white justify-content-center">
            <p
              className="p-0 m-0"
              style={{ fontSize: 15, fontFamily: "chronicalight" }}
            >
              ABOUT US
            </p>
            <h2 style={{ fontSize: 50 }}>
              Welcome to <br />
              CCGBTCONE <br />
              NFT Club
            </h2>
            <p className="text-desc">
              Welcome to CCGBTCONE NFT Club. CCGBTCONE is a vintage collectible
              minted July 26th 2017 on the Bitcoin blockchain through the
              Counterparty protocol. It's part of the Oasis Mining collection
              which consists of 66 different cards from different artists.
              <br />
              <div className="my-2"></div>

              It's one of the first Waifu NFT's minted on the blockchain and was
              used in multiple occasions by Elon Musk in his Twitter posts and
              even as his PFP.
            </p>
            <a
              style={{ width: 200 }}
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/invite/ccgbtcone"
              className="header-button p-2 me-md-5 text-dark text-center"
            >
              Join our discord
            </a>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
