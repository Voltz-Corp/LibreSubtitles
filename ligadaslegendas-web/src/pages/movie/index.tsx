import { useParams } from 'react-router-dom';
import * as S from './styles';
import { TmdbService } from '../../services/http/TmdbService';
import { useQuery } from '@tanstack/react-query';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Helmet } from 'react-helmet-async';
import { MovieProps } from '../landing_page';
import { FiStar } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { toast } from 'sonner';

type Genre = {
  id: number;
  name: string;
};

type CastAndCrew = {
  id: number;
  known_for_department: string;
  name: string;
};

type Credits = {
  cast: CastAndCrew[];
  crew: CastAndCrew[];
};

type MovieDetailedProps = {
  original_title: string;
  runtime: number;
  genres: Genre[];
  release_date: string;
  credits: Credits;
} & MovieProps;

export function Movie() {
  const { id } = useParams();

  const { data: movie } = useQuery<MovieDetailedProps>({
    queryKey: ['movie', id],
    queryFn: () => TmdbService.getMovie(id),
  });

  const directorsSet = new Set();

  const directors = movie?.credits.crew
    .filter((member) => member.known_for_department === 'Directing')
    .filter((member) => {
      const duplicate = directorsSet.has(member.id);
      directorsSet.add(member.id);
      return !duplicate;
    })
    .map((member) => `${member.name}, `);

  function handleAskForSubtitle() {
    toast.success('Pedido de legenda enviado!');
  }

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
              <span>{movie?.vote_average} / 10 TMDb</span>
            </S.InfoHeader>
            <div>
              <p>
                Ano de lançamento: {movie?.release_date} | Duração:{' '}
                {movie?.runtime}min | Gênero:{' '}
                {movie?.genres.map((movie) => `${movie.name}, `)}
              </p>
              <p>Direção: {directors}</p>
              <p>Título original: {movie?.original_title}</p>
            </div>
          </S.MovieInfo>
          <S.MoviePoster
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
          />
        </S.MovieContent>

        <S.TableContainer>
          <div>
            <h3>Legendas</h3>

            <Button size="sm" onClick={handleAskForSubtitle}>
              Pedir legenda
            </Button>
          </div>

          <S.SubtitleTable>
            <thead>
              <tr>
                <th>Ano</th>
                <th>Nome </th>
                <th>Legendador</th>
                <th>Avaliação</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </S.SubtitleTable>
        </S.TableContainer>
      </S.Wrapper>
    </>
  );
}
