import React, { ReactNode } from 'react';

export type THelpCollapseProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  openIcon: ReactNode;
  closeIcon: ReactNode;
  text: Array<string>;
};
