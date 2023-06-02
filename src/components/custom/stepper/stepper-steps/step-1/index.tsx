import { Input } from 'components/ui';
import { useModal, useSnackbar } from 'hooks';
import React, { useEffect, useState } from 'react';

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
import { useAppContext } from 'context';

const Step = () => {
  const { user } = useAppContext();

  const [state, setState] = useState({
    firstname: user.firstName,
    lastName: user.lastName,
    company: '',
    role: '',
    diseaseArea: null,
    markets: '',
    email: user.email,
    password: '',
    invitedBy: user.influencer.invitendByUserId,
    affiliateFriends: [],
    affiliateLink: user.influencer.affiliateCode,
  });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  console.log(user);

  const { push } = useSnackbar();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(state.affiliateLink);
      push(`Successfully copied!`, {
        variant: 'success',
      });
    } catch {
      push('Something failed!', {
        variant: 'error',
      });
    }
  };

  return (
    <StepContainer>
      <StepForm>
        <StepStack direction="horizontal">
          <Input
            type="text"
            label="First Name"
            placeholder="John"
            disabled
            value={state.firstname}
            onValue={(firstname) => setState({ ...state, firstname })}
          />
          <Input
            type="text"
            label="Last Name"
            placeholder="Doe"
            disabled
            value={state.lastName}
            onValue={(lastName) => setState({ ...state, lastName })}
          />
        </StepStack>
        <StepChange>
          <Input
            type="text"
            label="Email"
            placeholder="johndoe@gmail.com"
            disabled
            value={state.email}
            onValue={(email) => setState({ ...state, email })}
          />
          <StepSpan onClick={openCeModal}>Change Email</StepSpan>
        </StepChange>
        <StepChange>
          <Input
            type="text"
            label="Password"
            disabled
            placeholder="**********"
            value={state.password}
            onValue={(password) => setState({ ...state, password })}
          />
          <StepSpan onClick={openCpModal}>Change Password</StepSpan>
        </StepChange>
        <Input
          type="text"
          label="Invited by"
          disabled
          value={state.invitedBy}
          onValue={(invitedBy) => setState({ ...state, invitedBy })}
        />
        <Input
          type="multiselect"
          disabled
          label="Affiliate friends"
          value={state.affiliateFriends}
          onValue={(affiliateFriends) =>
            setState({ ...state, affiliateFriends })
          }
        />
        <Input
          type="text"
          label="Affiliate link"
          disabled
          value={state.affiliateLink}
          endAdornment={
            <CopyIcon
              style={{ cursor: 'pointer' }}
              onClick={handleCopyToClipboard}
            />
          }
          onValue={(affiliateLink) => setState({ ...state, affiliateLink })}
        />
      </StepForm>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </StepContainer>
  );
};

export default Step;
