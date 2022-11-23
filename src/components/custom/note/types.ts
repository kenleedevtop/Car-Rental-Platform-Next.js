import React from 'react';

export type TNote = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
};
