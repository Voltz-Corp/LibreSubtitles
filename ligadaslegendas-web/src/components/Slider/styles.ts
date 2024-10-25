import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
`;

export const Slider = styled.div``;

export const SlideNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 72px;

  /* .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.lightGray};
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: ${({ theme }) => theme.colors.primary};
  } */
`;

const ArrowButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    background-color: transparent;
    border: none;

    position: absolute;
    top: 37%;
    transform: translateY(-50%);
    height: 73%;
    width: 5rem;

    transition: all 0.3s;

    cursor: pointer;

    svg {
      visibility: hidden;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.4);

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
