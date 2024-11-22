import { api } from '../../../lib/axios';

export type SubtitleUploadProps = {
  file: Blob;
  isClosedCaptions: boolean;
  language: string;
  tmdbId: number;
};

export const SubtitleService = {
  upload: async (data: SubtitleUploadProps) => {
    await api.post('/subtitle/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  getSubtitlesByMovieId: async (id: string | undefined) => {
    const { data } = await api.get(`/subtitle/movie/${id}`);
    return data;
  },
  getFileBySubtitleId: async (id: string) => {
    const response = await api.get(`subtitle/download/${id}`);
    return response;
  },
  getSubtitleById: async (id: string) => {
    const { data } = await api.get(`subtitle/${id}`);
    return data;
  },
};
