import { Indicator, Root } from '@radix-ui/react-checkbox';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    button {
      all: unset;
    }

    .checkboxRoot {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.white};

      width: 2.4rem;
      height: 2.4rem;
      border-radius: ${theme.border.radius.xxsmall};
      border: 1px solid ${theme.colors.lightGray};

      transition: all 0.3s;
    }
    .checkboxRoot:hover {
      background-color: ${theme.colors.secondary};
    }
    .checkboxRoot:focus {
      box-shadow: 0 0 0 2px ${theme.colors.primary};
    }

    .checkboxIndicator {
      color: ${theme.colors.primary};
    }

    label {
      color: ${theme.colors.primary};
      padding-left: 15px;
      font-size: 15px;
      line-height: 1;
    }

    svg {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const CheckboxRoot = styled(Root)``;
export const CheckboxIndicator = styled(Indicator)``;
