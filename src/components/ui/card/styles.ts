import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const CardMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        background-color: ${theme.palette.common.white};
        border-radius: 8px;
        padding: ${theme.spacing(5)}; 
        box-shadow: 0px 2px 5px ${theme.palette.common.black}10;
    `}
`;
