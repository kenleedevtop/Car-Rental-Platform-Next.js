import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarChartMain } from 'components/csr/bar-chart/styles';
import {
  HChartDataGenerate,
  HChartOptionsGenerate,
} from 'components/csr/bar-chart/helpers';
import { TBarChartProps } from 'components/csr/bar-chart/types';

const BarChart = ({
  labels,
  data,
  horizontalLabel,
  verticalLabel,
  ...props
}: TBarChartProps) => {
  const generatedData = HChartDataGenerate({
    labels,
    data,
    negative: false,
  });

  const generatedOptions: any = HChartOptionsGenerate({
    horizontalLabel,
    verticalLabel,
  });

  return (
    <BarChartMain {...props}>
      <Bar height={50} data={generatedData} options={generatedOptions} />
    </BarChartMain>
  );
};

export default BarChart;
