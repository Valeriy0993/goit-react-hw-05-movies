import { useState, useEffect, useRef } from 'react';

const MoviesSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({
      search: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            ref={inputRef}
            value={state.search}
            onChange={handleChange}
            required
            type="text"
            name="search"
            placeholder="Enter search phrase"
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default MoviesSearchForm;
