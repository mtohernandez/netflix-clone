import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // Responsible for fetching the data from the API (movie)
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  const truncate = function(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner--fadeTop" />

      <div className="banner__contents">
        <h1 className="banner__title">{movie.name || ''}</h1>
        <h2 className="banner__description">
          {truncate(movie.overview || '', 150)}
        </h2>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">More Info</button>
        </div>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
