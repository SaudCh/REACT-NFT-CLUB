import React from "react";
import Header from "../Shared/Header";
import "./video.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="body container-fluid">
        <section className="row">
          <div className="col-4 video-section"></div>
        </section>
      </div>
    </div>
  );
}

export default Home;
