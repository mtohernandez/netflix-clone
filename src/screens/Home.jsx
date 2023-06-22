import React, { useEffect } from 'react'
import Banner from '../components/custom/Banner';
import { useSelector } from 'react-redux';
import { selectMovie } from "../features/movieSlide";

const Home = () => {
  const movie = useSelector(selectMovie);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div>
      <p>Home</p>
      {movie && <p>{movie.movie.overview}</p>}
      {/* <Banner movieImage={movie} movieVideo={} movieLogo={} movieOverview={}/> */}
    </div>
  )
}

export default Home
