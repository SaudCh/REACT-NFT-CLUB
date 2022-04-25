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
      <div className="mt-5 mt-md-0 col-12 col-md-6 d-flex justify-content-center flex-column align-items-center">
        <h2 className="footer-heading">CCGBTCONE NFT CLUB</h2>
        <p className="text-white ps-2">
          © 2022 CCGBTCONE NFT CLUB. All rights reserved
        </p>
      </div>
      <div className="mt-5 mt-md-0 col-12 col-md-3 text-white d-flex justify-content-center flex-column align-items-center align-items-md-start">
        <h3>Useful Links</h3>
        <p>
          <a href="#home">Home</a>
        </p>
        <p>
          <a href="#about">About</a>
        </p>
        <p>
          <a href="#faq">FAQ</a>
        </p>
      </div>
      <div className="mt-5 mt-md-0 col-12 col-md-3 text-white d-flex justify-content-center flex-column align-items-center align-items-md-start">
        <h3>Socials</h3>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/CCGBTCONE"
          >
            <FontAwesomeIcon
              className="me-md-2"
              icon={faTwitter}
              color="white"
            />{" "}
            Twitter
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/invite/ccgbtcone"
          >
            <FontAwesomeIcon
              className="me-md-2"
              icon={faDiscord}
              color="white"
            />{" "}
            Discord
          </a>
        </p>
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@coin_and_peace/history-of-vintage-nfts-in-japan-the-almost-forgotten-part-of-nft-history-5f15ce50a828"
          >
            <FontAwesomeIcon
              className=" me-md-2"
              icon={faMedium}
              color="white"
            />{" "}
            Medium
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
