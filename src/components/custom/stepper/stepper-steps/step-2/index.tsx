import { Input } from 'components/ui';
import React, { useState } from 'react';

import {
  StepContainer,
  StepForm,
  StepStack,
  StepText,
} from 'components/custom/stepper/stepper-steps/step-2/style';

const Step = () => {
  const [filter, setFilter] = useState({
    birthDate: null,
    location: null,
    gender: null,
    diseaseArea: null,
    experienceAs: null,
    ethnicity: null,
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
        <StepStack direction="horizontal">
          <Input
            type="text"
            label="Ethnicity"
            placeholder="Please Select"
            value={filter.ethnicity}
            onValue={(ethnicity) => setFilter({ ...filter, ethnicity })}
          />
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
        <StepText>
          *These details allows us to match you with fitting projects based on
          the client-set criteria, boosting your opportunities and income.{' '}
          <br />
          Your profile and data will stay anonymised to others at all times,
          unless you explicitly consent to share it to a specific client during
          your campaign application (first name and username only).
        </StepText>
      </StepForm>
    </StepContainer>
  );
};

export default Step;
