import styled, { css, DefaultTheme } from 'styled-components';
import { StarProps } from '.';

const wrapperModifiers = {
  sm: (theme: DefaultTheme) => css`
    width: 3.2rem;
    height: 3.2rem;

    svg {
      font-size: ${theme.font.sizes.large};
    }
  `,
  md: (theme: DefaultTheme) => css`
    width: 4rem;
    height: 4rem;

    svg {
      font-size: ${theme.font.sizes.xlarge};
    }
  `,
};

export const Wrapper = styled.div<StarProps>`
  ${({ theme, filled, size, role }) => css`
    border-radius: 50%;
    background-color: ${filled
      ? theme.colors.secondary
      : theme.colors.lightGray};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    svg {
      fill: white;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${role === 'button' &&
    css`
      cursor: pointer;
    `}
  `}
`;
