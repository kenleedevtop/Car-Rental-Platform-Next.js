import React from 'react';
import { TColor } from '../status/types';

export type TProgressDisplayProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  percent: number;
  color?: TColor;
  tooltip?: boolean;
};
