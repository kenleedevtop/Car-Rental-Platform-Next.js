import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const GridMain = styled.div<{
  theme?: Theme;
  rows?: number;
  columns?: number;
}>`
  ${({ theme, rows, columns }) => `
        display: grid;
        grid-template-rows: ${rows ? `repeat(${rows}, 1fr)` : 'auto'};
        grid-template-columns: ${columns ? `repeat(${columns}, 1fr)` : 'auto'};
        gap: ${theme.spacing(5)};
    `}
`;
