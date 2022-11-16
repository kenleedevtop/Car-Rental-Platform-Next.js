import { ScriptableContext } from 'chart.js';

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
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const { ctx } = context.chart;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        if (negative) {
          gradient.addColorStop(0, '#E53B3BA0');
          gradient.addColorStop(0.35, '#E53B3B00');
        } else {
          gradient.addColorStop(0, '#2FD1C6A0');
          gradient.addColorStop(0.35, '#2FD1C600');
        }
        return gradient;
      },
      borderColor: negative ? '#E53B3BFF' : '#2FD1C6FF',
    },
  ],
});
