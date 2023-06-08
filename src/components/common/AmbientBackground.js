import React from "react";
import "./AmbientBackground.css";

const AmbientBackground = ({
  videoUrl,
  posterUrl,
  videoRef,
  handleVideoEnded,
}) => {
  return (
    <div className="video__container">
      <div className="video__element">
        <video
          className="video__player"
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          autoPlay
          onEnded={handleVideoEnded}
        ></video>
        {/* <div className="video__overlay" /> */}
      </div>
    </div>
  );
};

export default AmbientBackground;
