import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const PageLayoutMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const PageLayoutContent = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    ${theme.breakpoints.down('md')} {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: 1fr 1fr;
      gap: 100px;
    }   
  `}
`;

export const PageLayoutLeft = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    place-items: center;
    height: 100%;
    ${theme.breakpoints.down('md')} {
      padding: 12px 18px !important;
    }
    ${theme.breakpoints.up('md')} {
      padding: 24px 2.5% 0;
    }
    ${theme.breakpoints.up('lg')} {
      padding: 24px 7.5% 0;
    }
    ${theme.breakpoints.up('xl')} {
      padding: 24px 7.5% 0 12.5%; 
    }
    `}
`;

export const PageLayoutRight = styled.img<{ theme?: Theme }>`
  ${({ theme }) => `
      width: min(50%, 900px);
      height: 100%;
      background-size: cover;
      object-fit: cover;

      ${theme.breakpoints.down('md')} {
        width: 100%;
        height: 100%;
        order: -1;
        margin-top: 150px;
      }
    `}
`;
