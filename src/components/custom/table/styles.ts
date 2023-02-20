import styled from '@emotion/styled';
import { IconButton, Theme } from '@mui/material';
import { DragControls } from 'framer-motion';

export const TableWrapper = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    border-radius: 4px;
    border: 1px solid ${theme.palette.common.black}20;
    background-color: ${theme.palette.common.white};
  `}
`;

export const TableMain = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  width: 100%;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableHeadRow = styled.tr<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.secondary.main}10;
    border-bottom: 1px solid ${theme.palette.secondary.main}20;
  `}
`;

export const TableBodyRow = styled.tr<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.common.white};
    &:not(:last-child) {
        border-bottom: 1px solid ${theme.palette.common.black}20;
    }
  `}
`;

export const TableHeadCell = styled.th<{ theme?: Theme; action?: boolean }>`
  ${({ theme, action }) => `
        padding: ${theme.spacing(5)};
        text-align: left;
        color: ${theme.palette.primary.main};
        font-weight: 500;
        cursor: pointer;
        ${
          action
            ? `
          min-width: 50px;
          width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
        `
            : ''
        }
    `}
`;

export const TableBodyCell = styled.td<{ theme?: Theme }>`
  ${({ theme }) => `
        padding: ${theme.spacing(5)};;
        text-align: left;
        color: ${theme.palette.common.gray[10]};
    `}
`;

export const TableEmpty = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: ${theme.spacing(5)};
    min-height: 200px;
    color: ${theme.palette.common.gray[6]};
    font-size: 18px;
    font-weight: 300;
  `}
`;

export const TableHeadCellAction = styled(IconButton)``;
