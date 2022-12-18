import React from 'react';

import {
  RadioMain,
  RadioButtonEl,
  RadioLabel,
} from 'components/ui/radio/styles';
import { TRadioProps } from 'components/ui/radio/types';

const RadioButton = ({ color = 'secondary', label, ...props }: TRadioProps) => (
  <RadioMain>
    <RadioButtonEl color={color} size="medium" {...props} />
    <RadioLabel>{label}</RadioLabel>
  </RadioMain>
);

export default RadioButton;
