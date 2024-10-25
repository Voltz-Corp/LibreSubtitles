import { MovieProps } from '../../pages/landing_page';
import * as S from './styles';

export type MovieCardProps = {
  backgroundImage?: string;
  className?: string;
  movie?: MovieProps;
} & React.HTMLAttributes<HTMLDivElement>;

export function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <S.Wrapper
      backgroundImage={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
      className={className}
    ></S.Wrapper>
  );
}
