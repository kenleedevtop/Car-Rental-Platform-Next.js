import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const ChangePasswordModalMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
    ${theme.breakpoints.down(768)} {
      grid-template-columns: 1fr;
      
      max-height: 500px;
      overflow-y: scroll;
      padding-right: 10px;
    }
  `}
`;
