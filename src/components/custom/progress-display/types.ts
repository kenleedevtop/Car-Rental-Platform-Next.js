import React from 'react';

export type TProgressDisplayProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  percent: number;
};
