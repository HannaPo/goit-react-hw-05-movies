import { useEffect, useState } from 'react';

import { fetchTrends } from '../../services/movieApi';
import MoviesList from '../../components/MoviesList/MoviesList';
import { Title} from './Home.styled'

const Home = () => {
    const [trends, setTrends] = useState(null);
     const [error, setError] = useState('');
  
  useEffect(() => {
    fetchTrends()
      .then(data => {
        setTrends(data);
      })
       .catch(error => {
         setError(error.message);
      });
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      {trends && <MoviesList movies={trends} />}
      {error.message && <p>Sorry! {error} </p>}
    </>
  );
};

export default Home;