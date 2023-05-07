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
    location: null,
    gender: null,
    diseaseArea: null,
    experienceAs: null,
  });

  return (
    <StepContainer>
      <StepForm>
        <StepStack direction="horizontal">
          <Input
            type="date"
            label="Date of Birth"
            placeholder="Please Select"
            value={filter.birthDate}
            onValue={(birthDate) => setFilter({ ...filter, birthDate })}
          />
          <Input
            type="select"
            label="Please Select"
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
            options={[
              {
                value: 0,
                label: 'Male',
              },
              {
                value: 1,
                label: 'Female',
              },
              {
                value: 2,
                label: 'Other',
              },
            ]}
          />
          <Input
            type="select"
            label="Disease Area"
            placeholder="John"
            value={filter.diseaseArea}
            onValue={(diseaseArea) => setFilter({ ...filter, diseaseArea })}
          />
        </StepStack>
        <StepStack>
          <Input
            type="select"
            label="Experience As"
            placeholder="Please Select"
            value={filter.experienceAs}
            onValue={(experienceAs) => setFilter({ ...filter, experienceAs })}
            options={[
              {
                value: 0,
                label: 'Patient',
              },
              {
                value: 1,
                label: 'Caregiver',
              },
            ]}
          />
        </StepStack>
      </StepForm>
    </StepContainer>
  );
};

export default Step;
