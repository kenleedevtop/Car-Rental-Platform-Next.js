import React, { useState } from 'react';
import {
  InputMain,
  InputLabel,
  InputSelect,
  InputText,
  InputMultiSelect,
  InputDatepicker,
  InputRow,
  InputError,
} from 'components/ui/input/styles';
import { TInputProps } from 'components/ui/input/types';
import { Chip } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const Input = ({
  label,
  type = 'text',
  value,
  onValue,
  min,
  max,
  options = [],
  placeholder,
  multiline,
  required,
  helper,
  rows = 4,
  validators = [],
  shouldValidate = true,
  errorCallback,
  onBlur,
  onFocus,
  ...props
}: TInputProps) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValue = (e: React.ChangeEvent<any>) => {
    if (onValue) onValue(e.target.value);
  };

  const handleSelect = (_e: React.ChangeEvent<any>, v: any) => {
    if (onValue) onValue(v);
  };

  const handleDate = (newValue: any) => {
    if (onValue) onValue(newValue);
  };

  const handleMinMax = (key: 'min' | 'max') => (e: React.ChangeEvent<any>) => {
    if (onValue) onValue({ ...value, [key]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    for (let i = 0; i < validators.length; i += 1) {
      const v = validators[i];
      if (!v.validator(value)) {
        setErrorMessage(v.message);
        setError(true);
        if (errorCallback) errorCallback(true);
        if (onBlur) onBlur(e);
        return;
      }
    }
    if (errorCallback) errorCallback(false);
    if (onBlur) onBlur(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setError(false);
    setErrorMessage('');
    if (onFocus) onFocus(e);
  };

  return (
    <InputMain {...props}>
      {!!label && (
        <InputLabel required={required} helper={helper}>
          {label}
        </InputLabel>
      )}
      {type === 'text' && (
        <InputText
          type="text"
          value={value}
          onChange={handleValue}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          variant="outlined"
          error={error}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      )}
      {type === 'password' && (
        <InputText
          type="password"
          value={value}
          onChange={handleValue}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          variant="outlined"
          error={error}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      )}
      {type === 'number' && (
        <InputText
          type="number"
          value={value}
          onChange={handleValue}
          inputProps={{ min, max }}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          variant="outlined"
          error={error}
        />
      )}
      {type === 'min-max' && (
        <InputRow>
          <InputText
            type="number"
            value={value.min}
            onChange={handleMinMax('min')}
            inputProps={{ max: value.max }}
            placeholder="Min"
            multiline={multiline}
            rows={rows}
            variant="outlined"
            error={error}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <span style={{ alignSelf: 'center' }}>-</span>
          <InputText
            type="number"
            value={value.max}
            onChange={handleMinMax('max')}
            inputProps={{ min: value.min }}
            placeholder="Max"
            multiline={multiline}
            rows={rows}
            variant="outlined"
            error={error}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </InputRow>
      )}
      {type === 'select' && (
        <InputSelect
          options={options.map((option) => option.label)}
          value={value}
          onChange={handleSelect}
          inputValue={search}
          onInputChange={(_a, b) => setSearch(b)}
          renderInput={(x) => (
            <InputText
              {...x}
              variant="outlined"
              placeholder={placeholder}
              error={error}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          )}
        />
      )}
      {type === 'date' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputDatepicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleDate}
            renderInput={({ inputProps, ...params }) => (
              <InputText
                {...params}
                variant="outlined"
                inputProps={{ ...inputProps, placeholder }}
                error={error}
                onBlur={handleBlur}
                onFocus={handleFocus}
              />
            )}
          />
        </LocalizationProvider>
      )}
      {type === 'multiselect' && (
        <InputMultiSelect
          multiple
          filterSelectedOptions
          options={options.map((option) => option.label)}
          value={value}
          onChange={handleSelect}
          inputValue={search}
          onInputChange={(_a, b) => setSearch(b)}
          renderTags={(v: any[], getTagProps) =>
            v.map((option: string, index: number) => (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          renderInput={(x) => (
            <InputText
              {...x}
              variant="outlined"
              placeholder={placeholder}
              error={error}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
          )}
        />
      )}
      {error && <InputError>{errorMessage}</InputError>}
    </InputMain>
  );
};

export default Input;
