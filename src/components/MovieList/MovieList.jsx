import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{elements}</ul>
    </div>
  );
};

export default MoviesList;
