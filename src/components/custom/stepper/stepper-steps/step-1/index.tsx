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

import { useTranslation } from 'react-i18next';

import {
  ChangeEmailModal,
  ChangePasswordModal,
} from 'components/custom/stepper/elements';
import { CopyIcon } from 'components/svg';
import { useAppContext } from 'context';
import Project from 'constants/project';
import { InfluencerAPI } from 'api';
import { t } from 'i18next';
import {
  emailSchema,
  firstNameSchema,
  lastNameSchema,
  passwordSchema,
} from 'utilities/validators';
import { TFormData } from './types';
import { FormData } from '../..';

const generateRegisterAffiliateLink = (affiliateCode: string) => {
  const { environment, baseUrl: baseDevUrl, baseProdUrl } = Project.app;
  const baseUrl = environment === 'development' ? baseDevUrl : baseProdUrl;

  return `${baseUrl}/register?as=influencer&affiliateCode=${affiliateCode}`;
};

type Step1FormProps = {
  formData: FormData;
  setFormData: any;
  handleErrors: (index: number) => (value: boolean) => void;
};

const Step = ({ formData, setFormData, handleErrors }: Step1FormProps) => {
  const { user } = useAppContext();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // const handleErrors = (index: number) => (value: boolean) => {
  //   setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  // };

  const {
    firstName,
    lastName,
    company,
    role,
    diseaseAreas,
    markets,
    email,
    password,
    invitedBy,
    affiliateFriends,
    affiliateLink,
  } = formData;

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

  const getInfluencerData = async (influencerId: number) => {
    const influencer = await InfluencerAPI.getSingleInfluencer(influencerId);
    return influencer;
  };

  useEffect(() => {
    getInfluencerData(user.id)
      .then((data) =>
        setFormData((prevState: any) => {
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
            errorCallback={handleErrors(0)}
            validators={[
              {
                message: t('First name is required'),
                validator: (firstName) => {
                  const v = firstName as string;
                  if (v.trim()) return true;
                  return false;
                },
              },
              {
                message: t('First name needs to be at least 2 characters long'),
                validator: (firstName) => {
                  try {
                    firstNameSchema.validateSync({ firstName });
                    return true;
                  } catch {
                    return false;
                  }
                },
              },
            ]}
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
            errorCallback={handleErrors(1)}
            validators={[
              {
                message: t('Last name is required'),
                validator: (lastName) => {
                  const v = lastName as string;
                  if (v.trim()) return true;
                  return false;
                },
              },
              {
                message: t('Last name needs to be at least 2 characters long'),
                validator: (lastName) => {
                  try {
                    lastNameSchema.validateSync({ lastName });
                    return true;
                  } catch {
                    return false;
                  }
                },
              },
            ]}
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
            errorCallback={handleErrors(3)}
            validators={[
              {
                message: t('Email is required'),
                validator: (email) => {
                  const v = email as string;
                  if (v.trim()) return true;
                  return false;
                },
              },
              {
                message: t('Not a valid email format'),
                validator: (email) => {
                  try {
                    emailSchema.validateSync({ email });
                    return true;
                  } catch {
                    return false;
                  }
                },
              },
            ]}
            value={email}
            // onValue={(email) => setState({ ...state, email })}
            onValue={(email) => setFormData({ ...formData, email })}
          />
        </StepChange>
        <StepChange>
          <Input
            type="password"
            label={t('Password') as string}
            required
            disabled
            placeholder={t('***************') as string}
            value={formData.password}
            onValue={(password) => setFormData({ ...formData, password })}
            errorCallback={handleErrors(4)}
            validators={[
              {
                message: t('Password is required'),
                validator: (password) => {
                  const v = password as string;
                  if (v.trim()) return true;
                  return false;
                },
              },
              {
                message: t(
                  'Password must have at least one uppercase, lowercase letter, number and symbol'
                ),
                validator: (password) => {
                  try {
                    passwordSchema.validateSync({ password });
                    return true;
                  } catch {
                    return false;
                  }
                },
              },
            ]}
          />
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
          type="select"
          label="Affiliate friends"
          value={affiliateFriends.length ? affiliateFriends[0] : undefined}
          onValue={(affiliateFriends) =>
            setFormData({ ...formData, affiliateFriends })
          }
          options={formData.affiliateFriends}
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
