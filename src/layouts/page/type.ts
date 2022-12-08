import React, { ReactNode } from 'react';

export type TPageProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  image: string;
};
