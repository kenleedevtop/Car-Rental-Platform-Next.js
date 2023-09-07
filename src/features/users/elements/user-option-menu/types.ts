import React from 'react';

export type TUserOptionMenu = React.HTMLAttributes<HTMLDivElement> & {
  userId: number;
  reload: any;
};
