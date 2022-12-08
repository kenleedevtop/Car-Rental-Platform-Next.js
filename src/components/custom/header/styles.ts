import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const HeaderMain = styled.header<{ theme?: Theme }>`
  ${({ theme }) => `
        position: fixed;
        top: 0;
        width: 100%;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${theme.spacing(50)};
        `}
`;

export const HeaderLogo = styled.img``;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  width: 20%;

  button {
    border-radius: 20rem;
    font-weight: 800px;
    font-size: 18px;
  }
`;
