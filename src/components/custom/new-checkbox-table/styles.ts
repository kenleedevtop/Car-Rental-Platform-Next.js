import styled from '@emotion/styled';
import { Theme } from '@mui/material';
import { Stack } from 'components/system';

export const TableContainer = styled(Stack)``;

export const TableWrapper = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    border-radius: 4px;
    background-color: ${theme.palette.common.white};
    overflow-x: scroll;
    overflow-y: hidden;
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

export const TableHeadCell = styled.th<{ theme?: Theme; action?: string }>`
  ${({ theme, action }) => `
        padding: ${theme.spacing(5)};
        text-align: center;
        color: ${theme.palette.primary.main};
        font-weight: 500;
        white-space: nowrap; 
        ${
          action === 'true'
            ? `
          padding: ${theme.spacing(6)} ${theme.spacing(5)} ${theme.spacing(
                6
              )} ${theme.spacing(5)};
          min-width: 50px;
          width: 50px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          // padding-right: 0 !important;
          padding-right: unset;
          margin: unset;
          padding: 1.5rem 1.25rem 1.5rem 1.25rem
        `
            : ''
        }

        &:first-of-type {
          text-align: left;
        }

        
    `}
`;

export const TableBodyCell = styled.td<{ theme?: Theme; action?: string }>`
  ${({ theme, action }) => `
        padding: ${theme.spacing(5)};
        text-align: center;
        color: ${theme.palette.common.gray[10]};
        white-space: nowrap; 

                ${
                  action === 'true'
                    ? `
          padding: ${theme.spacing(8)} ${theme.spacing(5)} ${theme.spacing(
                        8
                      )} ${theme.spacing(5)};
          min-width: 50px;
          width: 50px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding-right: 0 !important;
        `
                    : ''
                }

        &:first-of-type {
          text-align: left;
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
    min-height: 200px;
    color: ${theme.palette.common.gray[6]};
    font-size: 18px;
    font-weight: 300;
  `}
`;

export const TableHeadCellAction = styled.div`
  min-width: 50px;
  width: 50px;
  max-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  cursor: pointer;
`;
