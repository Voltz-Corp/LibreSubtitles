import styled, { css } from 'styled-components';
import { Container } from '../../components/Container';

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 20rem;
    max-width: ${theme.grid.secondContainer};
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const MovieInfo = styled.div``;

export const Title = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.small};

    p {
      font-size: ${theme.font.sizes['3xlarge']};
      font-weight: ${theme.font.bold};
      margin: ${theme.spacings.xxsmall} 0;
    }

    button {
      width: 3.2rem;
      height: 3.2rem;
      border: none;
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
      border-radius: ${theme.border.radius.xxsmall};
      cursor: pointer;

      svg {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`;

export const MovieDetails = styled.div`
  ${({ theme }) => css`
    p {
      color: ${theme.colors.primary_900};
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.spacings.medium};
      text-align: justify;
      letter-spacing: 0.05rem;

      &:first-child {
        font-weight: ${theme.font.bold};
      }
    }
  `}
`;

export const FooterSubtitle = styled.footer`
  ${({ theme }) => css`
    font-family: 'Rubik';
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    height: 16rem;

    color: ${theme.colors.primary_900};

    strong {
      font-size: ${theme.font.sizes['3xlarge']};

      span {
        font-size: ${theme.font.sizes['4xlarge']};
      }
    }

    p {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;

export const GridItem = styled.div`
  ${({ theme }) => css`
    display: grid;
    border-right: 2px solid ${theme.colors.primary};
    padding: ${theme.spacings.small} 0;

    &:not(:first-child) {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    }

    button {
      margin-left: auto;
    }

    &:last-child {
      border: none;
    }
  `}
`;

export const ProfilePicture = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.4rem;
    height: 6.4rem;
    background-color: ${theme.colors.primary};
    border-radius: 50%;

    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary_50};
  `}
`;

export const StarList = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};
    margin: ${theme.spacings.xxsmall} 0;
  `}
`;
