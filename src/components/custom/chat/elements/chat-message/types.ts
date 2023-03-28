import React from 'react';

export type TChatMessageProps = React.HTMLAttributes<HTMLDivElement> & {
  message: string;
  time: string;
};
