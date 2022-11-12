import React from 'react';
import {
  TextFieldMain,
  TextFieldLabel,
  TextFieldInput,
  TextFieldBox,
  TextFieldIcon,
} from 'components/ui/textfield/styles';
import { TTextFieldProps } from 'components/ui/textfield/types';

const TextField = ({
  value,
  placeholder,
  onValue,
  onChange,
  label,
  required,
  startIcon,
  endIcon,
  ...props
}: TTextFieldProps) => {
  const handleValue = (e: React.FormEvent<HTMLInputElement>) => {
    onValue && onValue((e.target as HTMLInputElement).value);
    onChange && onChange(e);
  };

  return (
    <TextFieldMain {...props}>
      <TextFieldLabel>{label}</TextFieldLabel>
      <TextFieldBox>
        {!!startIcon && <TextFieldIcon>{startIcon}</TextFieldIcon>}
        <TextFieldInput
          value={value}
          onChange={handleValue}
          placeholder={placeholder}
        />
        {!!endIcon && <TextFieldIcon>{endIcon}</TextFieldIcon>}
      </TextFieldBox>
    </TextFieldMain>
  );
};

export default TextField;
