import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu';

const Home = React.lazy(() => import('pages/HomePage/HomePage'));
const Movies = React.lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = React.lazy(() =>
  import('pages/MovieDetailsPage/MovieDetails')
);
const Cast = React.lazy(() => import('pages/CastPage/CastPage'));
const Reviews = React.lazy(() => import('pages/ReviewsPages/ReviewsPage'));
const NotFoundPage = React.lazy(() =>
  import('pages/NotFoundPage/NotFoundPage')
);

const App = () => {
  return (
    <div>
      <MainMenu />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
