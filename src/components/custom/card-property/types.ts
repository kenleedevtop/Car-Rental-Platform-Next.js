import React from 'react';

export type TPropertyCardProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'title'
> & {
  image: string;
  address: string;
  title: string;
  link: string;
  spots: number;
  availableSpots: number;
  status: string;
  rent: number;
  theme: string;
  completed?: boolean;
  label?: string;
  dropdown?: boolean;
};
