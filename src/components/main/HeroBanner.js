import React, { useEffect, useState, useRef } from "react";
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
import CustomButton from "../common/CustomButton";
import TextOutputP from "../common/TextOutputP";

const HeroBanner = (props) => {

  const { movieId, movieDesc } = props;

  const videoRef = useRef(null);
  const ambientVideoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const [images, setImages] = useState({});
  const [video, setVideo] = useState("");

  // Handle videos loaded and ended show the poster and then to be played again after 10 seconds

  const handleOnVideoEnded = () => {
    setIsPlaying(false);
    videoRef.current.load();
    ambientVideoRef.current.load();
    
    setTimeout(() => {
      setIsPlaying(true);
      videoRef.current.play();
      ambientVideoRef.current.play();
    }, 20000);
  } 

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
        fetchVideos(request.data.results[0].key).catch((error) => {
          setVideo("");
        });
    }).catch((error) => {
      // Video not found
      setVideo("");
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
            videoRef={videoRef}
            handleVideoEnded={handleOnVideoEnded}
            autoPlay={isPlaying}
          />
          <div className="header__description">
            <LogoSeries />
            <MediaLogo
              imageSrc={`${imageBaseUrl}${images.logos[0].file_path}`}
            />
            <TextOutputP
              text={truncate(movieDesc, 150)}
            />
            <div className="header__buttons">
              <CustomButton
                element={<PlayIcon />}
                text="Play"
              />
              <CustomButton
                element={<InformationIcon />}
                text="More Info"
                isTransparent
              />
            </div>
          </div>
          <div className="header__mediaButtons">
            <button className="header__mediaButtons--button">
              <RepeatIcon />
            </button>
          </div>
        </div>
        <AmbientBackground
          videoUrl={video}
          posterUrl={`${imageBaseUrl}${images.backdrops[1].file_path}`}
          videoRef={ambientVideoRef}
          handleVideoEnded={handleOnVideoEnded}
          autoPlay={isPlaying}
        />
      </div>
    )
  );
};

export default HeroBanner;
