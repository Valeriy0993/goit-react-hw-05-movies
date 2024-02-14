import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from '../../api/api';
import styles from './cast.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';
const DEFAULT_IMG = 'https://via.placeholder.com/300';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setLoading(true);
        const { data } = await getMoviesCredits(id);
        setCast(data.cast);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [id]);

  const elements = cast.map(
    ({ id, character, original_name, profile_path }) => (
      <li key={id}>
        <img
          className={styles.castImg}
          src={profile_path ? BASE_URL + profile_path : DEFAULT_IMG}
          alt="Foto"
        />
        <p>{original_name}</p>
        <p>character: {character}</p>
      </li>
    )
  );

  const isCast = Boolean(cast.length);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          {error && <p>{error}</p>}
          {isCast ? (
            <ul>{elements}</ul>
          ) : (
            <p>We don't have any cast for this movie.</p>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
