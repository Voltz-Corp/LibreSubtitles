import { useNavigate, useParams } from 'react-router-dom';
import * as S from './styles';
import { TmdbService } from '../../services/http/TmdbService';
import { useQuery } from '@tanstack/react-query';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import { Helmet } from 'react-helmet-async';
import { MovieProps } from '../landing_page';
import { FiDownload, FiStar } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { toast } from 'sonner';
import { SubtitleService } from '../../services/http/subtitle';
import { Subtitle } from '../../types';

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

type MovieDetailed = {
  original_title: string;
  runtime: number;
  genres: Genre[];
  release_date: string;
  credits: Credits;
} & MovieProps;

export function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: movie } = useQuery<MovieDetailed>({
    queryKey: ['movie', id],
    queryFn: () => TmdbService.getMovie(id),
  });

  const { data: subtitles } = useQuery<Subtitle[]>({
    queryKey: ['subtitle', id],
    queryFn: () => SubtitleService.getSubtitlesByMovieId(id),
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

  function handleAddSubtitle() {
    navigate(`/upload?movieId=${id}`);
  }

  async function handleDownloadSubtitle(subtitle: Subtitle) {
    const { data } = await SubtitleService.getFileBySubtitleId(subtitle.id);

    const subtitleBlob = new Blob([data]);
    const subtitleUrl = URL.createObjectURL(subtitleBlob);

    const link = document.createElement('a');

    link.href = subtitleUrl;
    link.setAttribute('download', 'legenda.srt'); // substituir pelo nome do arquivo
    document.body.appendChild(link);
    link.click();
    link.remove();
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

            <div>
              <Button size="sm" onClick={handleAddSubtitle}>
                Adicionar legenda
              </Button>

              <Button size="sm" onClick={handleAskForSubtitle}>
                Pedir legenda
              </Button>
            </div>
          </div>

          <S.SubtitleTable>
            <thead>
              <tr>
                <th>Nome </th>
                <th>Legendador</th>
                <th>Avaliação</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {subtitles?.map((subtitle: Subtitle) => (
                <tr>
                  <td>{subtitle.fileName}</td>
                  <td>{subtitle.user.name}</td>
                  <td>{subtitle.rating}</td>
                  <td>
                    <button onClick={() => handleDownloadSubtitle(subtitle)}>
                      <FiDownload />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.SubtitleTable>
        </S.TableContainer>
      </S.Wrapper>
    </>
  );
}
