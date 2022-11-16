import React, { ReactNode } from 'react';

export type TTextFieldSelectOption = {
  value: any;
  label: string;
  data: any;
};

export type TTextFieldType = 'text' | 'text-area' | 'select' | 'multi-select';

export type TTextFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: TTextFieldType;
  label?: string;
  required?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  options?: Array<TTextFieldSelectOption>;
  value?: any;
  rows?: number;
  onValue?: (v: any) => void;
  filter?: (a: TTextFieldSelectOption, b: string) => boolean;
  renderValue?: (
    o: TTextFieldSelectOption,
    r?: () => void
  ) => string | ReactNode;
  renderOption?: (o: TTextFieldSelectOption) => string | ReactNode;
};
