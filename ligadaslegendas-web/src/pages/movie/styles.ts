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
  gap: ${({ theme }) => theme.spacings.large};

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

export const MovieInfo = styled.div`
  ${({ theme }) => css`
    width: 80rem;

    p {
      color: ${theme.colors.primary_900};
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.spacings.medium};
      text-align: justify;
      letter-spacing: 0.05rem;
      margin: ${theme.spacings.small} 0;

      &:first-child {
        font-weight: ${theme.font.bold};
      }
    }

    @media (max-width: 780px) {
      width: 100%;
    }
  `}
`;

export const InfoHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    h2 {
      color: ${theme.colors.primary_900};
      font-size: ${theme.font.sizes['3xlarge']};
    }

    svg {
      font-size: ${theme.font.sizes.xxlarge};
      stroke: none;
      fill: ${theme.colors.secondary};
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
  height: 32rem;
`;

export const TableContainer = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary_50};
    border-radius: ${theme.border.radius.xxsmall};
    width: 100%;
    margin-top: ${theme.spacings.medium};

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: calc(${theme.spacings.small} - 0.4rem) ${theme.spacings.small};

      div {
        display: flex;
        align-items: center;
        gap: ${theme.spacings.small};
      }
    }

    h3 {
      color: ${theme.colors.primary_700};
      font-size: ${theme.font.sizes.large};
    }

    @media (max-width: 560px) {
      overflow-x: scroll;

      > div {
        flex-direction: column;
        align-items: normal;
        gap: ${theme.spacings.xsmall};

        div {
          button {
            width: 100%;
          }
        }
      }
    }
  `}
`;

export const SubtitleTable = styled.table`
  ${({ theme }) => css`
    border-collapse: collapse;
    text-align: left;

    width: 100%;

    tr {
      border-bottom: 1px solid ${theme.colors.lightGray};
    }

    thead tr {
      border-top: 1px solid ${theme.colors.lightGray};
      border-bottom: 1px solid ${theme.colors.lightGray};
    }

    thead th {
      color: ${theme.colors.primary_700};
      font-weight: 500;
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      font-size: ${theme.font.sizes.medium};
    }

    tbody tr:last-child {
      border-bottom: none;
    }

    tbody td {
      padding: ${theme.spacings.xsmall} ${theme.spacings.small};
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.small};
    }

    tbody td button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: none;
      border: none;
      cursor: pointer;

      svg {
        font-size: ${theme.font.sizes.xlarge};
        color: ${theme.colors.primary};
      }
    }

    a {
      color: ${theme.colors.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  `}
`;
