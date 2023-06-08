import React from "react";
import "./AmbientBackground.css";

const AmbientBackground = (props) => {
  return (
    <div className="video__container">
      <div className="video__element">
        <video
          className="video__player"
          ref={props.videoRef}
          src={props.videoUrl}
          poster={props.posterUrl}
          autoPlay
          onEnded={props.handleVideoEnded}
        ></video>
        {/* <div className="video__overlay" /> */}
      </div>
    </div>
  );
};

export default AmbientBackground;
