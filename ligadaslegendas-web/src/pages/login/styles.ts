import styled, { css } from 'styled-components';
import { Wrapper as InputWrapper } from '../../components/Input/styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary_50};
  padding: ${({ theme }) => theme.spacings.medium} 0;
  height: 56.8rem;
  transform: translateY(25%);
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.medium};
  `}
`;

export const Login = styled.form`
  ${({ theme }) => css`
    max-width: 360px;
    width: 100%;

    ${InputWrapper} {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const SignUpContent = styled.div`
  ${({ theme }) => css`
    max-width: 360px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.xlarge};

    p {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.primary};
    }
  `}
`;
