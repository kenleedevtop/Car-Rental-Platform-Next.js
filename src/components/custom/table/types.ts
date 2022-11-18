import React, { ReactNode } from 'react';

export type TTableHeadItem = {
  reference: string;
  label: string;
  data?: {
    [key: string]: any;
  };
};

export type TTableColumnData = {
  index: number;
  data: any;
};

export type TTableRowData = {
  index: number;
  data: any;
};

export type TTableProps = React.HTMLAttributes<HTMLDivElement> & {
  head: Array<TTableHeadItem>;
  items: Array<any>;
  renderItem: (
    a: TTableHeadItem,
    b: TTableColumnData,
    c: TTableRowData,
    d: Array<any>
  ) => void;
  emptyActions?: Array<ReactNode>;
};
