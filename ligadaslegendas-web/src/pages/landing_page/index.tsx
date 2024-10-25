import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container';
import { HeaderNavigation } from '../../components/HeaderNavigation';
import * as S from './styles';
import { useQuery } from '@tanstack/react-query';
import { Slider } from '../../components/Slider';
import { MovieCard } from '../../components/MovieCard';
import { TmdbService } from '../../services/http/TmdbService';
import { Search } from '../../components/Search';

export type MovieProps = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
};

export function LandingPage() {
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

  console.log(trendingToday);

  return (
    <>
      <Helmet title="Início" />
      <HeaderNavigation />
      <Container>
        <S.SearchWrapper>
          <h1>Encontre o filme e baixe sua legenda!</h1>
          <Search />
        </S.SearchWrapper>

        <S.MovieSliderContent>
          <S.HeadingTwo>Em alta</S.HeadingTwo>
          {trendingToday && (
            <Slider>
              {trendingToday.map((movie: MovieProps) => (
                <MovieCard movie={movie} className="keen-slider__slide" />
              ))}
            </Slider>
          )}
        </S.MovieSliderContent>

        <S.MovieSliderContent>
          <S.HeadingTwo>Brasil</S.HeadingTwo>
          {popularInBrazil && (
            <Slider>
              {popularInBrazil.map((movie: MovieProps) => (
                <MovieCard movie={movie} className="keen-slider__slide" />
              ))}
            </Slider>
          )}
        </S.MovieSliderContent>

        <S.MovieSliderContent>
          <S.HeadingTwo>Internacional</S.HeadingTwo>
          {topRatedInternationally && (
            <Slider>
              {topRatedInternationally.map((movie: MovieProps) => (
                <MovieCard movie={movie} className="keen-slider__slide" />
              ))}
            </Slider>
          )}
        </S.MovieSliderContent>
      </Container>
    </>
  );
}
