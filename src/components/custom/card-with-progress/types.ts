import React, { ReactNode } from 'react';

export type TProgressData = {
  icon: ReactNode | string | number;
  percent: number;
  title: string;
};

export type TCardWithProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  progressData: Array<TProgressData>;
};
