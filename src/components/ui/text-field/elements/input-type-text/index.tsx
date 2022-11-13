import React, { useRef } from 'react';
import { InputBox, InputIcon } from 'components/ui/text-field/elements';
import { InputTypeTextMain } from 'components/ui/text-field/elements/input-type-text/styles';
import { TInputTypeTextProps } from 'components/ui/text-field/elements/input-type-text/types';

const InputTypeText = ({
  value,
  onValue,
  placeholder,
  startIcon,
  endIcon,
  onChange,
  ...props
}: TInputTypeTextProps) => {
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
      <InputTypeTextMain
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

export default InputTypeText;
