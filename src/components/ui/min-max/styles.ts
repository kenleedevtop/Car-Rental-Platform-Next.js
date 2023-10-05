import styled from '@emotion/styled';
import { Theme, MenuItem, TextField, Autocomplete, Chip } from '@mui/material';
import { DesktopDatePicker, DesktopTimePicker } from '@mui/x-date-pickers';
import { Label } from 'components/ui';

export const InputRow = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
    display: flex;
    gap: ${theme.spacing(2)};
    align-items: flex-start;
    ${theme.breakpoints.down('sm')} {
      display: grid;
      gap: ${theme.spacing(4)};

      span {
        display: none;
      }
    }
  `}
`;