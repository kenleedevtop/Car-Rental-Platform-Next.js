import React, { useRef } from 'react';
import { InputBox, InputIcon } from 'components/ui/text-field/elements';
import { InputTypeSelectMain } from 'components/ui/text-field/elements/input-type-select/styles';
import { TInputTypeSelectProps } from 'components/ui/text-field/elements/input-type-select/types';

const InputTypeSelect = ({
  value,
  onValue,
  placeholder,
  startIcon,
  endIcon,
  onChange,
  ...props
}: TInputTypeSelectProps) => {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleValue = (e: React.FormEvent<HTMLInputElement>) => {
    if (onValue) onValue((e.target as HTMLInputElement).value);
    if (onChange) onChange(e);
  };

  const handleClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <InputBox onClick={handleClick} {...props}>
      {!!startIcon && <InputIcon>{startIcon}</InputIcon>}
      <InputTypeSelectMain
        value={value}
        onChange={handleValue}
        placeholder={placeholder}
        ref={inputRef}
        onClick={(e) => e.stopPropagation()}
      />
      {!!endIcon && <InputIcon>{endIcon}</InputIcon>}
    </InputBox>
  );
};

export default InputTypeSelect;
