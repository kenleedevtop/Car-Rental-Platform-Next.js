import React from 'react';
import { ButtonMain } from 'components/ui/button/styles';
import { TButtonProps } from 'components/ui/button/types';

const Button = ({ size = 'medium', ...props }: TButtonProps) => (
  <ButtonMain size={size} {...props} />
);

export default Button;
