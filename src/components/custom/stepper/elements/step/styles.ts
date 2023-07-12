import styled from '@emotion/styled';
import { Step } from '@mui/material';

export const StepMain = styled(Step)`
  & .Mui-active {
    z-index: 2;
    & svg {
      // color: #c3dbee !important;
      color: #c3dbee;
    }
  }

  & svg {
    cursor: pointer;

    color: #c3dbee;
  }
`;
