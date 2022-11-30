import styled from '@emotion/styled';
import { Stepper } from '@mui/material';
import Stack from 'components/system/stack';
import { Card } from 'components/ui';

export const StepperMain = styled(Card)`
  height: 80vh;
`;

export const StepperContainer = styled(Stepper)`
  margin-bottom: 20px;
`;

export const StepHelper = styled(Stack)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StepContainer = styled.div``;

export const ButtonsMain = styled.div`
    width: 100%;
    display: flex;
    align-items center;
    justify-content: space-between;
`;
