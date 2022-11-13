import React from 'react';
import { TextFieldMain, TextFieldLabel } from 'components/ui/text-field/styles';
import { TTextFieldProps } from 'components/ui/text-field/types';
import InputTypeText from './elements/input-type-text';

const TextField = ({
  value,
  placeholder,
  onValue,
  onChange,
  label,
  startIcon,
  endIcon,
  type = 'text',
  ...props
}: TTextFieldProps) => (
  <TextFieldMain {...props}>
    <TextFieldLabel>{label}</TextFieldLabel>
    {type === 'text' && (
      <InputTypeText
        value={value}
        onValue={onValue}
        onChange={onChange}
        startIcon={startIcon}
        endIcon={endIcon}
        placeholder={placeholder}
      />
    )}
  </TextFieldMain>
);

export default TextField;
