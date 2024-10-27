import { useParams } from 'react-router-dom';
import * as S from './styles';
import { TmdbService } from '../../services/http/TmdbService';
import { useQuery } from '@tanstack/react-query';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Helmet } from 'react-helmet-async';
import { MovieProps } from '../landing_page';
import { FiStar } from 'react-icons/fi';

type Genre = {
  id: number;
  name: string;
};

type MovieDetailedProps = {
  original_title: string;
  runtime: number;
  genres: Genre[];
  release_date: string;
} & MovieProps;

export function Movie() {
  const { id } = useParams();

  const { data: movie } = useQuery<MovieDetailedProps>({
    queryKey: ['movie', id],
    queryFn: () => TmdbService.getMovie(id),
  });

  console.log(movie);

  return (
    <>
      <Helmet title={movie?.title} />
      <HeaderNavigation />
      <S.Wrapper>
        <S.MovieContent>
          <S.MovieInfo>
            <p>Filme</p>
            <S.InfoHeader>
              <h2>{movie?.title}</h2> <FiStar />{' '}
              <span>{movie?.vote_average} / 10 IMDb</span>
            </S.InfoHeader>
            <div>
              <p>
                Ano de lançamento: {movie?.release_date} | Duração:{' '}
                {movie?.runtime}min | Gênero:{' '}
                {movie?.genres.map((movie) => `${movie.name} `)}
              </p>
              <p>Direção: XXXX | Elenco: XXXX</p>
              <p>Título original: {movie?.original_title}</p>
            </div>
          </S.MovieInfo>
          <S.MoviePoster
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          />
        </S.MovieContent>
      </S.Wrapper>
    </>
  );
}
