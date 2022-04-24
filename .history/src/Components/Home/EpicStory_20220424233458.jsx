import React from "react";
import Image from "../Images/epic-story-back.png";

function EpicStory() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-1"></div>

          <div className="col-12 col-md-5 d-flex flex-column text-white justify-content-center">
            <p className="p-0 m-0" style={{ fontSize: 15 }}>
              EPIC STORY
            </p>
            <h2 style={{ fontSize: 50, fontFamily: "chronicalight" }}>
              Elon Musk’s
              <br />
              involvement
            </h2>
            <p className="text-desc">
              The first time it was used by Elon was in October 2018 in a tweet
              exchange with @Grimezsz. His account was even locked by Twitter,
              thinking hackers got control of his account.
              <br />
              <br />
              Back then his tweet was retweeted by many known people in the
              cryptocurrency space as @cz_binance @DoveyWan and many others. It
              was used in May 2020 in an exchange with @bitcoin twitter account
              and it played a major role on kickstarting the bitcoin run we saw
              back then.
              <br />
              <br />
              On February 20th 2021, Elon used CCGBTCONE as his PFP on twitter
              along with laser eyes, which seems to have contributed a lot to
              the laser eyes trend that we saw last year.
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

export default EpicStory;
