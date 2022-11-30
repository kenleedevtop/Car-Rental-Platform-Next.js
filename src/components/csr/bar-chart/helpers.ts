import Theme from 'theme';

export const HChartDataGenerate = ({
  labels,
  data,
  negative,
}: {
  labels: Array<string>;
  data: Array<number>;
  negative: boolean;
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
      borderColor: negative ? '#E53B3BFF' : '#2FD1C6FF',
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
