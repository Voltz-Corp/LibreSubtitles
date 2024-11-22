import { FaStar } from 'react-icons/fa';
import * as S from './styles';
import { HTMLAttributes } from 'react';

export type StarProps = {
  filled: boolean;
  size?: 'md' | 'sm';
} & HTMLAttributes<HTMLDivElement>;

export function Star({ filled, size = 'md', ...rest }: StarProps) {
  return (
    <S.Wrapper filled={filled} size={size} {...rest}>
      <FaStar />
    </S.Wrapper>
  );
}
