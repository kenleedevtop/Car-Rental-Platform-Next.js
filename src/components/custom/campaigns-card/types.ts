import React from 'react';
import { TColor } from 'components/custom/status/types';

export type TCampaignsCardProps = React.HTMLAttributes<HTMLDivElement> & {
  company: string;
  app: string;
  status: {
    color: TColor;
    text: string;
  };
};
