import * as S from './styles';
import { Control, Controller } from 'react-hook-form';

type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOptions[];
  label?: string;
  name: string;
  control: Control<any>;
};

export function Select({ options, label, name, control }: SelectProps) {
  return (
    <S.Wrapper>
      {!!label && <S.Label>{label}</S.Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={options[0]}
        render={({ field }) => (
          <S.StyledSelect
            {...field}
            options={options}
            defaultValue={options[0]}
            classNamePrefix="select"
            className="custom"
          />
        )}
      />
    </S.Wrapper>
  );
}
