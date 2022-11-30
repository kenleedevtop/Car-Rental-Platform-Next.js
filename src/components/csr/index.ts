import dynamic from 'next/dynamic';

export const LineChart = dynamic(() => import('components/csr/line-chart'), {
  ssr: false,
});

export const BarChart = dynamic(() => import('components/csr/bar-chart'), {
  ssr: false,
});
