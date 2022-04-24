import React from "react";
import "./video.css";
import ReactPlayer from "react-player";
import Videos from "../Videos/explained.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Video() {
  let navigate = useNavigate();

  const youtubeLink = () => {
    // navigate("https://www.youtube.com/watch?v=bEXAhPZad8k", { replace: true });
  };

  return (
    <div>
      <section className="row justify-content-center pt-5">
        <div className="col-4 video-section p-0">
          <button className="play-button" onClick={() => youtubeLink()}>
            <a href="https://www.youtube.com/watch?v=bEXAhPZad8k">
              <FontAwesomeIcon color="white" fontSize={20} icon={faPlay} />
            </a>
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
