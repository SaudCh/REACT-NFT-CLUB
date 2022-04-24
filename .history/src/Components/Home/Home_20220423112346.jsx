import React from "react";
import Header from "../Shared/Header";
import Bitcoin from "./Bitcoin";
import Video from "./Video";

function Home() {
  return (
    <div>
      <Header />
      <div className="body container-fluid">
        <Video />
        <Bitcoin />
      </div>
    </div>
  );
}

export default Home;
