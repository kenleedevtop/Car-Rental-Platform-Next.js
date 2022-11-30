import { Grid, GridCell, Stack } from 'components/system';
import { Input } from 'components/ui';
import React, { useState } from 'react';

import { Step2Main } from 'components/custom/stepper/stepper-steps/step-2/style';

const Step = () => {
  const [filter, setFilter] = useState({
    birthDate: null,
    location: '',
    gender: null,
    diseaseArea: '',
  });

  return (
    <Step2Main columns={2}>
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
    </Step2Main>
  );
};

export default Step;
