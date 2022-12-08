import { Button } from 'components/ui';
import React, { useState } from 'react';

import {
  StepperMain,
  StepperContainer,
  StepHelper,
  StepContainer,
  ButtonsMain,
} from 'components/custom/stepper/styles';
import { Step, StepLabel } from 'components/custom/stepper/elements';
import {
  Step1,
  Step2,
  Step3,
  Step4,
  StepV,
} from 'components/custom/stepper/stepper-steps';
import { VerifiedIcon } from 'components/svg';

const steps = [
  'Login Info',
  'Influencer Info',
  'Social Media',
  'Desired Income',
  'Verified',
];

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const addStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const decreaseStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <StepperMain>
      <StepHelper>
        <StepContainer>
          <StepperContainer
            activeStep={activeStep}
            alternativeLabel
            style={{ marginBottom: '50px' }}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel> {label} </StepLabel>
              </Step>
            ))}
          </StepperContainer>
          {activeStep === 0 && <Step1 />}
          {activeStep === 1 && <Step2 />}
          {activeStep === 2 && <Step3 />}
          {activeStep === 3 && <Step4 />}
          {activeStep === 4 && <StepV />}
        </StepContainer>
        <ButtonsMain>
          <Button
            disabled={activeStep === 0}
            variant="outlined"
            size="large"
            color="secondary"
            onClick={decreaseStep}
          >
            Previous
          </Button>
          <Button
            disabled={activeStep === 4}
            variant="contained"
            size="large"
            color="primary"
            onClick={addStep}
          >
            Next
          </Button>
        </ButtonsMain>
      </StepHelper>
    </StepperMain>
  );
};

export default Stepper;
