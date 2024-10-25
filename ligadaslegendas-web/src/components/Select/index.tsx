import * as S from './styles';

type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOptions[];
  label?: string;
};

export function Select({ options, label }: SelectProps) {
  return (
    <S.Wrapper>
      {!!label && <S.Label>{label}</S.Label>}
      <S.StyledSelect
        options={options}
        defaultValue={options[0]}
        classNamePrefix="select"
        className="custom"
      />
    </S.Wrapper>
  );
}
