import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Container, MovieItem, MovieImage } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <Container>
        {movies.map(({ id, poster_path, title }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                alt={title}
              />
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
