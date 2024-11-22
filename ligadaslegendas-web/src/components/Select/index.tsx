import * as S from './styles';
import { Control, Controller } from 'react-hook-form';

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOptions[];
  label?: string;
  name: string;
  control: Control<any>;

  isLoading?: boolean;
  placeholder?: string;
  onInputChange?: (value: string) => void;
};

export function Select({
  options,
  label,
  name,
  control,
  isLoading,
  placeholder,
  onInputChange,
}: SelectProps) {
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
            isLoading={isLoading}
            placeholder={placeholder}
            onInputChange={onInputChange}
          />
        )}
      />
    </S.Wrapper>
  );
}
