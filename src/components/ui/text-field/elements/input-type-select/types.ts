import React, { ReactNode } from 'react';

export type TInputTypeSelectProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: string;
  onValue?: (v: string) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};
