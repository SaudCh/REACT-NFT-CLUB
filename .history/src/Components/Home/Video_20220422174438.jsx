import React from "react";

import "./video.css";
import VideoPlayer from "react-video-js-player";
import eVideo from "../Videos/explained.mp4";
import Img from "../Images/poster.png";

function Video() {
  const videoSrc = eVideo;
  const poster = Img;
  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="col-4 video-section">
          <VideoPlayer src={videoSrc} poster={poster} width="100" />
        </div>
      </section>
    </div>
  );
}

export default Video;
