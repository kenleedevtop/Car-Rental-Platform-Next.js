import { InstagramIcon, TiktokIcon, TwitterIcon } from 'components/svg';
import {
  StepContainer,
  StepForm,
  StepStack,
} from 'components/custom/stepper/stepper-steps/step-3/style';
import { Button } from 'components/ui';
import React from 'react';

const Step = () => (
  <StepContainer>
    <StepForm>
      <StepStack direction="horizontal">
        <Button
          endIcon={<InstagramIcon width="18" height="18" />}
          size="large"
          variant="contained"
          color="primary"
        >
          Link
        </Button>
        <Button
          endIcon={<TwitterIcon width="18" height="18" />}
          size="large"
          variant="contained"
          color="primary"
        >
          Link
        </Button>
        <Button
          endIcon={<TiktokIcon width="18" height="18" />}
          size="large"
          variant="contained"
          color="default"
        >
          Linked
        </Button>
      </StepStack>
    </StepForm>
  </StepContainer>
);

export default Step;
