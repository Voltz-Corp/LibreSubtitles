import { MovieProps } from '../../pages/landing_page';
import * as S from './styles';

export type MovieCardProps = {
  backgroundImage?: string;
  movie?: MovieProps;
} & React.HTMLAttributes<HTMLDivElement>;

export function MovieCard({ movie, ...rest }: MovieCardProps) {
  return (
    <S.Wrapper
      backgroundImage={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
      {...rest}
    ></S.Wrapper>
  );
}
