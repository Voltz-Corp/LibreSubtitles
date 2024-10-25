import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
});
