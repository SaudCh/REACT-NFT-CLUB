import React from "react";
import Header from "../Shared/Header";
import "./video.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="body container-fluid">
        <section className="row align-items-center">
          <div className="col-4 border video-section"></div>
        </section>
      </div>
    </div>
  );
}

export default Home;
