import React from "react";
import "./header.css";
import Logo from "../Images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark header">
      <div class="container-fluid">
        <a class="navbar-brand" href="#home">
          <img src={Logo} style={{ width: 300, height: 100 }} alt="" />
        </a>
        <a href="">
          <FontAwesomeIcon style={{ color: "white" }} icon={faTwitter} />
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
              <a class="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#faq"
                tabindex="-1"
                aria-disabled="true"
              >
                FAQ
              </a>
            </li>
            <li>
              <button className="btn header-button">Buy on Opensea</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
