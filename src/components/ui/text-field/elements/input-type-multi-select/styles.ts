import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { InputBox } from 'components/ui/text-field/elements';

export const InputTypeMultiSelectMain = styled.input<{ theme?: Theme }>`
  background: none;
  border: none;
  outline: none;
  padding: 0;
  flex: 1 auto;
`;

export const InputTypeMultiSelectDropdown = styled(InputBox)<{ theme?: Theme }>`
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

export const InputTypeMultiSelectDropdownOption = styled.div<{ theme?: Theme }>`
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

export const InputTypeMultiSelectValue = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      flex: 1 auto;
      min-height: 36px;
      display: flex;
      align-items: center;
      font-size: 14px;
      gap: ${theme.spacing(2)};
      flex-wrap: wrap;
      padding: ${theme.spacing(1.85)} 0;
    `}
`;
