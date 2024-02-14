import { Suspense, useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getMoviesDetails } from '../../api/api';

import styles from './movie-details.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();

  const from = location.state?.from || '/';

  const navigate = useNavigate();

  const BASE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setLoading(true);
        const { data } = await getMoviesDetails(id);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [id]);

  const goBack = () => navigate(from);

  const { title, poster_path, overview, vote_average, genres } = movie || {};

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={goBack} type="button">
        Go back
      </button>
      {movie && (
        <>
          <div className={styles.movieContainer}>
            <img
              className={styles.movieImg}
              src={poster_path ? BASE_URL + poster_path : ''}
              alt={title}
            />
            <div className={styles.descriptionContainer}>
              <h1>
                {title} (
                {movie &&
                  movie.release_date &&
                  movie.release_date.split('-')[0]}
                )
              </h1>
              <h2>User Score:</h2>
              <p>{Math.round(vote_average * 10)}%</p>
              <h2>Overview: </h2>
              <p>{overview}</p>
              <h2>Genres:</h2>
              <p>{genres && genres.map(i => i.name).join(', ')}</p>
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={'cast'} state={{ from }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={'reviews'} state={{ from }}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<p>Loading...</p>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
