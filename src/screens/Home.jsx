import { useState } from "react";
import Banner from "../components/custom/Banner";
import { useSelector } from "react-redux";
import { selectMovie } from "../features/movieSlide";
// import { selectMovies } from "../features/moviesSlide";
import BannerAmbient from "../components/custom/BannerAmbient";
import RelativeContainer from "../components/styled/Containers/RelativeContainer";
import useVideoController from "../hooks/useVideoController";
import { imageBaseUrl } from "../api/requests";

import arrival from "../assets/arrival.mp4";
import { useEffect } from "react";

const Home = () => {
  const movie = useSelector(selectMovie);
  const [videoRef, isPlaying, setIsPlaying, handleVideoEnded] = useVideoController();
  const [videoControl, setVideoControl] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    if(movie.movieVideo && movie.movieImage && movie.movie) {
      setVideoControl({
        videoRef: videoRef,
        videoUrl: movie.movieVideo ? movie.movieVideo : null,
        posterUrl: `${imageBaseUrl}${movie.movieImage ? movie.movieImage.backdrops[0].file_path : movie.movie.backdrop_path}`,
        handleVideoEnded: handleVideoEnded,
        autoPlay: isPlaying,
      });
      setLoading(false);
    }
  }, [movie]);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <RelativeContainer $height="400px">
          <BannerAmbient {...videoControl} movie={movie} />
          <Banner {...videoControl} movie={movie} />
        </RelativeContainer>
      )}
    </>
  );
};

export default Home;
