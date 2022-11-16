import React, { useRef } from 'react';
import { InputBox, InputIcon } from 'components/ui/text-field/elements';
import { InputTypeTextAreaMain } from 'components/ui/text-field/elements/input-type-text-area/styles';
import { TInputTypeTextAreaProps } from 'components/ui/text-field/elements/input-type-text-area/types';

const InputTypeTextArea = ({
  value,
  onValue,
  placeholder,
  startIcon,
  endIcon,
  rows,
  ...props
}: TInputTypeTextAreaProps) => {
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const handleValue = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (onValue) onValue((e.target as HTMLTextAreaElement).value);
  };

  const handleClick = () => {
    if (textareaRef.current) textareaRef.current.focus();
  };

  return (
    <InputBox onClick={handleClick} {...props}>
      {!!startIcon && <InputIcon>{startIcon}</InputIcon>}
      <InputTypeTextAreaMain
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

export default InputTypeTextArea;
