// import React from "react";
// import "./video.css";
// import VideoPlayer from "react-video-js-player";
// import eVideo from "../Videos/explained.mp4";
// import Img from "../Images/poster.png";

// function Video() {
//   const videoSrc = eVideo;
//   const poster = Img;
//   return (
//     <div>
//       <section className="row justify-content-center pt-5">
//         <div className="col-4 video-section">
//           <VideoPlayer
//             //controls={true}
//             src="https://www.ccgbtcone.com/_nuxt/videos/preview.d60f05e.mp4"
//             poster="https://www.ccgbtcone.com/_nuxt/img/poster.e65aace.png"
//             width="720"
//             height="420"
//             // onReady={this.onPlayerReady.bind(this)}
//             // onPlay={this.onVideoPlay.bind(this)}
//             // onPause={this.onVideoPause.bind(this)}
//             // onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
//             // onSeeking={this.onVideoSeeking.bind(this)}
//             // onSeeked={this.onVideoSeeked.bind(this)}
//             // onEnd={this.onVideoEnd.bind(this)}
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Video;



import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
 
class VideoApp extends Component {
    player = {}
    state = {
        video: {
            src: "http://www.example.com/path/to/video.mp4",
            poster: "http://www.example.com/path/to/video_poster.jpg"
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }
 
    render() {
        return (
            <div>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720"
                    height="420"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
            </div>
        );
    }
}
export default VideoApp;