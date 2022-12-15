import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const PageLayoutMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const PageLayoutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const PageLayoutLeft = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;    
    width: 50%;
    height: 100%;
    padding: ${theme.spacing(45)} ${theme.spacing(50)}; 
    `}
`;

export const PageLayoutRight = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
