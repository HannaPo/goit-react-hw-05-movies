import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, MovieItem, MovieImage } from './MoviesGallery.styled'
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Container>
        {movies.map(({ id, poster_path, title }) => (
          <MovieItem key={id}>
            <MovieImage src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </MovieItem>
        ))}
      </Container>
    </>
  );
};

MovieList.protoTypes = {
  films: PropTypes.array.isRequired,
};

export default MovieList;
