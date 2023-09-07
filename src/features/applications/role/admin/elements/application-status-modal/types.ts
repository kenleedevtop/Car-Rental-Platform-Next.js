import React from 'react';

export type TApplicationStatusProps = React.HTMLAttributes<HTMLDivElement> & {
  applicationId: number;
  userId: number | null;
  status: string;
  reload: any;
};
