import React from "react";
import "./VideoBanner.css";

const VideoBanner = (props) => {
  return (
    <video
      ref={props.videoRef}
      className="video__player"
      src={props.videoUrl}
      poster={props.posterUrl}
      onEnded={props.handleVideoEnded}
      autoPlay={props.autoPlay}
    ></video>
  );
};

export default VideoBanner;