import React from 'react';
import { TextFieldMain, TextFieldLabel } from 'components/ui/text-field/styles';
import { TTextFieldProps } from 'components/ui/text-field/types';
import {
  InputTypeText,
  InputTypeArea,
} from 'components/ui/text-field/elements';

const TextField = ({
  value,
  placeholder,
  onValue,
  onChange,
  label,
  startIcon,
  endIcon,
  type = 'text',
  rows = 5,
  ...props
}: TTextFieldProps) => (
  <TextFieldMain {...props}>
    {!!label && <TextFieldLabel>{label}</TextFieldLabel>}
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
    {type === 'area' && (
      <InputTypeArea
        value={value}
        onValue={onValue}
        onChange={onChange}
        startIcon={startIcon}
        endIcon={endIcon}
        placeholder={placeholder}
        rows={rows}
      />
    )}
  </TextFieldMain>
);

export default TextField;
