import styled, { css } from 'styled-components';
import { Wrapper as CheckboxWrapper } from '../../components/Checkbox/styles';
import { Container } from '../../components/Container';
import { Wrapper as SelectWrapper } from '../../components/Select/styles';

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

export const UploadForm = styled.form`
  ${({ theme }) => css`
    width: 100%;
    height: 32.6rem;
    border: 2px dashed ${theme.colors.primary};
    border-radius: ${theme.border.radius.medium};

    margin-top: ${theme.spacings.large};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    transition: all 0.3s;
    cursor: pointer;

    svg {
      font-size: 12.8rem;
      color: ${theme.colors.primary};
    }

    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `}
`;

export const Formats = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
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
