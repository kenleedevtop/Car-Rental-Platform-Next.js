import React from 'react';
import { TextFieldMain, TextFieldLabel } from 'components/ui/text-field/styles';
import {
  TTextFieldProps,
  TTextFieldSelectOption,
} from 'components/ui/text-field/types';
import {
  InputTypeText,
  InputTypeTextArea,
  InputTypeSelect,
  InputTypeMultiSelect,
} from 'components/ui/text-field/elements';

const TextField = ({
  value,
  placeholder,
  label,
  startIcon,
  endIcon,
  type = 'text',
  onValue,
  rows,
  options = [],
  renderValue = (o) => o.label,
  renderOption = (o) => o.label,
  filter = (_a: TTextFieldSelectOption, _b: string) => true,
  ...props
}: TTextFieldProps) => (
  <TextFieldMain {...props}>
    {!!label && <TextFieldLabel>{label}</TextFieldLabel>}
    {type === 'text' && (
      <InputTypeText
        value={value}
        onValue={onValue}
        startIcon={startIcon}
        endIcon={endIcon}
        placeholder={placeholder}
      />
    )}
    {type === 'text-area' && (
      <InputTypeTextArea
        value={value}
        onValue={onValue}
        startIcon={startIcon}
        endIcon={endIcon}
        placeholder={placeholder}
        rows={rows}
      />
    )}
    {type === 'select' && (
      <InputTypeSelect
        value={value}
        onValue={onValue}
        startIcon={startIcon}
        endIcon={endIcon}
        placeholder={placeholder}
        options={options}
        renderValue={renderValue}
        renderOption={renderOption}
        filter={filter}
      />
    )}
    {type === 'multi-select' && (
      <InputTypeMultiSelect
        value={value}
        onValue={onValue}
        startIcon={startIcon}
        endIcon={endIcon}
        placeholder={placeholder}
        options={options}
        renderValue={renderValue}
        renderOption={renderOption}
        filter={filter}
      />
    )}
  </TextFieldMain>
);

export default TextField;
