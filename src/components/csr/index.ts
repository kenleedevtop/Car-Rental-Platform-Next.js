import dynamic from 'next/dynamic';

export const LineChart = dynamic(() => import('components/csr/line-chart'), {
  ssr: false,
});
