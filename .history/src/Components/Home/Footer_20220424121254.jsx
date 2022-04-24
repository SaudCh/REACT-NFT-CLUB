import React from "react";
import "./css/footer.css";

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
      </div>
    </footer>
  );
}

export default Footer;
