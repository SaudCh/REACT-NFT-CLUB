import React from "react";
import "./css/video.css";
import ReactPlayer from "react-player";
import Videos from "../Videos/explained.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function Video() {
  return (
    <div className="container-fluid">
      <section className="row justify-content-center pt-5">
        <div className="video-section p-0">
          <button className="play-button">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/watch?v=bEXAhPZad8k"
            >
              <FontAwesomeIcon color="white" fontSize={20} icon={faPlay} />
            </a>
          </button>

          <ReactPlayer
            className="video"
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
