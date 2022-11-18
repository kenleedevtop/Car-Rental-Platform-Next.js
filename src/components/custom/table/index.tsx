import React from 'react';
import {
  TableWrapper,
  TableMain,
  TableHead,
  TableBody,
  TableHeadCell,
  TableBodyCell,
  TableHeadRow,
  TableBodyRow,
} from 'components/custom/table/styles';
import { TTableProps, TTableHeadItem } from 'components/custom/table/types';
import getObjectDynamicPath from 'utilities/extended-proto/index';

const Table = ({
  head = [],
  items = [],
  renderItem = (_a, b, _c, _d) => b,
}: TTableProps) => (
  <TableWrapper>
    <TableMain>
      <TableHead>
        <TableHeadRow>
          {head.map((x: any) => (
            <TableHeadCell key={x.reference}>{x.label}</TableHeadCell>
          ))}
        </TableHeadRow>
      </TableHead>
      {!!items.length && (
        <TableBody>
          {items.map((x: any, y: number) => (
            <TableBodyRow>
              {head.map((a: TTableHeadItem, b: number) => (
                <TableBodyCell>
                  {renderItem(
                    a,
                    {
                      index: b,
                      data: getObjectDynamicPath(x, a.reference),
                    },
                    {
                      index: y,
                      data: x,
                    },
                    items
                  )}
                </TableBodyCell>
              ))}
            </TableBodyRow>
          ))}
        </TableBody>
      )}
    </TableMain>
  </TableWrapper>
);

export default Table;
