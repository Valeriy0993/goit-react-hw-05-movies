import { getMoviesReviews } from '../../api/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        const { data } = await getMoviesReviews(id);
        setReview(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [id]);

  const elements = review.map(({ id, author, content }) => (
    <li key={id}>
      <h4>{author}</h4>
      <p>{content}</p>
    </li>
  ));

  const isReview = Boolean(review.length);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && isReview ? (
        <ul>{elements}</ul>
      ) : (
        <p>{!loading && "We don't have any reviews for this movie"}</p>
      )}
    </>
  );
};

export default Reviews;
