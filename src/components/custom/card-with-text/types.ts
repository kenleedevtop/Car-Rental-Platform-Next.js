import React from 'react';

export type TCardWithTextProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  actions?: Array<React.ReactNode>;
};
