import { useState, useEffect } from 'react';

import { getAllFilms } from 'api/films';

import styles from './films.module.css';

const Films = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        setLoading(true);
        const { data } = await getAllFilms();
        setFilms(data?.length ? data : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  const elements = films.map({ id });
};
