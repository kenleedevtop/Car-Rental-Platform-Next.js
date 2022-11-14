import React, { ReactNode } from 'react';

export type TCardWithChartProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  count: number;
  percent: number;
};
