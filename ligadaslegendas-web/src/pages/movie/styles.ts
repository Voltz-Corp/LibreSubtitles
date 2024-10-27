import styled, { css } from 'styled-components';
import { Container } from '../../components/Container';

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    max-width: ${theme.grid.secondContainer};
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const MovieContent = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const MovieInfo = styled.div`
  ${({ theme }) => css`
    width: 61rem;

    p {
      color: ${theme.colors.quaternary};
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.spacings.medium};
    }
  `}
`;

export const InfoHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    h2 {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xxlarge};
    }

    svg {
      font-size: ${theme.font.sizes.xxlarge};
      stroke: none;
      fill: ${theme.colors.primary};
      margin: 0 ${theme.spacings.xsmall};
    }

    span {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.primary};
      font-weight: 600;
    }
  `}
`;

export const MoviePoster = styled.img`
  border-radius: ${({ theme }) => theme.border.radius.medium};
`;
