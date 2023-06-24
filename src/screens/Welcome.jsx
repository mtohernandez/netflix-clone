// import { useState, useRef, useEffect } from "react";
import { Nav } from "../components";
import { Outlet, useOutlet } from "react-router-dom";
import BackGroundContainer from "../components/styled/Containers/BackGroundContainer";
import GradientTop from "../components/styled/Stylish/GradientTop";
import VideoBackground from "../components/styled/Stylish/VideoBackground";

import AbsoluteCenterContainer from "../components/styled/Containers/AbsoluteCenterContainer";
import H1Text from "../components/styled/Text/H1Text";
import H3Text from "../components/styled/Text/H3Text";

import avatarPoster from "../assets/avatarPoster.jpg";

const Welcome = () => {
  const outletHook = useOutlet();

  return (
    <BackGroundContainer>
      <GradientTop />
      <VideoBackground
        // ref={videoRef}
        // src={arrival}
        // autoPlay={isPlaying}
        // onEnded={handleVideoEnded}
        poster={avatarPoster}
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
