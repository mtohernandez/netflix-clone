import React, { useEffect } from 'react'
import Banner from '../components/custom/Banner';
import { useSelector } from 'react-redux';
import { selectMovie } from "../features/movieSlide";
import { selectMovies } from '../features/moviesSlide';

const Home = () => {
  const movie = useSelector(selectMovie);

  return (
    <div>
      <h1>Home</h1>
      {movie.movie && <p>{movie.movie.overview}</p>}
      {/* <Banner movieImage={movie} movieVideo={} movieLogo={} movieOverview={}/> */}
    </div>
  )
}

export default Home
