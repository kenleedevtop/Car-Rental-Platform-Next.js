import styled from '@emotion/styled';
import { Step } from '@mui/material';

export const StepMain = styled(Step)`
  & svg {
    cursor: pointer;
    color: #c3dbee;
    & :last-child > {
      color: white;
    }
  }
`;
