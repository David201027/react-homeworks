const API_KEY = process.env.REACT_APP_TMDB_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

async function request(path, params = {}, signal) {
  if (!API_KEY || API_KEY === 'YOUR_TMDB_API_KEY') {
    throw new Error('Add TMDB API key to .env.local');
  }

  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    ...params,
  });

  const response = await fetch(
    `${BASE_URL}${path}?${searchParams}`,
    { signal }
  );

  if (!response.ok) {
    throw new Error(`TMDB error: ${response.status}`);
  }

  return response.json();
}

export const getTrendingMovies = signal =>
  request('/trending/movie/day', {}, signal);

export const searchMovies = (query, signal) =>
  request('/search/movie', { query }, signal);

export const getMovieDetails = (id, signal) =>
  request(`/movie/${id}`, {}, signal);

export const getMovieCast = (id, signal) =>
  request(`/movie/${id}/credits`, {}, signal);

export const getMovieReviews = (id, signal) =>
  request(`/movie/${id}/reviews`, {}, signal);