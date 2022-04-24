import React from "react";
import Header from "../Shared/Header";
import AboutUs from "./AboutUs";
import AuthenticDesign from "./authentic-design";
import Bitcoin from "./Bitcoin";
import Conclusion from "./Conclusion";
import Crousal from "./Crousal";
import EpicStory from "./EpicStory";
import News from "./News";
import Video from "./Video";

function Home() {
  return (
    <div>
      <Header />
      <div className="body  pb-5">
        <Video />
        <Bitcoin />
        <Crousal />
        <AboutUs />
        <EpicStory />
        <AuthenticDesign />
        <Conclusion />
        <News />
      </div>
    </div>
  );
}

export default Home;
