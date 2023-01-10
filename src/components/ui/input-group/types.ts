import React, { ReactNode } from 'react';
import { TInputPropsOption } from 'components/ui/input/types';

export type TInputGroupElement = {
  type: 'select' | 'text' | 'number' | 'multiselect' | 'date' | 'min-max';
  value: any;
  onValue: (v: any) => void;
  min?: number;
  max?: number;
  options?: Array<TInputPropsOption>;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  startAdornment?: string | ReactNode;
  endAdornment?: string | ReactNode;
};

export type TInputGroupProps = React.HTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
  helper?: string | ReactNode;
  inputRatio: string;
  elements: Array<TInputGroupElement>;
};
