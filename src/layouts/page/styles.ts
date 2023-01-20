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
    
    ${theme.breakpoints.down('sm')} {
      margin-top: 100px !important;
      flex-direction: column-reverse;
    }  
    ${theme.breakpoints.down('md')} {
      margin-top: 500px;
      flex-direction: column-reverse;
    }  
  `}
`;

export const PageLayoutLeft = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;    
    width: 50%;
    height: 100%;
    ${theme.breakpoints.up('xs')} {
      padding: ${theme.spacing(10)} ${theme.spacing(5)};
    }
    ${theme.breakpoints.up('sm')} {
      padding: ${theme.spacing(10)} ${theme.spacing(10)};
    }
    ${theme.breakpoints.down('md')} {
      width: 100%;
    }
    ${theme.breakpoints.up('md')} {
      padding: ${theme.spacing(45)} ${theme.spacing(15)};
    }
    ${theme.breakpoints.up('lg')} {
      padding: ${theme.spacing(45)} ${theme.spacing(25)};
    }
    ${theme.breakpoints.up('xl')} {
      padding: ${theme.spacing(45)} ${theme.spacing(50)};
    }
    `}
`;

export const PageLayoutRight = styled.img<{ theme?: Theme }>`
  ${({ theme }) => `
      width: 50%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      ${theme.breakpoints.down('md')} {
        width: 100%;
      }
    `}
`;
