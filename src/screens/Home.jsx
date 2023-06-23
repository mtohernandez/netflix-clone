import Banner from "../components/custom/Banner";
import { useSelector } from "react-redux";
import { selectMovie } from "../features/movieSlide";
// import { selectMovies } from "../features/moviesSlide";
import BannerAmbient from "../components/custom/BannerAmbient";
import RelativeContainer from "../components/styled/Containers/RelativeContainer";
import useVideoController from "../hooks/useVideoController";

import arrival from "../assets/arrival.mp4";

const Home = () => {
  const movie = useSelector(selectMovie);
  const [videoRef, isPlaying, handleVideoEnded] = useVideoController();

  const videoControl = {
    videoRef: videoRef,
    videoUrl: arrival,
    posterUrl: null,
    handleVideoEnded: handleVideoEnded,
    autoPlay: isPlaying,
  };

  return (
    <RelativeContainer $height="400px">
      <BannerAmbient
        {...videoControl}
      />
      <Banner
        {...videoControl}
      />
    </RelativeContainer>
  );
};

export default Home;
