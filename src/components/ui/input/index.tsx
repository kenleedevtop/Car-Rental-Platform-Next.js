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
import { Chip, MenuItem } from '@mui/material';
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
  startAdornment,
  endAdornment,
  disabled,
  ...props
}: TInputProps) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleValue = (e: React.ChangeEvent<any>) => {
    if (onValue) onValue(e.target.value);
  };

  const handleSelect = (_e: React.ChangeEvent<any>, v: any) => {
    if (onValue) onValue(v?.value);
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
          disabled={disabled}
          InputProps={{ startAdornment, endAdornment }}
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
          disabled={disabled}
          InputProps={{ startAdornment, endAdornment }}
        />
      )}
      {type === 'number' && (
        <InputText
          type="number"
          value={value}
          onChange={handleValue}
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          variant="outlined"
          error={error}
          disabled={disabled}
          InputProps={{
            startAdornment,
            endAdornment,
            inputProps: { min, max },
          }}
        />
      )}
      {type === 'min-max' && (
        <InputRow>
          <InputText
            type="number"
            value={value.min}
            onChange={handleMinMax('min')}
            placeholder="Min"
            multiline={multiline}
            rows={rows}
            variant="outlined"
            error={error}
            onBlur={handleBlur}
            onFocus={handleFocus}
            disabled={disabled}
            InputProps={{
              startAdornment,
              endAdornment,
              inputProps: { max: value.max },
            }}
          />
          <span style={{ alignSelf: 'center' }}>-</span>
          <InputText
            type="number"
            value={value.max}
            onChange={handleMinMax('max')}
            placeholder="Max"
            multiline={multiline}
            rows={rows}
            variant="outlined"
            error={error}
            onBlur={handleBlur}
            onFocus={handleFocus}
            InputProps={{
              startAdornment,
              endAdornment,
              inputProps: { min: value.min },
            }}
          />
        </InputRow>
      )}
      {type === 'select' && (
        <InputSelect
          options={options}
          getOptionLabel={(option: any) => {
            const opt = options.find((x) => x.value === option);
            if (!opt) return '';

            return opt.label;
          }}
          renderOption={(optionProps, option: any) => (
            <MenuItem {...optionProps}>{option.label}</MenuItem>
          )}
          value={value}
          onChange={handleSelect}
          inputValue={search}
          onInputChange={(_a, b) => setSearch(b)}
          renderInput={({
            InputProps: { endAdornment: _endAdornment, ...InputProps },
            ...x
          }) => (
            <InputText
              {...x}
              variant="outlined"
              placeholder={placeholder}
              error={error}
              onBlur={handleBlur}
              onFocus={handleFocus}
              disabled={disabled}
              InputProps={{
                ...InputProps,
                startAdornment,
                endAdornment: [endAdornment, _endAdornment],
              }}
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
                error={error}
                onBlur={handleBlur}
                onFocus={handleFocus}
                disabled={disabled}
                InputProps={{
                  startAdornment,
                  endAdornment,
                  inputProps: { ...inputProps, placeholder },
                }}
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
              disabled={disabled}
              InputProps={{ startAdornment, endAdornment }}
            />
          )}
        />
      )}
      {error && <InputError>{errorMessage}</InputError>}
    </InputMain>
  );
};

export default Input;
