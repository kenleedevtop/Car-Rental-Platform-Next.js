import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const IconWithTextMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 40px auto;
    align-items: center;
    gap: ${theme.spacing(4)}
    `}
`;

export const IconWithTextIcon = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${theme.palette.primary.main};
    display: grid;
    place-items: center;
    
    & svg{
        color: #fff;
    }

    `}
`;

export const IconWithTextText = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)}
    `}
`;

export const IconWithTextTitle = styled.div`
  color: #7e839f;
`;

export const IconWithTextP = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    font-weight: 400;
    font-size: 10px
    `}
`;
