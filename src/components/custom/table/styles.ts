import styled from '@emotion/styled';
import { Card } from 'components/ui';

export const TableWrapper = styled(Card)`
  padding: 0;
  overflow: hidden;
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

export const TableHeadRow = styled.tr<any>`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.primary.main}10;
    border-bottom: 1px solid ${theme.palette.primary.main}20;
  `}
`;

export const TableBodyRow = styled.tr<any>`
  ${({ theme }) => `
    width: 100%;
    background-color: ${theme.palette.common.white};
    &:not(:last-child) {
        border-bottom: 1px solid ${theme.palette.common.black}20;
    }
    &:nth-of-type(even) {
        background-color: ${theme.palette.common.black}05;
    }
  `}
`;

export const TableHeadCell = styled.th<any>`
  ${({ theme }) => `
        padding: ${theme.spacing(2)} ${theme.spacing(5)};
        text-align: left;
        color: ${theme.palette.primary.light}c0;
        font-weight: 400;
        cursor: pointer;
        &:hover {
            background-color: ${theme.palette.primary.main}10;
        }
        // &:not(:last-child) {
        //     border-right: 1px solid ${theme.palette.primary.main}20;
        // }
    `}
`;

export const TableBodyCell = styled.td<any>`
  ${({ theme }) => `
        padding: ${theme.spacing(2)} ${theme.spacing(5)};
        text-align: left;
        // &:not(:last-child) {
        //     border-right: 1px solid ${theme.palette.common.black}20;
        // }
    `}
`;

export const TableEmptyMain = styled.div<any>`
  ${({ theme }) => `
        width: 100%;
        padding: ${theme.spacing(20)};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: ${theme.spacing(5)};
    `}
`;

export const TableEmptyIcon = styled.div<any>`
  ${({ theme }) => `
    width: 150px;
    height: 150px;
    color: ${theme.palette.primary.main};
    svg {
      width: 100%;
      height: 100%;
    }
  `}
`;
