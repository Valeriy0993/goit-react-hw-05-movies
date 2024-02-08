import { Routes, Route } from 'react-router-dom';

import MainMenu from './MainMenu/MainMenu';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/src/pages/MoviesPage/MoviesPage.jsx"
          element={<MoviesPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
