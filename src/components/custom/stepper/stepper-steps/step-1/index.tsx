import { Grid, GridCell, Stack } from 'components/system';
import { Input } from 'components/ui';
import { useModal } from 'hooks';
import React, { useState } from 'react';

import {
  StepChange,
  StepSpan,
} from 'components/custom/stepper/stepper-steps/step-1/style';

import {
  ChangeEmailModal,
  ChangePasswordModal,
} from 'components/custom/stepper/elements';

const Step = () => {
  const [filter, setFilter] = useState({
    firstname: '',
    lastName: '',
    company: '',
    role: '',
    diseaseArea: null,
    markets: '',
    email: '',
    password: '',
    colleagues: [],
  });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  return (
    <Grid columns={8}>
      <GridCell columnSpan={3}>
        <Stack>
          <Grid columns={2}>
            <Input
              type="text"
              label="First Name"
              placeholder="John"
              value={filter.firstname}
              onValue={(firstname) => setFilter({ ...filter, firstname })}
            />
            <Input
              type="text"
              label="Last Name"
              placeholder="Doe"
              value={filter.lastName}
              onValue={(lastName) => setFilter({ ...filter, lastName })}
            />
          </Grid>
          <StepChange>
            <Input
              type="text"
              label="Email"
              placeholder="johndoe@gmail.com"
              value={filter.email}
              onValue={(email) => setFilter({ ...filter, email })}
            />
            <StepSpan onClick={openCeModal}>Change Email</StepSpan>
          </StepChange>
          <StepChange>
            <Input
              type="text"
              label="Password"
              placeholder="**********"
              value={filter.password}
              onValue={(password) => setFilter({ ...filter, password })}
            />
            <StepSpan onClick={openCpModal}>Change Password</StepSpan>
          </StepChange>
          <Input
            type="multiselect"
            label="Add Affiliate"
            placeholder="name@company.com;"
            value={filter.colleagues}
            onValue={(colleagues) => setFilter({ ...filter, colleagues })}
          />
        </Stack>
      </GridCell>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </Grid>
  );
};

export default Step;
