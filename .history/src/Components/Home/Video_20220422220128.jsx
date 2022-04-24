import React from "react";
import "./video.css";
import ReactPlayer from "react-player";
import Videos from "../Videos/explained.mp4";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Video() {
  const PlayButton = () => {
    return <div className="bg-primary">paly</div>;
  };

  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="col-4 video-section p-0">
          {/* https://www.youtube.com/watch?v=bEXAhPZad8k */}
          <button className="play-button">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <ReactPlayer
            style={{ width: "100%", height: "700" }}
            url={Videos}
            playing={true}
            loop={true}
            controls={true}
          />
        </div>
      </section>
    </div>
  );
}

export default Video;
