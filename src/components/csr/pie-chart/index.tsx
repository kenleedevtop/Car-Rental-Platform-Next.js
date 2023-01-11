import React from 'react';
import { Pie } from 'react-chartjs-2';
import { PieChartMain } from 'components/csr/pie-chart/styles';
import { DChartOptions } from 'components/csr/pie-chart/data';
import { HChartDataGenerate } from 'components/csr/pie-chart/helpers';
import { TPieChartProps } from 'components/csr/pie-chart/types';

const PieChart = ({ labels, data, ...props }: TPieChartProps) => {
  const generatedData = HChartDataGenerate({
    labels,
    data,
  });

  return (
    <PieChartMain {...props}>
      <Pie data={generatedData} options={DChartOptions} />
    </PieChartMain>
  );
};

export default PieChart;
