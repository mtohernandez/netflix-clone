import { useState, useRef, useEffect } from "react";
import { Nav } from "../components";
import { Outlet, useOutlet } from "react-router-dom";
import BackGroundContainer from "../components/styled/Containers/BackGroundContainer";
import GradientTop from "../components/styled/Stylish/GradientTop";
import VideoBackground from "../components/styled/Stylish/VideoBackground";

import AbsoluteCenterContainer from "../components/styled/Containers/AbsoluteCenterContainer";
import H1Text from "../components/styled/Text/H1Text";
import H3Text from "../components/styled/Text/H3Text";

import arrival from "../assets/arrival.mp4";
import arrivalPhoto from "../assets/arrivalPoster.jpg";

const Welcome = () => {
  const outletHook = useOutlet();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOnVideoEnded = () => {
    setIsPlaying(false);
    videoRef.current.load();

    setTimeout(() => {
      setIsPlaying(true);
      videoRef.current.play();
      ambientVideoRef.current.play();
    }, 20000);
  };

  useEffect(() => {
    const playingTime = setTimeout(() => {
      setIsPlaying(true);
    }, 10000);

    return () => {
      clearTimeout(playingTime);
    };
  }, []); 


  return (
    <BackGroundContainer>
      <GradientTop />
      <VideoBackground
        ref={videoRef}
        src={arrival}
        autoPlay={isPlaying}
        onEnded={handleOnVideoEnded}
        poster={arrivalPhoto}
        muted
      />
      <Nav />
      <AbsoluteCenterContainer>
        {outletHook ? (
          <Outlet />
        ) : (
          <>
            <H1Text>Welcome to Netflix Clone</H1Text>
            <H3Text>Get ready and create your account.</H3Text>
          </>
        )}
      </AbsoluteCenterContainer>
    </BackGroundContainer>
  );
};

export default Welcome;
