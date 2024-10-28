import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.secondary};

    img {
      width: 30rem;
      cursor: pointer;
    }
  `}
`;

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
    }

    a {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;
