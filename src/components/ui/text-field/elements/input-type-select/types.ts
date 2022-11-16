import React, { ReactNode } from 'react';
import { TTextFieldSelectOption } from 'components/ui/text-field/types';

export type TInputTypeSelectProps = React.HTMLAttributes<HTMLDivElement> & {
  value?: TTextFieldSelectOption | null;
  onValue?: (v: TTextFieldSelectOption | null) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  options: Array<TTextFieldSelectOption>;
  renderValue: (v: TTextFieldSelectOption) => string | ReactNode;
  renderOption: (v: TTextFieldSelectOption) => string | ReactNode;
  filter: (v: TTextFieldSelectOption, search: string) => boolean;
};
