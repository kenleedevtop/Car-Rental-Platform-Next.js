import React from 'react';
import {
  ProgressDisplayMain,
  ProgressDisplayLabel,
} from 'components/custom/progress-display/styles';
import { TProgressDisplayProps } from 'components/custom/progress-display/types';

const ProgressDisplay = ({
  label,
  percent,
  ...props
}: TProgressDisplayProps) => (
  <ProgressDisplayMain percent={percent} {...props}>
    <ProgressDisplayLabel>{label}</ProgressDisplayLabel>
  </ProgressDisplayMain>
);

export default ProgressDisplay;
