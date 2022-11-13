import React, { forwardRef } from 'react';
import { InputIconMain } from 'components/ui/text-field/elements/input-icon/styles';
import {
  TInputIconRef,
  TInputIconProps,
} from 'components/ui/text-field/elements/input-icon/types';

const InputIcon = forwardRef<TInputIconRef, TInputIconProps>(
  ({ ...props }, ref) => <InputIconMain ref={ref} {...props} />
);

export default InputIcon;
