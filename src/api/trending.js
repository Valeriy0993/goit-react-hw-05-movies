import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGFjNzI1MTA4Mjc2ZDkyM2RlMjQzOTE4NzUwNjJjNSIsInN1YiI6IjY1YjUwMjhhNGYzM2FkMDE3YTBiYTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVikyztACIvDZrPSWL56RBOBtNnjH3jDZKwNSqkZN54',
  },
};

export const getTrendingMovies = () => {
  return instance.get(
    '/trending/movie/day?language=en-US&api_key=26362fc59abb5f3a891dc2f9c6943e3e',
    options
  );
};
