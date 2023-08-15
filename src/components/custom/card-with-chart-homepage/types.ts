import React, { ReactNode } from 'react';

export type TChartData = {
  values: Array<number>;
  labels: Array<string>;
};

export type TCardWithChartProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  smallIcon?: ReactNode;
  title: string;
  count: number;
  percent: number;
  chartData: TChartData;
  actions: boolean;
  type: 'PF' | 'AR' | 'AB';
  values: Array<{
    label: string;
    value: number;
  }>;
  total: number;
  buttonLabel: string;
  buttonLink?: string;
};
