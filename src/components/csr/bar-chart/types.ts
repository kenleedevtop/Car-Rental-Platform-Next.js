import React from 'react';

export type TBarChartData = {
  values: Array<number>;
  color: string;
};

export type TBarChartProps = React.HTMLAttributes<HTMLDivElement> & {
  labels: Array<string>;
  data: Array<TBarChartData>;
  horizontalLabel?: string;
  verticalLabel?: string;
};
