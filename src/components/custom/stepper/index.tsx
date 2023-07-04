/* eslint-disable @typescript-eslint/no-use-before-define */
import { Button } from 'components/ui';
import React, { useState, FormEvent } from 'react';

import {
  StepperMain,
  StepperContainer,
  StepHelper,
  StepContainer,
  ButtonsMain,
  StepperConnector,
  StepFinal,
} from 'components/custom/stepper/styles';
import { Step, StepLabel } from 'components/custom/stepper/elements';
import {
  Step1,
  Step2,
  Step3,
  Step4,
  StepV,
} from 'components/custom/stepper/stepper-steps';
import { VerifiedIcon } from 'components/svg';
import { useAppContext } from 'context';
import { InfluencerAPI } from 'api';
// eslint-disable-next-line import/no-named-as-default
import Project from 'constants/project';
import { useTranslation } from 'react-i18next';
import { notifyManager } from 'react-query';
import { useSnackbar } from 'hooks';

const steps = [
  'Login Info',
  'Influencer Info',
  'Social Media',
  'Desired Income',
  'Verified',
];

const StepIconComponent = () => (
  <StepFinal>
    <VerifiedIcon />
  </StepFinal>
);
export type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  role: string;
  type: any;
  markets: string;
  email: string;
  password: any;
  invitedBy: string;
  affiliateFriends: null;
  socialPlatforms: any[];
  affiliateLink: string;
  birthDate: null;
  location: any;
  gender: any;
  diseaseAreas: any;
  experienceAs: any;
  ethnicity: any;
  instaP: string;
  instaR: string;
  instaS: string;
  yVideoS: null;
  yVideoM: any;
  yVideoL: any;
  ttPost: any;
  currency: number;
  questionCredit: '';
  averageQuestionSurvey: '';
  interviewShort: '';
  interviewLong: '';
};

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { user, currency } = useAppContext();

  const { t } = useTranslation('register');

  const [errors, setErrors] = useState([false, false, false, false, false]);

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const { push } = useSnackbar();

  const handleErrors = (index: number) => (value: boolean) => {
    setErrors((x) => x.map((a, b) => (b === index ? value : a)));
  };

  const generateRegisterAffiliateLink = (affiliateCode: string) => {
    const { environment, baseUrl: baseDevUrl, baseProdUrl } = Project.app;
    const baseUrl = environment === 'development' ? baseDevUrl : baseProdUrl;

    return `${baseUrl}/register?as=influencer&affiliateCode=${affiliateCode}`;
  };

  const INITIAL_DATA: FormData = {
    firstName: user.firstName,
    lastName: user.lastName,
    company: '',
    role: '',
    type: undefined,
    markets: '',
    email: user.email,
    password: user.password,
    invitedBy: user.influencer.invitendByUserId,
    affiliateFriends: null,
    affiliateLink: generateRegisterAffiliateLink(user.influencer.affiliateCode),
    birthDate: user.influencer.dateOfBirth,
    location: null,
    gender: null,
    diseaseAreas: undefined,
    experienceAs: null,
    ethnicity: null,
    instaP: '',
    instaR: '',
    instaS: '',
    yVideoS: null,
    yVideoM: null,
    yVideoL: null,
    ttPost: null,
    questionCredit: '',
    averageQuestionSurvey: '',
    interviewShort: '',
    interviewLong: '',
    socialPlatforms: [],
    currency: 2,
  };

  const addStep = () => {
    setActiveStep((prev) => prev + 1);
  };

  const decreaseStep = () => {
    setActiveStep((prev) => prev - 1);
  };

  let currencyToSend: number;

  // eslint-disable-next-line consistent-return
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const diseaseValueArray: object[] = [];

      const campaignDesiredIncome: object[] = [];

      const surveyDesiredIncome: object[] = [];

      if (activeStep === 3) {
        formData.diseaseAreas.map(async (disease: any) =>
          diseaseValueArray.push(disease.value)
        );

        if (formData.instaP) {
          campaignDesiredIncome.push({
            postType: 0,
            desiredAmount: parseFloat(formData.instaP),
          });
        }

        if (formData.instaR) {
          campaignDesiredIncome.push({
            postType: 1,
            desiredAmount: parseFloat(formData.instaR),
          });
        }

        if (formData.instaS) {
          campaignDesiredIncome.push({
            postType: 2,
            desiredAmount: parseFloat(formData.instaS),
          });
        }

        if (formData.questionCredit) {
          surveyDesiredIncome.push({
            surveyType: 0,
            desiredAmount: parseFloat(formData.questionCredit),
          });
        }

        if (formData.averageQuestionSurvey) {
          surveyDesiredIncome.push({
            surveyType: 1,
            desiredAmount: parseFloat(formData.averageQuestionSurvey),
          });
        }

        if (formData.interviewShort) {
          surveyDesiredIncome.push({
            surveyType: 2,
            desiredAmount: parseFloat(formData.interviewShort),
          });
        }

        if (formData.interviewLong) {
          surveyDesiredIncome.push({
            surveyType: 3,
            desiredAmount: parseFloat(formData.interviewLong),
          });
        }

        const data = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          location: formData.location,
          gender: formData.gender,
          dateOfBirth: formData.birthDate,
          diseaseArea: formData.diseaseAreas,
          instaP: formData.instaP,
          instR: formData.instaR,
          instaS: formData.instaS,
          experienceAs: formData.experienceAs,
          ethnicity: formData.ethnicity,
          interviewShort: formData.interviewShort,
          interviewLong: formData.interviewLong,
          questionCredit: formData.questionCredit,
          averageQuestionSurvey: formData.averageQuestionSurvey,
          currency: formData.currency,
        };

        const isFormDataValid = Object.values(data).every((value) => !!value);

        if (!isFormDataValid) {
          push('Unable to submit form. Please fill out all required fields!', {
            variant: 'error',
          });
        } else if (isFormDataValid) {
          addStep();
          push('Form submitted.', { variant: 'success' });
        }

        await InfluencerAPI.updateInfluencer(
          {
            firstName: formData.firstName || undefined,
            lastName: formData.lastName || undefined,
            email: formData.email || undefined,
            dateOfBirth: formData.birthDate || undefined,
            ethnicityId: formData.ethnicity.value || undefined,
            currency: currencyToSend,
            diseaseAreas: diseaseValueArray || undefined,
            password: formData.password,
            // experienceAs: formData.experienceAs.value || undefined,
            affiliateLink: formData.affiliateLink || undefined,
            affiliateFriends: formData.affiliateFriends || null,
            questionCredit: formData.questionCredit || undefined,
            averageQuestionSurvey: formData.averageQuestionSurvey,
            interviewShort: formData.interviewShort || undefined,
            interviewLong: formData.interviewLong || undefined,
            locationId: formData.location.value || undefined,
            campaignDesiredIncome: campaignDesiredIncome || undefined,
            surveyDesiredIncome: surveyDesiredIncome || undefined,
            gender:
              formData.gender.value === 0 || formData.gender.value
                ? formData.gender.value
                : undefined,
            socialPlatforms: formData.socialPlatforms || undefined,
            type: formData.experienceAs.value || undefined,
          },
          user.id
        );
        // push('Form submitted.', {
        //   variant: 'success',
        // });

        // eslint-disable-next-line consistent-return

        // eslint-disable-next-line no-else-return
      } else {
        addStep();
      }
    } catch (error) {
      console.log('error with submit', error);
      push('Unable to submit form. Please fill out all required fields!', {
        variant: 'error',
      });
    }
  };

  const [formData, setFormData] = useState(INITIAL_DATA);

  return (
    <StepperMain onSubmit={onSubmit}>
      <StepHelper>
        <StepContainer>
          <StepperContainer
            activeStep={activeStep}
            alternativeLabel
            style={{ marginBottom: '50px' }}
            connector={<StepperConnector />}
          >
            {steps.map((label, index) =>
              index !== 4 ? (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ) : (
                <Step key={label}>
                  <StepLabel StepIconComponent={StepIconComponent}>
                    {label}
                  </StepLabel>
                </Step>
              )
            )}
          </StepperContainer>
          {activeStep === 0 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              handleErrors={handleErrors}
            />
          )}
          {activeStep === 1 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              handleErrors={handleErrors}
            />
          )}
          {activeStep === 2 && <Step3 />}
          {activeStep === 3 && (
            <Step4
              formData={formData}
              setFormData={setFormData}
              handleErrors={handleErrors}
            />
          )}
          {activeStep === 4 && <StepV />}
        </StepContainer>
        <ButtonsMain>
          <Button
            disabled={activeStep === 0}
            variant="outlined"
            size="large"
            color="secondary"
            onClick={decreaseStep}
          >
            Previous
          </Button>
          <Button
            type="submit"
            disabled={activeStep === 4}
            variant="contained"
            size="large"
            color="primary"
            onClick={onSubmit}
          >
            {activeStep === 3 ? 'Submit' : 'Next'}
          </Button>
        </ButtonsMain>
      </StepHelper>
    </StepperMain>
  );
};

export default Stepper;
