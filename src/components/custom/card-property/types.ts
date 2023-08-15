import React from 'react';

export type TPropertyCardProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> & {
  type: Array<string>;
  image: string;
  totalPrice?: number;
  address: string;
  title: string;
  bids?: number;
  fundPercent?: number;
  available?: number;
  completed?: boolean;
  link: string;
  investors?: Array<{
    name: string;
    value: number;
  }>;
};
