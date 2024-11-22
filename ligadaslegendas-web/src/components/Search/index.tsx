import { InputHTMLAttributes } from 'react';
import { Input } from '../Input';
import * as S from './styles';

type Search = {} & InputHTMLAttributes<HTMLInputElement>;

export function Search({ ...rest }: Search) {
  return (
    <S.Wrapper>
      <Input placeholder="Buscar..." {...rest} />
    </S.Wrapper>
  );
}
