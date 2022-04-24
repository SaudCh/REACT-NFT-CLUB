import React from "react";
import "./header.css";
import Logo from "../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faDiscord,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark header"
      style={{ zIndex: 100, position: "relative" }}
    >
      <div class="container-fluid" style={{ backgroundColor: "black" }}>
        <Link class="navbar-brand ms-0 ms-md-4" to="/">
          <img src={Logo} className="logo" alt="" />
        </Link>
        <div className="header-divider d-none d-md-block "></div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/CCGBTCONE"
        >
          <FontAwesomeIcon
            className="d-none d-md-block ms-md-4"
            icon={faTwitter}
            color="white"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.com/invite/ccgbtcone"
        >
          <FontAwesomeIcon
            className="d-none d-md-block ms-md-2"
            icon={faDiscord}
            color="white"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/CCGBTCONE"
        >
          <FontAwesomeIcon
            className="d-none d-md-block ms-md-2"
            icon={faMedium}
            color="white"
          />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link text-white me-3"
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white me-3" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white me-3"
                href="#faq"
                tabindex="-1"
                aria-disabled="true"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://opensea.io/collection/emblem-vault?search%5BsortAscending%5D=true&search%5BsortBy%5D=PRICE&search%5BstringTraits%5D%5B0%5D%5Bname%5D=Oasis%20Mining&search%5BstringTraits%5D%5B0%5D%5Bvalues%5D%5B0%5D=CCGBTCONE"
                className="btn header-button me-md-5"
              >
                Buy on Opensea
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
