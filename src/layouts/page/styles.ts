import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const PageMain = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const PageLeft = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;    
    width: 50%;
    height: 100%;
    padding: ${theme.spacing(45)} ${theme.spacing(50)}; 
    `}
`;

export const PageRight = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
