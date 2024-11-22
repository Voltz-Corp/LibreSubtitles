import { api } from '../../../lib/axios';

export type CreateRatingProps = {
  rating: number;
  subtitleId: string;
};

export type UpdateRatingProps = {
  rating: number;
  ratingId: string;
};

export const RatingService = {
  findBySubtitleId: async (subtitleId: string) => {
    const { data } = await api.get(`/rating/subtitle/${subtitleId}`);
    return data;
  },
  createRating: async (data: CreateRatingProps) => {
    await api.post('/rating/', data);
  },
  updateRating: async (data: UpdateRatingProps) => {
    await api.put('/rating/', data);
  },
};
