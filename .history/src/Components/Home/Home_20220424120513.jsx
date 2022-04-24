import React from "react";
import Header from "../Shared/Header";
import AboutUs from "./AboutUs";
import AuthenticDesign from "./authentic-design";
import Bitcoin from "./Bitcoin";
import Conclusion from "./Conclusion";
import Crousal from "./Crousal";
import EpicStory from "./EpicStory";
import Faq from "./Faq";
import Footer from "./Footer";
import News from "./News";
import Video from "./Video";

function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="body">
        <Video />
        <Bitcoin />
        <Crousal />
        <AboutUs />
        <EpicStory />
        <AuthenticDesign />
        <Conclusion />
        <News />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
