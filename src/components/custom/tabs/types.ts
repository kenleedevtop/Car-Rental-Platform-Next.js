import React from 'react';

export type TTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: Array<string>;
  value: number;
  onValue: (v: number) => void;
};
