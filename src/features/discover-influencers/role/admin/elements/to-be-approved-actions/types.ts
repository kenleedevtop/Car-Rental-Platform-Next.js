import React from 'react';

export type TToBeApprovedProps = React.HTMLAttributes<HTMLDivElement> & {
  data: any;
  refreshInfluencers: () => void;
};
