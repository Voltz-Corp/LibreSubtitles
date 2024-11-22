import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import * as S from './styles';
import { useQuery } from '@tanstack/react-query';
import { Slider } from '../../components/Slider';
import { MovieCard } from '../../components/MovieCard';
import { TmdbService } from '../../services/http/TmdbService';
import { Search } from '../../components/Search';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';

export type MovieProps = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
};

export function LandingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchedMovie = searchParams.get('q');
  const debouncedSearchMovie = useDebounce(searchedMovie, 500);
  const navigate = useNavigate();

  const { data: trendingToday } = useQuery({
    queryKey: ['trending', 'day'],
    queryFn: () => TmdbService.getTrendingToday(),
  });

  const { data: popularInBrazil } = useQuery({
    queryKey: ['popular', 'brazil'],
    queryFn: () => TmdbService.getPopularMoviesBrazil(),
  });

  const { data: topRatedInternationally } = useQuery({
    queryKey: ['top-rated', 'international'],
    queryFn: () => TmdbService.getTopRatedInternationally(),
  });

  const { data: movies } = useQuery<MovieProps[]>({
    queryKey: ['movie', debouncedSearchMovie],
    queryFn: async () => await TmdbService.getMovieByName(searchedMovie),
    enabled: !!debouncedSearchMovie,
    staleTime: 0,
  });

  function handleRedirectToMoviePage(id: number) {
    navigate(`/filme/${id}`);
  }

  function handleSearch(value: string) {
    setSearchParams({ q: value });
  }

  return (
    <>
      <Helmet title="Início" />
      <HeaderNavigation />
      <Container>
        <S.SearchWrapper>
          <h1>Encontre o filme e baixe sua legenda!</h1>
          <Search
            onChange={(event) => handleSearch(event.target.value)}
            defaultValue={searchedMovie ? searchedMovie : ''}
          />
        </S.SearchWrapper>

        {!searchedMovie && (
          <>
            <S.MovieSliderContent>
              <S.HeadingTwo>Em alta</S.HeadingTwo>
              {trendingToday && (
                <Slider>
                  {trendingToday.map((movie: MovieProps) => (
                    <MovieCard
                      movie={movie}
                      className="keen-slider__slide"
                      onClick={() => handleRedirectToMoviePage(movie.id)}
                    />
                  ))}
                </Slider>
              )}
            </S.MovieSliderContent>

            <S.MovieSliderContent>
              <S.HeadingTwo>Brasil</S.HeadingTwo>
              {popularInBrazil && (
                <Slider>
                  {popularInBrazil.map((movie: MovieProps) => (
                    <MovieCard
                      movie={movie}
                      className="keen-slider__slide"
                      onClick={() => handleRedirectToMoviePage(movie.id)}
                    />
                  ))}
                </Slider>
              )}
            </S.MovieSliderContent>

            <S.MovieSliderContent>
              <S.HeadingTwo>Internacional</S.HeadingTwo>
              {topRatedInternationally && (
                <Slider>
                  {topRatedInternationally.map((movie: MovieProps) => (
                    <MovieCard
                      movie={movie}
                      className="keen-slider__slide"
                      onClick={() => handleRedirectToMoviePage(movie.id)}
                    />
                  ))}
                </Slider>
              )}
            </S.MovieSliderContent>
          </>
        )}

        {!!searchedMovie && (
          <>
            <S.MovieSliderContent>
              <S.HeadingTwo>Resultados: {searchedMovie}</S.HeadingTwo>
              {movies && (
                <Slider>
                  {movies?.map((movie: MovieProps) => (
                    <MovieCard
                      movie={movie}
                      className="keen-slider__slide"
                      onClick={() => handleRedirectToMoviePage(movie.id)}
                    />
                  ))}
                </Slider>
              )}
            </S.MovieSliderContent>
          </>
        )}
      </Container>
    </>
  );
}
