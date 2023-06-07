import React from "react";
import "./AmbientBackground.css";

const AmbientBackground = ({ videoUrl, posterUrl }) => {
  return (
    <div className="video__container">
      <div className="video__element">
        <video
          className="video__player"
          src={videoUrl}
          poster={posterUrl}
          autoPlay
        ></video>
        {/* <div className="video__overlay" /> */}
      </div>
    </div>
  );
};

export default AmbientBackground;
