import React from 'react';
import {
  ProgressDisplayMain,
  ProgressDisplayIcon,
} from 'components/custom/card-with-progress/elements/progress-display/styles';
import { TProgressDisplayProps } from 'components/custom/card-with-progress/elements/progress-display/types';
import { Tooltip } from '@mui/material';

const ProgressDisplay = ({
  title,
  icon,
  percent,
  ...props
}: TProgressDisplayProps) => (
  <ProgressDisplayMain {...props}>
    <Tooltip title={title}>
      <ProgressDisplayIcon>{icon}</ProgressDisplayIcon>
    </Tooltip>
  </ProgressDisplayMain>
);

export default ProgressDisplay;
