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

export const Profile = styled.div`
  ${({ theme }) => css`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
