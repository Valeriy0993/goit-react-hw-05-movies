import React, { useEffect, useState } from 'react';
import { getMovieCredits } from '../api/api';
import styles from './cast-page.module.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const credits = await getMovieCredits(movieId);
        setCast(credits);
      } catch (error) {
        console.error('Error fetching cast:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div id="cast" className={styles.castContainer}>
      {loading ? (
        <p>Loading...</p>
      ) : cast.length > 0 ? (
        <ul className={styles.castList}>
          {cast.map(actor => (
            <li key={actor.id} className={styles.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImg}
              />
              <div className={styles.actorInfo}>
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast available.</p>
      )}
    </div>
  );
};

export default Cast;
