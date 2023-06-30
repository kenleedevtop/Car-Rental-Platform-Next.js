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
import { InfluencerAPI } from 'api';
import { TSelectFieldType } from 'features/discover-influencers/role/admin/elements/influencer-profile/types';
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

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);
  const [affiliateFriendsList, setAffiliateFriendsList] = useState<
    TSelectFieldType[]
  >([]);

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

  const getInfluencerData = async (influencerId: number) => {
    const influencer = await InfluencerAPI.getSingleInfluencer(influencerId);
    return influencer;
  };

  useEffect(() => {
    getInfluencerData(user.id)
      .then((data) => {
        const affiliatedFriends = data.invitedInfluencers.map(
          (influencer: { user: any }) => {
            const { id, firstName, lastName } = influencer.user;

            const label = `${firstName} ${lastName}`;

            return { value: id, label };
          }
        );
        setAffiliateFriendsList(affiliatedFriends);
      })
      .catch(() => {
        push('Something failed!', {
          variant: 'error',
        });
      });
  }, []);

  useEffect(() => {
    if (user.influencer.invitendByUserId) {
      getInfluencerData(user.influencer.invitendByUserId)
        .then((influencer) => {
          setFormData((prevState: any) => ({
            ...prevState,
            invitedBy: `${influencer.firstName} ${influencer.lastName}`,
          }));
        })
        .catch(() => push('Wrong influencer', { variant: 'error' }));
    }
  }, [user]);

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
          /> 
          <StepSpan onClick={openCpModal}>Change Password</StepSpan> */}
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
          type="select"
          label="Affiliate friends"
          placeholder="Affiliate friends"
          value={affiliateFriends}
          onValue={(affiliateFriends) =>
            setFormData({ ...formData, affiliateFriends })
          }
          options={affiliateFriendsList}
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
