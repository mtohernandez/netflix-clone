import React from "react";
import "./VideoBanner.css";

const VideoBanner = ({ videoUrl, posterUrl, videoRef, handleVideoEnded }) => {
  return (
    <video
      ref={videoRef}
      className="video__player"
      src={videoUrl}
      poster={posterUrl}
      autoPlay
      onEnded={handleVideoEnded}
    ></video>
  );
};

export default VideoBanner;