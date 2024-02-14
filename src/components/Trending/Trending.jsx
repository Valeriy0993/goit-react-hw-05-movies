import { useState, useEffect } from 'react';

import { getTrendingMovies } from '../../api/trending';
import MoviesList from 'components/MovieList/MovieList';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const respMovies = await getTrendingMovies();
        const { results } = respMovies.data;
        setTrending(results?.length ? results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {Boolean(trending.length) && <MoviesList items={trending} />}
    </>
  );
};

export default Trending;
