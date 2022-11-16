import React, { useState } from 'react';
import {
  InputMain,
  InputLabel,
  InputSelect,
  InputText,
  InputMultiSelect,
  InputDatepicker,
} from 'components/ui/input/styles';
import { TInputProps } from 'components/ui/input/types';
import { Chip } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
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
}: TInputProps) => {
  const handleValue = (e: React.ChangeEvent<any>) => {
    if (onValue) onValue(e.target.value);
  };

  const handleSelect = (_e: React.ChangeEvent<any>, v: any) => {
    if (onValue) onValue(v);
  };

  const handleDate = (newValue: any) => {
    if (onValue) onValue(newValue);
  };

  const [search, setSearch] = useState('');

  return (
    <InputMain variant="outlined" fullWidth>
      <InputLabel>{label}</InputLabel>
      {type === 'text' && (
        <InputText
          type="text"
          value={value}
          onChange={handleValue}
          placeholder={placeholder}
        />
      )}
      {type === 'number' && (
        <InputText
          type="number"
          value={value}
          onChange={handleValue}
          inputProps={{ min, max }}
          placeholder={placeholder}
        />
      )}
      {type === 'select' && (
        <InputSelect
          options={options.map((option) => option.label)}
          value={value}
          onChange={handleSelect}
          inputValue={search}
          onInputChange={(_a, b) => setSearch(b)}
          renderInput={(x) => (
            <InputText {...x} variant="outlined" placeholder={placeholder} />
          )}
        />
      )}
      {type === 'date' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <InputDatepicker
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleDate}
            renderInput={(params) => <InputText {...params} />}
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
            <InputText {...x} variant="outlined" placeholder={placeholder} />
          )}
        />
      )}
    </InputMain>
  );
};

export default Input;
