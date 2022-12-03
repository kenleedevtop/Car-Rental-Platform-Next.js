import React from 'react';

export type TBarChartProps = React.HTMLAttributes<HTMLDivElement> & {
  labels: Array<string>;
  data: Array<number>;
  horizontalLabel?: string;
  verticalLabel?: string;
};
