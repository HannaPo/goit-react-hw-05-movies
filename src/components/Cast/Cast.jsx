import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCast } from '../../services/movieApi';
import { LinkList, Actor, ActorImage, Info } from './Cast.styled';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMoviesCast(movieId)
      .then(data => {
        setCast(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  return (
    <>
      <LinkList>
        {cast.map(({ id, profile_path, name, character }) => (
          <Actor key={id}>
            <ActorImage
              src={`${
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `https://via.placeholder.com/150x225?text=${name}`
              }`}
              alt={name}
            />
            <Info>Actor: {name}</Info>
            <Info>Character: {character}</Info>
          </Actor>
        ))}
      </LinkList>
      {error && <p>There is no information about movie cast </p>}
    </>
  );
};

export default Cast;
