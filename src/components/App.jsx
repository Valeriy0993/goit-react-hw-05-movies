import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('pages/MovieDetailsPage/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
