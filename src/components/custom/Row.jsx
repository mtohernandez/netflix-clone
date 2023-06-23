import React from 'react'
import H2Text from '../styled/Text/H2Text'
import XContainer from '../styled/Containers/XContainer'
import RowContainer from '../styled/Focused/RowContainer'
import RowPoster from '../styled/Focused/RowPoster'
import { imageBaseUrl } from '../../api/requests'

const Row = (props) => {

  const { movies, title } = props;

  return (
    <XContainer>
      <H2Text>{title}</H2Text>
      <RowContainer>
        {movies.map((movie) => (
          <RowPoster 
            key={movie.id}
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </RowContainer>
    </XContainer>
  )
}

export default Row