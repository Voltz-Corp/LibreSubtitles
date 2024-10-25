import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  as?: React.ElementType;
  variant?: 'primary' | 'secondary';
} & ButtonTypes;

export function Button({
  children,
  size = 'md',
  fullWidth = false,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} variant={variant} {...rest}>
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
}
