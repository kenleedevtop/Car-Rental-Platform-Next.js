import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const PageLayoutMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  `}
`;

export const PageLayoutContent = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    
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
      padding: 150px 2.5% 150px;
    }
    ${theme.breakpoints.up('lg')} {
      padding: 150px 7.5% 150px;
    }
    ${theme.breakpoints.up('xl')} {
      padding: 150px 7.5% 150px 12.5%; 
    }
    `}
`;

export const PageLayoutRight = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
      width: min(45%, 900px);
      height: 100%;
      display: grid;
      grid-template-columns: auto;

      ${theme.breakpoints.down('md')} {
        width: 100%;
        height: 100%;
        order: -1;
        margin-top: 150px;
      }
    `}
`;

export const PageLayoutRightImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
