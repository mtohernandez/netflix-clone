import React from "react";
import BannerContainer from "../styled/Focused/BannerContainer";
import BannerContent from "../styled/Focused/BannerContent";
import BannerDescription from "../styled/Focused/BannerDescription";
import VideoBackground from "../styled/Stylish/VideoBackground";

const Banner = (props) => {
  const { videoRef, videoUrl, posterUrl, handleVideoEnded, autoPlay } = props;

  return (
    <BannerContainer>
      <BannerContent>
        <VideoBackground
          ref={videoRef}
          src={videoUrl}
          poster={posterUrl}
          onEnded={handleVideoEnded}
          autoPlay={autoPlay}
          muted
        />
        <BannerDescription>
          <h5>Logo Netflix</h5>
          <h1>Movie Title</h1>
          <p>Movie Overview</p>
          <button>Play</button>
          <button>My List</button>
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
