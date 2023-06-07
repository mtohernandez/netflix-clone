import React from "react";
import { Banner, Sliders } from "../components/main";
import { Nav } from "../components/custom";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Sliders />
    </div>
  );
};

export default HomeScreen;
