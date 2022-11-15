import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { InputBox } from 'components/ui/text-field/elements';

export const InputTypeSelectMain = styled.input<{ theme?: Theme }>`
  ${({ theme }) => `
    background: none;
    border: none;
    outline: none;
    padding: ${theme.spacing(2.5)} 0;
    flex: 1 auto;
  `}
`;

export const InputTypeSelectDropdown = styled(InputBox)<{ theme?: Theme }>`
  ${({ theme }) => `
    position: absolute;
    left: -1px;
    top: 100%;
    width: calc(100% + 2px);
    z-index: ${theme.zIndex.drawer};
    display: block;
    overflow: hidden;
    padding: 0;
  `}
`;

export const InputTypeSelectDropdownOption = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    padding: ${theme.spacing(2)} ${theme.spacing(2)};
    cursor: pointer;
    font-size: 14px;
    &:hover {
      background-color: ${theme.palette.primary.main}20;
    }
  `}
`;

export const InputTypeSelectValue = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      flex: 1 auto;
      min-height: 36px;
      display: flex;
      align-items: center;
      font-size: 14px;
      gap: ${theme.spacing(5)};
      justify-content: space-between;
    `}
`;

export const InputTypeSelectValueClear = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      width: 18px;
      height: 18px;
      border-radius: 20px;
      background-color: ${theme.palette.primary.main}20;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: ${theme.palette.primary.main}f0;
      svg {
        width: 10px;
        height: 10px;
      }
      &:hover {
        background-color: ${theme.palette.primary.main}40;
      }
    `}
`;

export const InputTypeSelectValueRender = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      padding: ${theme.spacing(1.85)} 0;
  `}
`;
