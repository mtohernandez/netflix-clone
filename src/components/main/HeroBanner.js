import React, { useEffect, useState } from "react";
import { InformationIcon, PlayIcon, RepeatIcon } from "../../icons";
import {
  AmbientBackground,
  MediaLogo,
  VideoBanner,
  LogoSeries,
} from "../common";
import instance, { videos } from "../../API/axios";
import {
  fetchImage,
  fetchVideo,
  fetchVideoId,
  imageBaseUrl,
} from "../../API/requests";
import "./HeroBanner.css";

const HeroBanner = ({ movieId, movieDesc }) => {
  const [images, setImages] = useState({});
  const [video, setVideo] = useState("");

  async function fetchImages() {
    const imageUrl = fetchImage(movieId);
    const request = await instance.get(imageUrl);
    setImages(request.data);
    return request;
  }

  async function fetchVideoAPI() {
    const videoId = fetchVideoId(movieId);
    const request = await instance.get(videoId);
    return request;
  }

  async function fetchVideos(videoUrl) {
    const videoId = fetchVideo(videoUrl);
    const request = await videos.get(videoId);
    setVideo(
      request.data.data.player_response.streamingData.adaptiveFormats[0].url
    );
    return request;
  }

  const truncate = function(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    fetchImages();
    fetchVideoAPI().then((request) => {
      request.data.results[0].key &&
        fetchVideos(request.data.results[0].key).catch((error) => {
          // Video not found
          setVideo("");
        });
    });
  }, [movieId]);

  return (
    images &&
    video &&
    movieId &&
    movieDesc && (
      <div className="header__inside">
        <div className="header__content">
          <VideoBanner
            videoUrl={video}
            posterUrl={`${imageBaseUrl}${images.backdrops[1].file_path}`}
          />
          <div className="header__description">
            <LogoSeries />
            <MediaLogo
              imageSrc={`${imageBaseUrl}${images.logos[0].file_path}`}
            />
            <p>{truncate(movieDesc, 150)}</p>
            <div className="header__buttons">
              <button className="header__button">
                <PlayIcon />
                Play
              </button>
              <button className="header__button header__button--info">
                <InformationIcon />
                More Info
              </button>
            </div>
          </div>
          <div className="header__mediaButtons">
            <button>
              <RepeatIcon />
            </button>
          </div>
        </div>
        <AmbientBackground
          videoUrl={video}
          posterUrl={`${imageBaseUrl}${images.backdrops[1].file_path}`}
        />
      </div>
    )
  );
};

export default HeroBanner;
