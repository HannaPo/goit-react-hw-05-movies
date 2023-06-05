import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { fetchMoviesDetails } from '../../services/movieApi';
import {
  Container,
  MovieImage,
  Title,
  SubTitle,
  Info,
  StyledLink,
  LinkList,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  useEffect(() => {
    fetchMoviesDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    movie && (
      <section>
        <StyledLink to={backLinkRef}>Go back</StyledLink>
        <Container>
          <div>
            <MovieImage
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div>
            <Title>{movie.title}</Title>
            <div>
              <p>User score: {Math.round(movie.vote_average * 10)}%</p>
              <SubTitle>Overview</SubTitle>
              <p>{movie.overview}</p>
              <SubTitle>Genres</SubTitle>
              <LinkList>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </LinkList>
            </div>
          </div>
        </Container>
        <Info>Additional information</Info>
        <LinkList>
          <li>
            <StyledNavLink to="cast" state={{ from: backLinkRef }}>
              Cast
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="reviews" state={{ from: backLinkRef }}>
              Reviews
            </StyledNavLink>
          </li>
        </LinkList>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </section>
    )
  );
};

export default MovieDetails;
