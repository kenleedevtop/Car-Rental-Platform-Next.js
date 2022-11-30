import Theme from 'theme';

export const HChartDataGenerate = ({
  labels,
  data,
}: {
  labels: Array<string>;
  data: Array<number>;
}) => ({
  labels,
  datasets: [
    {
      label: 'Value',
      data,
      fill: 'start',
      backgroundColor: `${Theme.palette.secondary.main}40`,
      hoverBackgroundColor: `${Theme.palette.primary.main}c0`,
      borderRadius: 4,
      borderSkipped: false,
    },
  ],
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
