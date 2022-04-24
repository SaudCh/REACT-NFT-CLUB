import React from "react";
import Image from "../Images/about-us-back.png";

function AboutUs() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <img src={Image} alt="" style={{ height: "80vh"}} />
          </div>
          <div className="col-5"></div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
