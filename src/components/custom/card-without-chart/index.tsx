import React from 'react';
import {
  CardWithoutChartMain,
  CardWithoutChartText,
  CardWithoutChartIconProps,
  CardWithoutChartTitle,
  CardWithoutChartValues,
  CardWithoutChartCount,
} from 'components/custom/card-without-chart/styles';
import { TCardWithoutChartProps } from 'components/custom/card-without-chart/types';
import { Indicator } from 'components/custom/card-without-chart/elements';
import { BusinessmanIcon } from 'components/svg';
import { formatNumber } from 'utilities/extended-proto';

const CardWithoutChart = ({
  title,
  icon,
  smallIcon = <BusinessmanIcon />,
  count,
  chartData,
  ...props
}: TCardWithoutChartProps) => (
  <CardWithoutChartMain animation="zoom-in" {...props} style={{width:'150px'}}>
    <CardWithoutChartText>
      <CardWithoutChartIconProps>{icon}</CardWithoutChartIconProps>
      <CardWithoutChartIconProps gray />
      <CardWithoutChartTitle>{title}</CardWithoutChartTitle>
    </CardWithoutChartText>
    <CardWithoutChartValues>
      <CardWithoutChartCount>
        {smallIcon}
        {formatNumber(count)}
      </CardWithoutChartCount>
      <Indicator percent={count} />
    </CardWithoutChartValues>
  </CardWithoutChartMain>
);

export default CardWithoutChart;