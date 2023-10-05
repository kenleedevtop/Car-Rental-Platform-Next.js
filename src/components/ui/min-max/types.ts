import React, { ReactNode } from 'react';

export type TInputValidator = {
  message: string;
  validator: (v: any) => boolean;
};

export type TMinMaxInputProps = {
  label?: string; 
  value : any,
  onValue: (v: any) => void;
  errorCallback?: (e: boolean) => void;
  minValidators?: Array<TInputValidator>;
  maxValidators?: Array<TInputValidator>;
  startAdornment?: string | ReactNode;
  endAdornment?: string | ReactNode;
  disabled?: boolean;
  infoLabel?: string;
}