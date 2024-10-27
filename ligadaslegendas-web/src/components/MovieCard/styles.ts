import styled, { css } from 'styled-components';
import { MovieCardProps } from '.';

export const Wrapper = styled.div<MovieCardProps>`
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 50rem;
    border-radius: ${({ theme }) => theme.border.radius.medium};
  `}
`;
