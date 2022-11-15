import React, { ReactNode } from 'react';

export type TMenuItemsProps = React.HTMLAttributes<HTMLDivElement> & {
  items: Array<{
    icon: ReactNode;
    label: string;
  }>;
};
