import React from "react";
import "./css/footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDiscord,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="row">
      <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-center">
        <h2 className="footer-heading">CCGBTCONE NFT CLUB</h2>
        <p className="text-white">
          © 2022 CCGBTCONE NFT CLUB. All rights reserved
        </p>
      </div>
      <div className="col-12 col-md-3 text-white d-flex justify-content-center flex-column ">
        <h3>Useful Links</h3>
        <p>Home</p>
        <p>About</p>
        <p>Faq</p>
      </div>
      <div className="col-12 col-md-3 text-white d-flex justify-content-center flex-column ">
        <h3>Socials</h3>
        <p>
          <FontAwesomeIcon className="me-md-2" icon={faTwitter} color="white" /> Twitter
        </p>
        <p>
          <FontAwesomeIcon className="me-md-2" icon={faDiscord} color="white" /> Dicord
        </p>
        <p>
          <FontAwesomeIcon className=" me-md-2" icon={faMedium} color="white" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
