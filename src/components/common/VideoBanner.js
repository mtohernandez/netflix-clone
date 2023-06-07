import React from "react";
import "./VideoBanner.css";

const VideoBanner = ({ videoUrl, posterUrl }) => {
  return (
    <video
      className="video__player"
      src={videoUrl}
      poster={posterUrl}
      autoPlay
    ></video>
  );
};

export default VideoBanner;
