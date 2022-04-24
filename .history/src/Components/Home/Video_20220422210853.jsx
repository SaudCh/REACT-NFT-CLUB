import React from "react";
import "./video.css";
import ReactPlayer from "react-player";

function Video() {
  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="col-4 video-section">
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </div>
      </section>
    </div>
  );
}

export default Video;
