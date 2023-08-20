import styled from '@emotion/styled';
import { StaticDatePicker } from '@mui/x-date-pickers';

export const StaticDate = styled(StaticDatePicker)`
  .MuiDialogActions-root,
  .MuiPickersToolbar-root {
    display: none !important;
  }
`;
