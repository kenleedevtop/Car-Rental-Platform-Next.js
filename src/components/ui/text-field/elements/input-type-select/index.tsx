import React, { useRef, useState } from 'react';
import { InputBox, InputIcon } from 'components/ui/text-field/elements';
import {
  InputTypeSelectMain,
  InputTypeSelectDropdown,
  InputTypeSelectDropdownOption,
  InputTypeSelectValue,
  InputTypeSelectValueClear,
  InputTypeSelectValueRender,
} from 'components/ui/text-field/elements/input-type-select/styles';
import { TInputTypeSelectProps } from 'components/ui/text-field/elements/input-type-select/types';
import { useMenu } from 'hooks';
import { TTextFieldSelectOption } from 'components/ui/text-field/types';
import { CancelIcon } from 'components/svg';

const InputTypeSelect = ({
  value,
  onValue,
  placeholder,
  startIcon,
  endIcon,
  options,
  renderValue,
  renderOption,
  filter,
  ...props
}: TInputTypeSelectProps) => {
  const [search, setSearch] = useState<string>('');

  const serachRef = useRef<null | HTMLInputElement>(null);
  const [dropdownRef, open, setOpen] = useMenu(false);

  // const handleValue = (e: React.FormEvent<HTMLInputElement>) => {
  //   if (onValue) onValue((e.target as HTMLInputElement).value);
  //   if (onChange) onChange(e);
  // };

  const handleClick = (e: React.MouseEvent<any>) => {
    if (serachRef.current && e.target !== serachRef.current)
      serachRef.current.focus();
    setOpen(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleValue = (x: TTextFieldSelectOption) => () => {
    if (onValue) onValue(x);
    setOpen(false);
  };

  const clearValue = () => {
    if (onValue) onValue(null);
  };

  const dropdownOptions = options.filter((x) => filter(x, search));

  return (
    <InputBox ref={dropdownRef} onClick={handleClick} {...props}>
      {!!startIcon && <InputIcon>{startIcon}</InputIcon>}
      {value ? (
        <InputTypeSelectValue>
          <InputTypeSelectValueRender>
            {renderValue(value)}
          </InputTypeSelectValueRender>
          <InputTypeSelectValueClear onClick={clearValue}>
            <CancelIcon />
          </InputTypeSelectValueClear>
        </InputTypeSelectValue>
      ) : (
        <InputTypeSelectMain
          value={search}
          onChange={handleSearch}
          placeholder={placeholder}
          ref={serachRef}
        />
      )}
      {!!endIcon && <InputIcon>{endIcon}</InputIcon>}
      {open && (
        <InputTypeSelectDropdown onClick={(e) => e.stopPropagation()}>
          {dropdownOptions.map((x) => (
            <InputTypeSelectDropdownOption onClick={handleValue(x)}>
              {renderOption(x)}
            </InputTypeSelectDropdownOption>
          ))}
          {!dropdownOptions.length && (
            <InputTypeSelectDropdownOption>
              No results
            </InputTypeSelectDropdownOption>
          )}
        </InputTypeSelectDropdown>
      )}
    </InputBox>
  );
};

export default InputTypeSelect;
