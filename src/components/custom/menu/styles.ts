import styled from '@emotion/styled';
import { Card } from 'components/ui';
import { Theme } from '@mui/material';

export const MenuMain = styled(Card)<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(4)}
    `}
`;

export const MenuItem = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)}
    
    `}
`;

export const MenuItemIcon = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `    

    width: 14px;
    height: 14px;   
    display: grid;
    place-items: center;
    color: ${theme.palette.common.gray[8]}80;
    
    svg{
        width: 100%;
        height: 100%;
        
    }
`}
`;

export const MenuItemLabel = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    font-size: 12px;
    color: ${theme.palette.common.gray[8]};
    
    `}
`;
