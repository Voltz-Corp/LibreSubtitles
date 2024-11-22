import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps } from '.';

type WrapperProps = {
  variant: 'primary' | 'secondary';
} & Pick<ButtonProps, 'size' | 'fullWidth'>;

const wrapperModifiers = {
  sm: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  md: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  lg: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
};

const variantModifiers = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.secondary};
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, variant }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: ${theme.border.radius.xlg};
    color: ${theme.colors.white};
    cursor: pointer;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.9);
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!variant && variantModifiers[variant](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth}
  `}
`;
