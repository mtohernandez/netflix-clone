import axios from 'axios';

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE = import.meta.env.VITE_TMDB_IMAGE_BASE;

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: TMDB_API_KEY,
    language: 'en-US',
  },
});

export const img = {
  backdrop: (path, size = 'original') => path ? `${IMAGE_BASE}/${size}${path}` : null,
  poster: (path, size = 'w500') => path ? `${IMAGE_BASE}/${size}${path}` : null,
  logo: (path) => path ? `${IMAGE_BASE}/original${path}` : null,
  profile: (path, size = 'w185') => path ? `${IMAGE_BASE}/${size}${path}` : null,
};

export const fetchTrending = () =>
  tmdb.get('/trending/movie/week').then(r => r.data.results);

export const fetchNetflixOriginals = () =>
  tmdb.get('/discover/tv', { params: { with_networks: 213 } }).then(r => r.data.results);

export const fetchTopRated = () =>
  tmdb.get('/movie/top_rated').then(r => r.data.results);

export const fetchByGenre = (genreId) =>
  tmdb.get('/discover/movie', { params: { with_genres: genreId, sort_by: 'popularity.desc' } }).then(r => r.data.results);

export const fetchMovieDetails = (movieId) =>
  tmdb.get(`/movie/${movieId}`, {
    params: { append_to_response: 'videos,credits,similar,images', include_image_language: 'en,null' },
  }).then(r => r.data);

export const fetchTVDetails = (tvId) =>
  tmdb.get(`/tv/${tvId}`, {
    params: { append_to_response: 'videos,credits,similar,images', include_image_language: 'en,null' },
  }).then(r => r.data);

export const searchMulti = (query) =>
  tmdb.get('/search/multi', { params: { query } }).then(r => r.data.results);

export const fetchMovieImages = (movieId) =>
  tmdb.get(`/movie/${movieId}/images`, { params: { include_image_language: 'en,null' } }).then(r => r.data);

export const fetchMovieVideos = (movieId) =>
  tmdb.get(`/movie/${movieId}/videos`).then(r => r.data.results);

export const GENRES = {
  ACTION: 28,
  COMEDY: 35,
  HORROR: 27,
  ROMANCE: 10749,
  DOCUMENTARY: 99,
  THRILLER: 53,
  ANIMATION: 16,
  SCIFI: 878,
};

export default tmdb;
