import styled, { css } from 'styled-components';
import { Wrapper as Button } from '../Button/styles';

type ResponsiveMenuProps = {
  isMenuVisible: boolean;
};

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.primary_50};
    position: relative;

    img {
      width: 30rem;
      cursor: pointer;
    }

    @media (max-width: 1090px) {
      padding: ${theme.spacings.xsmall};

      img {
        width: 20rem;
      }
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
      color: ${theme.colors.primary_900};
      font-size: ${theme.font.sizes.medium};
      letter-spacing: 0.05rem;
    }

    @media (max-width: 1090px) {
      display: none;
    }
  `}
`;

export const ResponsiveNavigation = styled.nav`
  @media (min-width: 1090px) {
    display: none;
  }
`;

export const ResponsiveNavigationList = styled.div<ResponsiveMenuProps>`
  ${({ theme, isMenuVisible }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: ${isMenuVisible ? '7.3rem' : '8.3rem'};
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.small};
    visibility: ${isMenuVisible ? 'visible' : 'hidden'};
    opacity: ${isMenuVisible ? 1 : 0};
    z-index: ${theme.layers.alwaysOnTop};
    transition: all 0.3s ease-in-out;

    ul {
      list-style-type: none;
    }

    li {
      border-bottom: 1px solid ${theme.colors.lightGray};
      padding: ${theme.spacings.xsmall} 0;
    }

    a {
      color: ${theme.colors.primary_900};
      font-size: ${theme.font.sizes.large};
      letter-spacing: 0.05rem;
    }

    ${Button} {
      margin-bottom: 7.3rem;
    }
  `}
`;

export const HamburguerMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  background: none;
  width: 6rem;

  .hamburger-inner {
    width: 3.2rem;

    &::after {
      width: 3.2rem;
    }

    &::before {
      width: 3.2rem;
    }
  }
`;

export const Profile = styled.div`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1090px) {
      margin-bottom: 7.3rem;
    }
  `}
`;
