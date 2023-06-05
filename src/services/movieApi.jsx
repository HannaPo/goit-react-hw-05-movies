import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchParams = new URLSearchParams({
  api_key: 'a20661da71bad761bc63fca9b3028f72',
  method: 'GET',
  language: 'en-US',
  include_adult: false,
 });

export const fetchTrends = async () => {
  const { data } = await axios.get(`/trending/movie/day?${searchParams}`);

  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${query}`
  );

  return data.results;
};

export const fetchMoviesDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}?${searchParams}`);

  return data;
};

export const fetchMoviesCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits?${searchParams}`);

  return data.cast;
};

export const fetchMoviesReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?${searchParams}`);

  return data.results;
};
