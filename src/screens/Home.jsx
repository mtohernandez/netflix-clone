import { useState } from "react";
import Banner from "../components/custom/Banner";
import { useSelector } from "react-redux";
import { selectMovie } from "../features/movieSlide";
import { selectMovies } from "../features/moviesSlide";
import BannerAmbient from "../components/custom/BannerAmbient";
import RelativeContainer from "../components/styled/Containers/RelativeContainer";
import useVideoController from "../hooks/useVideoController";
import { imageBaseUrl } from "../api/requests";
import { useEffect } from "react";
import Row from "../components/custom/Row";

const Home = () => {
  const movie = useSelector(selectMovie);
  const movies = useSelector(selectMovies);
  const [videoRef, isPlaying, setIsPlaying, handleVideoEnded] =
    useVideoController();
  const [videoControl, setVideoControl] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsPlaying(true);
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    }
  }, [movie]);

  useEffect(() => {
    console.log(movies);
    if (movie.movieVideo && movie.movieImage && movie.movie && movies) {
      setVideoControl({
        videoRef: videoRef,
        videoUrl: movie.movieVideo ? movie.movieVideo : null,
        posterUrl: `${imageBaseUrl}${
          movie.movieImage
            ? movie.movieImage.backdrops[0].file_path
            : movie.movie.backdrop_path
        }`,
        handleVideoEnded: handleVideoEnded,
        autoPlay: isPlaying,
      });
      setLoading(false);
    }
  }, [movie, movies]);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <RelativeContainer $height="400px">
          <BannerAmbient {...videoControl} movie={movie} />
          <Banner {...videoControl} movie={movie} />
          <Row title="Netflix's Clone Latest" movies={movies.movies.all}/>
          <Row title="Trending Action!" movies={movies.movies.action}/>
        </RelativeContainer>
      )}
    </>
  );
};

export default Home;
