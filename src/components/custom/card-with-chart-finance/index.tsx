import React from 'react';
import {
  CardWithChartMain,
  CardWithChartText,
  CardWithChartIcon,
  CardWithChartTitle,
  CardWithChartValues,
  CardWithChartCount,
  CardWithChartGraph,
  CardWithChartGraphContainer,
  CardWithChartGraphItem,
  CardWithChartGraphLabel,
  CardWithChartGraphValue,
  CardWithChartHeadline,
} from 'components/custom/card-with-chart-finance/styles';
import { TCardWithChartProps } from 'components/custom/card-with-chart-finance/types';
import { PercentIndicator } from 'components/custom/card-with-chart/elements';
import { LineChart } from 'components/csr';
import { BusinessmanIcon } from 'components/svg';
import { formatNumber } from 'utilities/extended-proto';

const CardWithChart = ({
  title,
  icon,
  smallIcon = <BusinessmanIcon />,
  count,
  percent,
  chartData,
  last30Days,
  last12Months,
  total,
  ...props
}: TCardWithChartProps) => (
  <CardWithChartMain animation="zoom-in" {...props}>
    <CardWithChartHeadline>
      <CardWithChartText>
        <CardWithChartIcon>{icon}</CardWithChartIcon>
        <CardWithChartTitle>{title}</CardWithChartTitle>
      </CardWithChartText>
      <PercentIndicator percent={percent} />
    </CardWithChartHeadline>
    <CardWithChartValues>
      <CardWithChartCount>
        {smallIcon}€{formatNumber(count)}
      </CardWithChartCount>
    </CardWithChartValues>
    <CardWithChartGraph>
      <LineChart
        data={chartData.values}
        labels={chartData.labels}
        negative={percent < 0}
      />
    </CardWithChartGraph>
    <CardWithChartGraphContainer>
      <CardWithChartGraphItem>
        <CardWithChartGraphLabel>Last 30 Days</CardWithChartGraphLabel>
        <CardWithChartGraphValue>
          €{formatNumber(last30Days)}
        </CardWithChartGraphValue>
      </CardWithChartGraphItem>
      <CardWithChartGraphItem>
        <CardWithChartGraphLabel>Last 12 Months</CardWithChartGraphLabel>
        <CardWithChartGraphValue>
          €{formatNumber(last12Months)}
        </CardWithChartGraphValue>
      </CardWithChartGraphItem>
      <CardWithChartGraphItem>
        <CardWithChartGraphLabel>Total</CardWithChartGraphLabel>
        <CardWithChartGraphValue>
          €{formatNumber(total)}
        </CardWithChartGraphValue>
      </CardWithChartGraphItem>
    </CardWithChartGraphContainer>
  </CardWithChartMain>
);

export default CardWithChart;
