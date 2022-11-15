import React from 'react';
import { ButtonMain } from 'components/ui/button/styles';
import { TButtonProps } from 'components/ui/button/types';

const Button = ({ ...props }: TButtonProps) => <ButtonMain {...props} />;

export default Button;
