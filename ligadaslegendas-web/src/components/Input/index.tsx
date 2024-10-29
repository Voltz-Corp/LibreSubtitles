import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      icon,
      iconPosition = 'left',
      label,
      error,
      name,
      disabled = false,
      onInputChange,
      ...props
    },
    ref,
  ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onInputChange) onInputChange(event.target.value);
      if (props.onChange) props.onChange(event);
    };

    return (
      <S.Wrapper disabled={disabled} error={!!error}>
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.InputWrapper>
          {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
          <S.Input
            type="text"
            iconPosition={iconPosition}
            disabled={disabled}
            ref={ref}
            onChange={handleChange}
            name={name}
            {...(label ? { id: name } : {})}
            {...props}
          />
        </S.InputWrapper>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrapper>
    );
  },
);
