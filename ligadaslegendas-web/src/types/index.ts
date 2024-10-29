export type User = {
  id: string;
  name: string;
  email: string;
  is_subtitler: boolean;
  points: number;
  created_at: Date;
  updated_at: Date;
};

export type Comment = {
  id: string;
  content: string;
  up_votes: number;
  down_votes: number;
  created_at: Date;
  updated_at: Date;
};

export type Suggestion = {
  id: string;
  content: string;
  created_at: Date;
  updated_at: Date;
};

export type Movie = {
  id: string;
  tmdb_id: string;
  title: string;
  image_url: string;
  release_date: Date;
  genres: string[];
  synopsis: string;
  rating: number;
  language: string;
  created_at: Date;
  updated_at: Date;
};

export type Subtitle = {
  id: string;
  file_name: string;
  file: File;
  language: string;
  is_closed_captions: boolean;
  rating: number;
  created_at: Date;
  updated_at: Date;
};

export type Rating = {
  id: string;
  rating: number;
};
