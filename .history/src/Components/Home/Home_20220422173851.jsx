import React from "react";
import Header from "../Shared/Header";
import Video from "./Video";

function Home() {
  return (
    <div>
      <Header />
      <div className="body container-fluid">
        <Video />
      </div>
    </div>
  );
}

export default Home;
