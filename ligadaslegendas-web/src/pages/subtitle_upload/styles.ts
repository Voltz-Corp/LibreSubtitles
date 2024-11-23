import styled, { css } from 'styled-components';
import { Wrapper as CheckboxWrapper } from '../../components/Checkbox/styles';
import { Container } from '../../components/Container';
import { Wrapper as SelectWrapper } from '../../components/Select/styles';

type UploadFormProps = {
  isDragging: boolean;
};

export const Wrapper = styled.main``;

export const SubtitleUploadContainer = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxlarge};

    h1 {
      text-align: center;
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`;

export const UploadForm = styled.form<UploadFormProps>`
  ${({ theme, isDragging }) => css`
    width: 100%;
    height: 32.6rem;
    border: 2px dashed ${theme.colors.primary};
    border-radius: ${theme.border.radius.medium};

    margin-top: ${theme.spacings.large};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: ${isDragging && theme.colors.primary_50};

    transition: all 0.3s;
    cursor: pointer;

    svg {
      font-size: 12.8rem;
      color: ${theme.colors.primary};
    }

    &:hover {
      background-color: ${theme.colors.primary_50};
    }
  `}
`;

export const Formats = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const FileList = styled.div`
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

export const File = styled.div`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius.xsmall};
    padding: 0.8rem;
    height: 9rem;
    position: relative;

    display: flex;
    gap: ${theme.spacings.xxsmall};

    p {
      color: ${theme.colors.primary};
      margin-top: 0.4rem;

      &:first-child {
        font-size: ${theme.font.sizes.large};
      }

      &:last-child {
        font-size: ${theme.font.sizes.small};
      }
    }

    button {
      height: 2.4rem;
      width: 2.4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      right: 1.2rem;
      top: 1.2rem;

      background: none;
      border: none;
      cursor: pointer;

      svg {
        font-size: ${theme.font.sizes.medium};
        color: ${theme.colors.black};
      }
    }
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius.xsmall};

    svg {
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.primary};
    }
  `}
`;

export const FileInput = styled.input`
  visibility: hidden;
`;

export const Fieldset = styled.fieldset`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.grid.gutter};
    width: 100%;
    margin-top: ${theme.spacings.medium};
    border: none;

    ${SelectWrapper} {
      width: 36rem;
    }

    ${CheckboxWrapper} {
      transform: translateY(+50%);
    }
  `}
`;

export const SubtitleUploadActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.medium};
    gap: ${theme.spacings.xxlarge};
  `}
`;
