import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
`;

export const Slider = styled.div`
  .keen-slider__slide {
    cursor: pointer;
  }
`;

export const SlideNavigation = styled.div``;

const ArrowButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    background-color: transparent;
    border: none;

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 100%;
    width: 5rem;

    transition: all 0.3s;

    cursor: pointer;

    svg {
      visibility: hidden;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);

      svg {
        visibility: visible;
      }
    }
  `}
`;

export const ArrowLeft = styled(ArrowButton)`
  left: 0;
  border-top-left-radius: ${({ theme }) => theme.border.radius.medium};
  border-bottom-left-radius: ${({ theme }) => theme.border.radius.medium};
`;

export const ArrowRight = styled(ArrowButton)`
  right: 0;
  border-top-right-radius: ${({ theme }) => theme.border.radius.medium};
  border-bottom-right-radius: ${({ theme }) => theme.border.radius.medium};
`;
