import React from 'react'

const Banner = (props) => {

  const { movieImage, movieVideo, movieLogo, movieOverview } = props

  return (
    <div>
      <p>{movieOverview}</p>
      <img src={movieImage} alt="movieImage" />
      <img src={movieLogo} alt="movieLogo" />
      <video
        src={movieVideo}
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default Banner