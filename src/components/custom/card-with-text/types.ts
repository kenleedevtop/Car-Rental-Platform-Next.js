import React, { ReactNode } from 'react';

export type TCardWithTextProps = React.HTMLAttributes<HTMLDivElement> & {
  title: ReactNode;
  description?: string;
  actions?: Array<React.ReactNode>;
};
