import { IoCheckmarkOutline } from 'react-icons/io5';
import * as S from './styles';

type CheckboxProps = {
  label: string;
};

export function Checkbox({ label }: CheckboxProps) {
  return (
    <S.Wrapper>
      <S.CheckboxRoot id={label} className="checkboxRoot">
        <S.CheckboxIndicator className="checkboxIndicator">
          <IoCheckmarkOutline />
        </S.CheckboxIndicator>
      </S.CheckboxRoot>
      <label htmlFor={label}>{label}</label>
    </S.Wrapper>
  );
}
