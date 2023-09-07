import styled from '@emotion/styled';
import { IconButton, Theme } from '@mui/material';

export const TableWrapper = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    border-radius: 4px;
    background-color: ${theme.palette.common.white};

    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
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
  `}
`;

export const TableBodyRow = styled.tr<{ theme?: Theme }>`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.common.white};
    border-bottom: 1px solid ${theme.palette.common.black}20;
  `}
`;

export const TableHeadCell = styled.th<{ theme?: Theme; action?: boolean }>`
  ${({ theme, action }) => `
        padding: ${theme.spacing(5)};
        text-align: left;
        color: ${theme.palette.primary.main};
        font-weight: 500;
        white-space: nowrap; 
        &:not(:first-of-type) {
          text-align: center;
        }
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
        padding: ${theme.spacing(5)};
        text-align: left;
        color: ${theme.palette.common.gray[10]};
        white-space: nowrap; 

        &:not(:first-of-type) {
          text-align: center;
        }
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
    min-height: 325px;
    color: ${theme.palette.common.gray[6]};
    font-size: 18px;
    font-weight: 300;
  `}
`;

export const TableHeadCellAction = styled(IconButton)``;
