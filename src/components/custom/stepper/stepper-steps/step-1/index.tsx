import { Grid, GridCell, Stack } from 'components/system';
import { Input } from 'components/ui';
import { useModal } from 'hooks';
import React, { useState } from 'react';

import {
  StepChange,
  StepSpan,
  StepContainer,
  StepForm,
  StepStack,
} from 'components/custom/stepper/stepper-steps/step-1/style';

import {
  ChangeEmailModal,
  ChangePasswordModal,
} from 'components/custom/stepper/elements';
import { CopyIcon } from 'components/svg';

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
    invitedBy: '',
    affiliateFriends: [
      {
        value: 1,
        label: '@ivanjurisic',
      },
      {
        value: 2,
        label: 'Affiliate friend 2',
      },
      {
        value: 3,
        label: 'Affiliate friend 3',
      },
    ],
    affiliateLink: '',
  });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  return (
    <StepContainer>
      <StepForm>
        <StepStack direction="horizontal">
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
        </StepStack>
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
          type="text"
          label="Invited by"
          placeholder="Username1"
          value={filter.invitedBy}
          onValue={(invitedBy) => setFilter({ ...filter, invitedBy })}
        />
        <Input
          type="multiselect"
          disabled
          label="Affiliate friends"
          value={filter.affiliateFriends}
          onValue={(affiliateFriends) =>
            setFilter({ ...filter, affiliateFriends })
          }
        />
        <Input
          type="text"
          label="Affiliate link"
          disabled
          value={filter.affiliateLink}
          endAdornment={<CopyIcon />}
          onValue={(affiliateLink) => setFilter({ ...filter, affiliateLink })}
        />
      </StepForm>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </StepContainer>
  );
};

export default Step;
