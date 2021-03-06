import React from "react";
import Image from "../Images/authentic-design-back.png";

function AuthenticDesign() {
  return (
    <div>
      <div className="container-fluid" style={{ marginTop: 100 }}>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-12 col-md-5 align-items-center">
            <img src={Image} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column text-white justify-content-center">
            <p
              className="p-0 m-0"
              style={{ fontSize: 15, fontFamily: "chronicalight" }}
            >
              AUTHENTIC DESIGN
            </p>
            <h2 className="heading-sec">
              Who are the <br />
              creators of <br />
              CCGBTCONE?
            </h2>
            <p className="text-desc">
              The Japanese people behind the crypto currency girls series, which
              have turned some of the world's largest cryptocurrencies into
              anime characters, are also the creators of CCGBTCONE.
              <br />
              <div className="my-2"></div>A total of three cards from their
              series, were added to the Oasis Mining curated collection back in
              2017."
            </p>
            <a
              style={{ width: 200 }}
              target="_blank"
              rel="noreferrer"
              href="https://discord.com/invite/ccgbtcone"
              className="header-button p-2 me-md-5 text-dark text-center"
            >
              Check them out!
            </a>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticDesign;
