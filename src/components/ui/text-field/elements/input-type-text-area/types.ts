import React, { ReactNode } from 'react';

export type TInputTypeTextAreaProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string;
  onValue?: (v: string) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  rows?: number;
};
