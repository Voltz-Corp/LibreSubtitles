import { IoCheckmarkOutline } from 'react-icons/io5';
import * as S from './styles';
import { Control, Controller } from 'react-hook-form';

type CheckboxProps = {
  label: string;
  name: string;
  control: Control<any>;
};

export function Checkbox({ label, name, control }: CheckboxProps) {
  return (
    <S.Wrapper>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <S.CheckboxRoot
            {...field}
            id={label}
            defaultChecked={false}
            checked={field.value}
            onCheckedChange={field.onChange}
            className="checkboxRoot"
          >
            <S.CheckboxIndicator className="checkboxIndicator">
              <IoCheckmarkOutline />
            </S.CheckboxIndicator>
          </S.CheckboxRoot>
        )}
      />
      <label htmlFor={label}>{label}</label>
    </S.Wrapper>
  );
}
