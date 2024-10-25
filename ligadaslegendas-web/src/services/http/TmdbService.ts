import { tmdbApi } from '../../lib/axios';

export const TmdbService = {
  getTrendingToday: async function () {
    try {
      const response = await tmdbApi.get(`trending/movie/day?language=pt-BR`);
      return response.data.results;
    } catch (err: any) {
      return err.toJSON();
    }
  },
  getTopRatedInternationally: async function () {
    try {
      const response = await tmdbApi.get(`movie/top_rated`);
      return response.data.results;
    } catch (err: any) {
      return err.toJSON();
    }
  },
  getPopularMoviesBrazil: async function () {
    try {
      const response = await tmdbApi.get(`/movie/popular?region=pt-BR`);
      return response.data.results;
    } catch (err: any) {
      return err.toJSON();
    }
  },
};
