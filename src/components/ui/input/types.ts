import React, { ReactNode } from 'react';

export type TInputPropsOption = {
  value: string | number | boolean;
  label: string;
};

export type TInputValidator = {
  message: string;
  validator: (v: any) => boolean;
};

export type TInputProps = React.HTMLAttributes<HTMLDivElement> & {
  type:
    | 'select'
    | 'text'
    | 'password'
    | 'number'
    | 'multiselect'
    | 'date'
    | 'min-max';
  value: any;
  onValue: (v: any) => void;
  label?: string;
  min?: number;
  max?: number;
  options?: Array<TInputPropsOption>;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  helper?: string | ReactNode;
  shouldValidate?: boolean;
  validators?: Array<TInputValidator>;
  startAdornment?: string | ReactNode;
  endAdornment?: string | ReactNode;
  disabled?: boolean;
  minRows?: number;
  maxRows?: number;
  errorCallback?: (e: boolean) => void;
};
