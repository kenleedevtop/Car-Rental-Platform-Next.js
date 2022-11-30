import React from 'react';
import { TStepProps } from 'components/custom/stepper/elements/step/type';
import { StepMain } from 'components/custom/stepper/elements/step/styles';

const Step = ({ ...props }: TStepProps) => <StepMain {...props} />;

export default Step;
