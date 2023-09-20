import React from 'react';

export type TApplicationStatusProps = React.HTMLAttributes<HTMLDivElement> & {
  applicationId: number;
  userId: number | null;
  carId: number | null;
  status: string;
  reload: any;
};
