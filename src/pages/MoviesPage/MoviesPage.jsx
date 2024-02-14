import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import MoviesList from 'components/MovieList/MovieList';

import { searchMovies } from '../../api/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { data } = await searchMovies(search, page);
        if (movies.length === 0) {
          setMovies(data.results || []);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (search && (page === '1' || !page)) {
      fetchMovies();
    }
  }, [search, page, movies]);

  const handleSearch = ({ search }) => {
    setSearchParams({ search, page: 1 });
    setMovies([]);
  };

  const isMovies = Boolean(movies.length);

  return (
    <div>
      <MoviesSearchForm onSubmit={handleSearch} />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {isMovies && <MoviesList items={movies} />}
    </div>
  );
};

export default MoviesPage;
