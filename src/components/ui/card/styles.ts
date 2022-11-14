import { keyframes } from '@emotion/css';
import styled from '@emotion/styled';
import { Theme } from '@mui/material';

const animation = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

export const CardMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
        background-color: ${theme.palette.common.white};
        border-radius: 8px;
        padding: ${theme.spacing(5)}; 
        box-shadow: 0px 2px 5px ${theme.palette.common.black}10;
        animation: ${animation} 500ms ease-in-out forwards;
    `}
`;
