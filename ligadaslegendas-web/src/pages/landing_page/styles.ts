import styled, { css } from 'styled-components';

export const SearchWrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary_50};
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    margin-top: ${theme.spacings.medium};

    h1 {
      font-size: ${theme.font.sizes.xlarge};
      color: ${theme.colors.primary_900};
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
