import React from "react";
import "./video.css";
import ReactPlayer from "react-player";
import Videos from "../Videos/explained.mp4";

function Video() {
  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="col-4 video-section p-0">
          <ReactPlayer className="video" url={Videos} playing={true} />
        </div>
      </section>
    </div>
  );
}

export default Video;
