import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDate } from 'components/custom/combined-date-picker/style';
import { TCombinedDatePickerProps } from 'components/custom/combined-date-picker/types';
import { TextField } from '@mui/material';
import { Input } from 'components/ui';
import { Stack } from 'components/system';

const CombinedDatePicker = ({
  label,
  value,
  onValue,
  ...props
}: TCombinedDatePickerProps) => {
  const handleDate = (newValue: any) => {
    if (onValue) onValue(newValue);
  };

  return (
    <Stack {...props}>
      <Input
        type="date"
        label={label}
        value={value}
        onValue={() => {}}
        placeholder="Please Select"
        disabled
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDate
          onChange={handleDate}
          value={value}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Stack>
  );
};

export default CombinedDatePicker;
