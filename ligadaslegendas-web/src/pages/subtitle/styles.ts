import styled, { css } from 'styled-components';
import { Container } from '../../components/Container';

export const Wrapper = styled(Container)``;

export const FooterSubtitle = styled.footer`
  ${({ theme }) => css`
    font-family: 'Rubik';
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;

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
    border-right: 2px solid ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};

    &:last-child {
      border: none;
    }
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
