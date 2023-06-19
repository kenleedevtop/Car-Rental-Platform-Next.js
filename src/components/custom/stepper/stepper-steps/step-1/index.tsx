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
import Project from 'constants/project';
import { InfluencerAPI } from 'api';
import { TFormData } from './types';

const generateRegisterAffiliateLink = (affiliateCode: string) => {
  const { environment, baseUrl: baseDevUrl, baseProdUrl } = Project.app;
  const baseUrl = environment === 'development' ? baseDevUrl : baseProdUrl;

  return `${baseUrl}/register?as=influencer&affiliateCode=${affiliateCode}`;
};

const Step = () => {
  const { user } = useAppContext();

  const [formData, setFormData] = useState<TFormData>({
    firstname: user.firstName,
    lastName: user.lastName,
    company: '',
    role: '',
    diseaseArea: null,
    markets: '',
    email: user.email,
    password: '',
    invitedBy: '',
    affiliateFriends: [],
    affiliateLink: generateRegisterAffiliateLink(user.influencer.affiliateCode),
  });

  const [ceModal, openCeModal, closeCeModal] = useModal(false);
  const [cpModal, openCpModal, closeCpModal] = useModal(false);

  const { push } = useSnackbar();

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formData.affiliateLink);
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
      .then((data) =>
        setFormData((prevState) => {
          const affiliatedFriends = data.invitedInfluencers.map(
            (influencer: { user: any }) => {
              const { id, firstName, lastName } = influencer.user;

              const label = `${firstName} ${lastName}`;

              return { value: id, label };
            }
          );
          return {
            ...prevState,
            affiliateFriends: affiliatedFriends,
          };
        })
      )
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
          setFormData((prevState) => ({
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
            value={formData.firstname}
            onValue={(firstname) => setFormData({ ...formData, firstname })}
          />
          <Input
            type="text"
            label="Last Name"
            placeholder="Doe"
            disabled
            value={formData.lastName}
            onValue={(lastName) => setFormData({ ...formData, lastName })}
          />
        </StepStack>
        <StepChange>
          <Input
            type="text"
            label="Email"
            placeholder="johndoe@gmail.com"
            disabled
            value={formData.email}
            onValue={(email) => setFormData({ ...formData, email })}
          />
          <StepSpan onClick={openCeModal}>Change Email</StepSpan>
        </StepChange>
        <StepChange>
          <Input
            type="text"
            label="Password"
            disabled
            placeholder="**********"
            value={formData.password}
            onValue={(password) => setFormData({ ...formData, password })}
          />
          <StepSpan onClick={openCpModal}>Change Password</StepSpan>
        </StepChange>
        <Input
          type="text"
          label="Invited by"
          disabled
          value={formData.invitedBy}
          onValue={(invitedBy) => setFormData({ ...formData, invitedBy })}
        />
        <Input
          type="select"
          label="Affiliate friends"
          placeholder={`Affiliate friends (${formData.affiliateFriends.length})`}
          disabled={!formData.affiliateFriends.length}
          value={
            formData.affiliateFriends.length
              ? formData.affiliateFriends[0]
              : undefined
          }
          onValue={() => setFormData({ ...formData })}
          options={formData.affiliateFriends}
        />
        <Input
          type="text"
          label="Affiliate link"
          disabled
          value={formData.affiliateLink}
          endAdornment={
            <CopyIcon
              style={{ cursor: 'pointer' }}
              onClick={handleCopyToClipboard}
            />
          }
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
