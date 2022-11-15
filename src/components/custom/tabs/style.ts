import styled from '@emotion/styled';
import { Card } from 'components/ui';
import { Theme } from '@mui/material';

export const TabsMain = styled(Card)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const TabsLabel = styled.button<{ theme?: Theme; active: boolean }>`
  ${({ theme, active }) => `
    background: none;
    border: none;
    outline: none;
    padding: 5px 20px;
    border-bottom: 1px solid white;
    cursor: pointer;
    transition: border-color 0.25s ease-in-out;
    
    ${
      active
        ? `
    color: ${theme.palette.secondary.main};
    border-bottom-color: ${theme.palette.secondary.main};
    `
        : ''
    }

    

    `}
`;
