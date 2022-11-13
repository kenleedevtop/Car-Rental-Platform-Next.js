import React, { forwardRef } from 'react';
import { InputBoxMain } from 'components/ui/text-field/elements/input-box/styles';
import {
  TInputBoxRef,
  TInputBoxProps,
} from 'components/ui/text-field/elements/input-box/types';

const InputBox = forwardRef<TInputBoxRef, TInputBoxProps>(
  ({ ...props }, ref) => <InputBoxMain ref={ref} {...props} />
);

export default InputBox;
