import React from 'react';

export type TBubbleChartData = {
  values: Array<{
    x: number;
    y: number;
    r: number;
  }>;
  color: string;
};

export type TBubbleChartProps = React.HTMLAttributes<HTMLDivElement> & {
  labels: Array<string>;
  data: Array<TBubbleChartData>;
  horizontalLabel?: string;
  verticalLabel?: string;
};
