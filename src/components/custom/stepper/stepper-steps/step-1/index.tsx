/* eslint-disable no-shadow */
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

import { FormData } from '../..';

type Step1FormProps = {
  formData: FormData;
  setFormData: any;
};

const Step = ({ formData, setFormData }: Step1FormProps) => {
  const { user } = useAppContext();

  const {
    firstName,
    lastName,
    company,
    role,
    diseaseAreas,
    markets,
    email,
    // password,
    invitedBy,
    affiliateFriends,
    affiliateLink,
  } = formData;

  // const [state, setState] = useState({
  //   firstname: user.firstName,
  //   lastName: user.lastName,
  //   company: '',
  //   role: '',
  //   diseaseArea: null,
  //   markets: '',
  //   email: user.email,
  //   password: '',
  //   invitedBy: user.influencer.invitendByUserId,
  //   affiliateFriends: [],
  //   affiliateLink: user.influencer.affiliateCode,
  // });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  const { push } = useSnackbar();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(affiliateLink);
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
            required
            value={firstName}
            onValue={(firstname) => setFormData({ ...formData, firstname })}
            // onValue={(firstName) => updateFields(firstName, firstName)}
          />
          <Input
            type="text"
            label="Last Name"
            placeholder="Doe"
            disabled
            required
            value={lastName}
            // onValue={(lastName) => setState({ ...state, lastName })}
            onValue={(lastName) => setFormData({ ...formData, lastName })}
          />
        </StepStack>
        <StepChange>
          <Input
            type="text"
            label="Email"
            placeholder="johndoe@gmail.com"
            disabled
            required
            value={email}
            // onValue={(email) => setState({ ...state, email })}
            onValue={(email) => setFormData({ ...formData, email })}
          />
          <StepSpan onClick={openCeModal}>Change Email</StepSpan>
        </StepChange>
        <StepChange>
          {/* <Input
            type="text"
            label="Password"
            disabled
            placeholder="**********"
            value={password}
            // onValue={(password) => setState({ ...state, password })}
            onValue={password => setFormData({ ...formData, password })}
          /> */}
          <StepSpan onClick={openCpModal}>Change Password</StepSpan>
        </StepChange>
        <Input
          type="text"
          label="Invited by"
          disabled
          // required
          value={invitedBy}
          // onValue={(invitedBy) => setState({ ...state, invitedBy })}
          onValue={(invitedBy) => setFormData({ ...formData, invitedBy })}
        />
        <Input
          type="multiselect"
          disabled
          label="Affiliate friends"
          value={affiliateFriends}
          // onValue={(affiliateFriends) =>
          //   setState({ ...state, affiliateFriends })
          // }
          onValue={(affiliateFriends) =>
            setFormData({ ...formData, affiliateFriends })
          }
        />
        <Input
          type="text"
          label="Affiliate link"
          disabled
          required
          value={affiliateLink}
          endAdornment={
            <CopyIcon
              style={{ cursor: 'pointer' }}
              onClick={handleCopyToClipboard}
            />
          }
          // onValue={(affiliateLink) => setState({ ...state, affiliateLink })}
          onValue={(affiliateLink) =>
            setFormData({ ...formData, affiliateLink })
          }
        />
      </StepForm>
      {ceModal && <ChangeEmailModal onClose={closeCeModal} />}
      {cpModal && <ChangePasswordModal onClose={closeCpModal} />}
    </StepContainer>
  );
};

export default Step;
