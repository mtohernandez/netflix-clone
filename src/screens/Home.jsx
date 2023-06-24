import { useState, useRef, useEffect } from "react";
import Banner from "../components/custom/Banner";
import { useSelector } from "react-redux";
import { selectMovie } from "../features/movieSlide";
import { selectMovies } from "../features/moviesSlide";
import BannerAmbient from "../components/custom/BannerAmbient";
import RelativeContainer from "../components/styled/Containers/RelativeContainer";
import { imageBaseUrl } from "../api/requests";
import Row from "../components/custom/Row";
import AbsoluteCenterContainer from "../components/styled/Containers/AbsoluteCenterContainer";
import H1Text from "../components/styled/Text/H1Text";
import LoadingBall from "../components/styled/Stylish/LoadingBall";

const Home = () => {
  const movie = useSelector(selectMovie);
  const movies = useSelector(selectMovies);
  const videoRef = useRef(null);
  const ambientRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoControl, setVideoControl] = useState({});
  const [loading, setLoading] = useState(true);

  const handleOnVideoEnded = () => {
    setIsPlaying(false);
    videoRef.current.load();
    ambientRef.current.load();

    setTimeout(() => {
      setIsPlaying(true);
      videoRef.current.play();
      ambientRef.current.play();
    }, 20000);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsPlaying(true);
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [movie.movieVideo]);

  useEffect(() => {
    if (movie.movieVideo && movie.movieImage && movie.movie && movies) {
      setVideoControl({
        videoUrl: movie.movieVideo ? movie.movieVideo : null,
        posterUrl: `${imageBaseUrl}${
          movie.movieImage
            ? movie.movieImage.backdrops[0].file_path
            : movie.movie.backdrop_path
        }`,
        handleVideoEnded: handleOnVideoEnded,
        autoPlay: isPlaying,
      });
      setLoading(false);
    }
  }, [movie, movies]);

  return (
    <>
      {loading ? (
        <RelativeContainer>
          <AbsoluteCenterContainer>
            <LoadingBall />
          </AbsoluteCenterContainer>
        </RelativeContainer>
      ) : (
        <RelativeContainer $height="400px">
          <BannerAmbient
            videoRef={ambientRef}
            {...videoControl}
            movie={movie}
          />
          <Banner videoRef={videoRef} {...videoControl} movie={movie} />
          <Row title="Netflix's Clone Latest" movies={movies.movies.all} />
          <Row title="Action Movies!" movies={movies.movies.action} />
        </RelativeContainer>
      )}
    </>
  );
};

export default Home;
