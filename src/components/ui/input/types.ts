import React from 'react';

export type TInputPropsOption = {
  value: string | number | boolean;
  label: string;
};

export type TInputProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string;
  type: 'select' | 'text' | 'number' | 'multiselect' | 'date' | 'min-max';
  value: any;
  onValue: (v: any) => void;
  min?: number;
  max?: number;
  options?: Array<TInputPropsOption>;
};
