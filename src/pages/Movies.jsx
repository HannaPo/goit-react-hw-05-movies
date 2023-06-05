import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/movieApi';

// Components
import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchParams, setSeachParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get('movie') ?? '';
    if (!movie) {
      return;
    }
    searchMovies(movie)
      .then(data => {
        setMovies(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [searchParams]);

  const onSubmit = movie => {
    setSeachParams({ movie });
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
       {error && <p>There are no movies</p>}
    </div>
  );
};

export default Movies;