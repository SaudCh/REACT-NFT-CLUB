import React from "react";
import Header from "../Shared/Header";
import AboutUs from "./AboutUs";
import AuthenticDesign from "./authentic-design";
import Bitcoin from "./Bitcoin";
import Crousal from "./Crousal";
import EpicStory from "./EpicStory";
import Video from "./Video";

function Home() {
  return (
    <div>
      <Header />
      <div className="body container-fluid pb-5">
        <Video />
        <Bitcoin />
        <Crousal />
        <AboutUs />
        <EpicStory />
        <AuthenticDesign />
      </div>
    </div>
  );
}

export default Home;
