import React from "react";
import "./MediaLogo.css";

const MediaLogo = ({ imageSrc }) => {
  return (
    <div className="mediaLogo__container">
      <img
        src={imageSrc}
        style={{
          filter:
            "invert(0%) sepia(93%) saturate(0%) hue-rotate(234deg) brightness(96%) contrast(107%)",
        }}
        alt="logo"
      />
    </div>
  );
};

export default MediaLogo;
