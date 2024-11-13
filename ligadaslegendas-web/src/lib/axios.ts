import axios from 'axios';
import { cookies } from './react-cookie';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${cookies.get('libretoken')}`,
  },
});

export const tmdbApi = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
});
