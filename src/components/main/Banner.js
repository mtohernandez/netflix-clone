import React, { useState, useEffect } from "react";
import instance from "../../API/axios";
import requests from "../../API/requests";
import HeroBanner from "./HeroBanner";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  async function fetchData() {
    const request = await instance.get(requests.fetchNetflixOriginals.link);
    const randomMovie =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ];
    setMovie(randomMovie);
    return request;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    movie &&
    movie.id &&
    movie.overview && (
      <header className="header">
        <HeroBanner movieId={movie.id} movieDesc={movie.overview} />
      </header>
    )
  );
};

export default Banner;
