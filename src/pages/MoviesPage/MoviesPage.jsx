import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const currentLocation = useLocation();

  useEffect(() => {
    const storedResults = localStorage.getItem('searchResults');
    if (storedResults) {
      setSearchResults(JSON.parse(storedResults));
    }
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}&api_key=26362fc59abb5f3a891dc2f9c6943e3e`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.results);
      localStorage.setItem('searchResults', JSON.stringify(data.results));
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem('searchResults');
    };

    const handleBeforeUnload = () => {
      clearLocalStorage();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>Error fetching data: {error}</p>}
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
