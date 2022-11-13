import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const InputBoxMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
    background-color: ${theme.palette.common.white};
    border-radius: 4px;
    border-width: 1px;
    border-color: ${theme.palette.common.black}20;
    border-style: solid;
    padding: 0 ${theme.spacing(2)};
    cursor: text;
  `}
`;
