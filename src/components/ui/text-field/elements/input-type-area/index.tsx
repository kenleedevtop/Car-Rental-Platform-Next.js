import React, { useRef } from 'react';
import { InputBox, InputIcon } from 'components/ui/text-field/elements';
import { InputTypeAreaMain } from 'components/ui/text-field/elements/input-type-area/styles';
import { TInputTypeAreaProps } from 'components/ui/text-field/elements/input-type-area/types';

const InputTypeArea = ({
  value,
  onValue,
  placeholder,
  startIcon,
  endIcon,
  onChange,
  rows,
  ...props
}: TInputTypeAreaProps) => {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const handleValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (onValue) onValue((e.target as HTMLTextAreaElement).value);
    if (onChange) onChange(e as any);
  };

  const handleClick = () => {
    if (textareaRef.current) textareaRef.current.focus();
  };

  return (
    <InputBox onClick={handleClick} {...props}>
      {!!startIcon && <InputIcon>{startIcon}</InputIcon>}
      <InputTypeAreaMain
        value={value}
        onChange={handleValue}
        placeholder={placeholder}
        ref={textareaRef}
        rows={rows}
        onClick={(e) => e.stopPropagation()}
      />
      {!!endIcon && <InputIcon>{endIcon}</InputIcon>}
    </InputBox>
  );
};

export default InputTypeArea;
