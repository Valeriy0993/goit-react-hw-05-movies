import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from '../../api/api';
import styles from './cast.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

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

  const isCast = Boolean(cast.length);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && isCast ? (
        <ul>
          {cast.map(({ id, character, original_name, profile_path }) => (
            <li key={id}>
              <img
                className={styles.castImg}
                src={BASE_URL + profile_path}
                alt="Foto"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{!loading && "We don't have any cast for this movie"}</p>
      )}
    </>
  );
};

export default Cast;
