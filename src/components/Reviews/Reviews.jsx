import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../services/movieApi';
import {  Info, Text } from './Rewiews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMoviesReviews(movieId)
      .then(data => {
        setReviews(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  return (
    <div>
      {error && <p>There are no reviews</p>}
      {reviews?.length === 0 && <p>No reviews available for this movie</p>}
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <Info>Author: {author}</Info>
              <Text>{content}</Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
