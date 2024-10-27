import styled, { css } from 'styled-components';

export const SearchWrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    margin-top: ${theme.spacings.medium};

    h1 {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.quaternary};
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const HeadingTwo = styled.h2`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const MovieSliderContent = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxxlarge};
  `}
`;
