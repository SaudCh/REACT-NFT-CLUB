import React from "react";
import "./video.css";
import ReactPlayer from "react-player";
import Videos from "../Videos/explained.mp4";
import { Link } from "react-router-dom";

function Video() {
  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="col-4 video-section p-0">
          <Link to={"https://www.youtube.com/watch?v=bEXAhPZad8k"}>
            <ReactPlayer
              // style={{ width: "100%", height: "700" }}
              url={Videos}
              playing={true}
              loop={true}
              // controls={true}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Video;
