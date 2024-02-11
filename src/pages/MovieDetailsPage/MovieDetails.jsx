import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMovieDetails } from '../api/api';
import Reviews from '../ReviewsPages/ReviewsPage';
import Cast from '../CastPage/CastPage';

import styles from './movie-details.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showReviews, setShowReviews] = useState(false);
  const [showCast, setShowCast] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const details = await getMovieDetails(movieId);
      setMovieDetails(details);
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  const handleToggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  return (
    <div>
      <button onClick={() => window.history.back()}>&#8592; Go back</button>
      {movieDetails ? (
        <div className={styles.movieContainer}>
          <img
            className={styles.movieImg}
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <div className={styles.descriptionContainer}>
            <h2>
              {movieDetails.title} ({movieDetails.release_date.split('-')[0]})
            </h2>
            <p>User Score: {Math.round(movieDetails.vote_average * 10)}%</p>
            <div>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
            </div>
            <div>
              <h3>Genres</h3>
              <ul className={styles.genresList}>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className={styles.informationContainer}>
        <p>Additional information</p>
        <ul className={styles.informationList}>
          <li>
            <Link to="#" onClick={handleToggleCast}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="#" onClick={handleToggleReviews}>
              Reviews
            </Link>
          </li>
        </ul>
        {showReviews && <Reviews movieId={movieId} />}
        {showCast && <Cast movieId={movieId} />}
      </div>
    </div>
  );
};

export default MovieDetails;
