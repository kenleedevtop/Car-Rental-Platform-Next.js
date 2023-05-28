import { TBarChartData } from 'components/csr/bar-chart/types';

export const HChartDataGenerate = ({
  labels,
  data,
}: {
  labels: Array<string>;
  data: Array<TBarChartData>;
}) => ({
  labels,
  datasets: data.map((x) => ({
    label: 'Value',
    data: x.values,
    fill: 'start',
    backgroundColor: x.color,
    // hoverBackgroundColor: `${Theme.palette.primary.main}c0`,
    borderRadius: 4,
    borderSkipped: false,
  })),
});

export const HChartOptionsGenerate = ({
  horizontalLabel,
  verticalLabel,
}: {
  horizontalLabel?: string;
  verticalLabel?: string;
}) => ({
  resizeDelay: 0,
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      left: verticalLabel ? 0 : -10,
      bottom: horizontalLabel ? 0 : 'auto',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      title: {
        display: !!horizontalLabel,
        text: horizontalLabel,
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      title: {
        display: !!verticalLabel,
        text: verticalLabel,
      },
    },
  },
});
