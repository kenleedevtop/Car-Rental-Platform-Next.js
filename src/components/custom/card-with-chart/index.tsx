import React from 'react';
import {
  CardWithChartMain,
  CardWithChartText,
  CardWithChartIcon,
  CardWithChartTitle,
  CardWithChartValues,
  CardWithChartCount,
  CardWithChartGraph,
} from 'components/custom/card-with-chart/styles';
import { TCardWithChartProps } from 'components/custom/card-with-chart/types';
import { PercentIndicator } from 'components/custom/card-with-chart/elements';
import { LineChart } from 'components/csr';

const CardWithChart = ({
  title,
  icon,
  count,
  percent,
  chartData,
  ...props
}: TCardWithChartProps) => (
  <CardWithChartMain {...props}>
    <CardWithChartText>
      <CardWithChartIcon>{icon}</CardWithChartIcon>
      <CardWithChartTitle>{title}</CardWithChartTitle>
    </CardWithChartText>
    <CardWithChartValues>
      <CardWithChartCount>{count}</CardWithChartCount>
      <PercentIndicator percent={percent} />
    </CardWithChartValues>
    <CardWithChartGraph>
      <LineChart
        data={chartData.values}
        labels={chartData.labels}
        negative={percent < 0}
      />
    </CardWithChartGraph>
  </CardWithChartMain>
);

export default CardWithChart;
