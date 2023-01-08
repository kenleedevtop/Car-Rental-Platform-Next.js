import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const IconWithTextMain = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    gap: ${theme.spacing(4)}
    `}
`;

export const IconWithTextIcon = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 60px;
    height: 60px;
    border-radius: 40px;
    background-color: ${theme.palette.primary.main};
    display: grid;
    place-items: center;
    margin-right: ${theme.spacing(4)};
    
    & svg{
        color: #fff;
        width: 40px;
        height: 40px;
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
  font-size: 22px;
`;

export const IconWithTextP = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    color: ${theme.palette.primary.main};
    font-weight: 400;
    font-size: 14px;
    `}
`;