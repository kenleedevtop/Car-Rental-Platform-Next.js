import styled from '@emotion/styled';
import { Theme } from '@mui/material';

export const GridCellMain = styled.div<{
  rowSpan?: number;
  columnSpan?: number;
}>`
  ${({ rowSpan, columnSpan }) => `
    grid-column: span ${columnSpan};
    grid-row: span ${rowSpan};
    `}
`;
