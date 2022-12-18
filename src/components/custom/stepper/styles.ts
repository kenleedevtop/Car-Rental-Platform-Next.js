import styled from '@emotion/styled';
import {
  StepConnector,
  stepConnectorClasses,
  Stepper,
  Theme,
} from '@mui/material';
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

export const StepperConnector = styled(StepConnector)<{ theme?: Theme }>`
  ${({ theme }) => `
  top: 6px;
  left: calc(-50% + 11px);
  right: calc(50% + 11px);

  .${stepConnectorClasses.alternativeLabel} {
    &.${stepConnectorClasses.active} {
      .${stepConnectorClasses.line} {
    background: ${theme.palette.primary.main};
      }
    }
  }

  .${stepConnectorClasses.line} {
    border: 5px solid ${theme.palette.common.stepper};
  }

  &.${stepConnectorClasses.completed} {
    .${stepConnectorClasses.line} {
      border-color: ${theme.palette.primary.main};
    }
  }

  &.${stepConnectorClasses.active} {
    .${stepConnectorClasses.line} {
      border-color: ${theme.palette.primary.main};
    }
  }
 `}
`;

export const StepFinal = styled.div<{ theme?: Theme }>`
  ${({ theme }) => `
  width: 24px;
  height: 24px;
  background: ${theme.palette.common.stepper};
  border-radius: 50px;
  padding: ${theme.spacing(0.8)};

  svg{ 
    width: 100%;
    height: 100%;
    color: white;
  }

  `}
`;
