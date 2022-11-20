import React, { ReactNode } from 'react';

export type TChartData = {
  values: Array<number>;
  labels: Array<string>;
};

export type TCardWithChartProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  count: number;
  percent: number;
  chartData: TChartData;
};
