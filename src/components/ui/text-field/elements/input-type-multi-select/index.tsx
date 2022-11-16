import React, { useRef, useState } from 'react';
import { InputBox, InputIcon } from 'components/ui/text-field/elements';
import {
  InputTypeMultiSelectMain,
  InputTypeMultiSelectDropdown,
  InputTypeMultiSelectDropdownOption,
  InputTypeMultiSelectValue,
} from 'components/ui/text-field/elements/input-type-multi-select/styles';
import { TInputTypeMultiSelectProps } from 'components/ui/text-field/elements/input-type-multi-select/types';
import { useMenu } from 'hooks';
import { TTextFieldSelectOption } from 'components/ui/text-field/types';

const InputTypeMultiSelect = ({
  value = [],
  onValue = () => {},
  placeholder,
  startIcon,
  endIcon,
  options,
  renderValue,
  renderOption,
  filter,
  ...props
}: TInputTypeMultiSelectProps) => {
  const [search, setSearch] = useState<string>('');

  const searchRef = useRef<null | HTMLInputElement>(null);
  const [dropdownRef, open, setOpen] = useMenu(false);

  const handleClick = (e: React.MouseEvent<any>) => {
    if (searchRef.current && e.target !== searchRef.current)
      searchRef.current.focus();
    setOpen(true);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleValue = (x: TTextFieldSelectOption) => () => {
    if (onValue) onValue([...value, x]);
    setOpen(false);
  };

  const removeFunction = (x: TTextFieldSelectOption) => () => {
    onValue(value.filter((y) => x !== y));
  };

  const dropdownOptions = options
    .filter((x) => value.findIndex((y) => y.value === x.value) === -1)
    .filter((x) => filter(x, search));

  return (
    <InputBox ref={dropdownRef} onClick={handleClick} {...props}>
      {!!startIcon && <InputIcon>{startIcon}</InputIcon>}
      <InputTypeMultiSelectValue>
        {value.map((x) => renderValue(x, removeFunction(x)))}
        <InputTypeMultiSelectMain
          value={search}
          onChange={handleSearch}
          placeholder={placeholder}
          ref={searchRef}
        />
      </InputTypeMultiSelectValue>
      {!!endIcon && <InputIcon>{endIcon}</InputIcon>}
      {open && (
        <InputTypeMultiSelectDropdown onClick={(e) => e.stopPropagation()}>
          {dropdownOptions.map((x) => (
            <InputTypeMultiSelectDropdownOption onClick={handleValue(x)}>
              {renderOption(x)}
            </InputTypeMultiSelectDropdownOption>
          ))}
          {!dropdownOptions.length && (
            <InputTypeMultiSelectDropdownOption>
              No results
            </InputTypeMultiSelectDropdownOption>
          )}
        </InputTypeMultiSelectDropdown>
      )}
    </InputBox>
  );
};

export default InputTypeMultiSelect;
