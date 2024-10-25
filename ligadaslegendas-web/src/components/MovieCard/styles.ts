import styled, { css } from 'styled-components';
import { MovieCardProps } from '.';

export const Wrapper = styled.div<MovieCardProps>`
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
    background-size: cover;
    width: 100%;
    height: 20rem;
    border-radius: ${({ theme }) => theme.border.radius.medium};
  `}
`;
