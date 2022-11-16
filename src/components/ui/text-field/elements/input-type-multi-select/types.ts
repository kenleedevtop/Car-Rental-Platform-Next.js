import React, { ReactNode } from 'react';
import { TTextFieldSelectOption } from 'components/ui/text-field/types';

export type TInputTypeMultiSelectProps =
  React.HTMLAttributes<HTMLDivElement> & {
    value?: Array<TTextFieldSelectOption>;
    onValue?: (v: Array<TTextFieldSelectOption>) => void;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    options: Array<TTextFieldSelectOption>;
    renderValue: (
      v: TTextFieldSelectOption,
      r: () => void
    ) => string | ReactNode;
    renderOption: (v: TTextFieldSelectOption) => string | ReactNode;
    filter: (v: TTextFieldSelectOption, search: string) => boolean;
  };
