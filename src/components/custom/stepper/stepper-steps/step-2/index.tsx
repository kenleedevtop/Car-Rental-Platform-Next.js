import { Input } from 'components/ui';
import React, { useState } from 'react';

import {
  StepContainer,
  StepForm,
  StepStack,
} from 'components/custom/stepper/stepper-steps/step-2/style';

const Step = () => {
  const [filter, setFilter] = useState({
    birthDate: null,
    location: '',
    gender: null,
    diseaseArea: '',
  });

  return (
    <StepContainer>
      <StepForm>
        <StepStack direction="horizontal">
          <Input
            type="date"
            label="Date of Birth"
            placeholder="Nov 17, 1993"
            value={filter.birthDate}
            onValue={(birthDate) => setFilter({ ...filter, birthDate })}
          />
          <Input
            type="text"
            label="Location"
            placeholder="John"
            value={filter.location}
            onValue={(location) => setFilter({ ...filter, location })}
          />
        </StepStack>
        <StepStack direction="horizontal">
          <Input
            type="select"
            label="Gender"
            placeholder="Male"
            value={filter.gender}
            onValue={(gender) => setFilter({ ...filter, gender })}
          />
          <Input
            type="text"
            label="Disease Area"
            placeholder="John"
            value={filter.diseaseArea}
            onValue={(diseaseArea) => setFilter({ ...filter, diseaseArea })}
          />
        </StepStack>
      </StepForm>
    </StepContainer>
  );
};

export default Step;
