import axios from 'axios';

const instance = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/11?api_key=26362fc59abb5f3a891dc2f9c6943e3e',
});

export const getAllFilms = () => {
  return instance.get('/');
};

export const searchFilms = (q, _page = 1) => {
  return instance.get('/', {
    params: {
      q,
      _limit: 6,
      _page,
    },
  });
};

// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/movie/11?api_key=26362fc59abb5f3a891dc2f9c6943e3e',
// });

// export const getAllFilms = () => {
//   return instance.get('');
// };

// export const searchFilms = (q, _page = 1) => {
//   return instance.get('', {
//     params: {
//       q,
//       _limit: 6,
//       _page,
//     },
//   });
// };
