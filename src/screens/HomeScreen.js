import React from 'react'
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../requests';
import './HomeScreen.css';

// Home screen containing the header, banner, and rows of movies

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row 
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title='Horror Movies'
        fetchUrl={requests.fetchHorroMovies}
      />
    </div>
  )
}

export default HomeScreen