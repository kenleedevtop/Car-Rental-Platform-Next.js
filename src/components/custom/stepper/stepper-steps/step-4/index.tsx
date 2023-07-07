/* eslint-disable no-shadow */
import { Tooltip } from '@mui/material';
import { InfoIcon } from 'components/svg';
import { Stack } from 'components/system';
import {
  StepContainer,
  StepStack,
  StepLeft,
  StepRight,
} from 'components/custom/stepper/stepper-steps/step-4/style';
import { Input } from 'components/ui';
import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  instagramPostSchema,
  instagramReelSchema,
  instagramStorySchema,
  lastNameSchema,
} from 'utilities/validators';
import { useAppContext } from 'context';
import { FormData } from '../..';
import { StepText } from '../step-2/style';

type Step4FormProps = {
  formData: FormData;
  setFormData: any;
  handleErrors: (index: number) => (value: boolean) => void;
};

const Step = ({ formData, setFormData, handleErrors }: Step4FormProps) => {
  const {
    instaP,
    instaR,
    instaS,
    questionCredit,
    averageQuestionSurvey,
    interviewShort,
    interviewLong,
  } = formData;

  const { t } = useTranslation('register');

  const { currency } = useAppContext();

  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  let currencyToSend: number;

  if (currency === 'CHF') {
    currencyToSend = 2;
  }

  if (currency === 'EUR') {
    currencyToSend = 0;
  }

  if (currency === 'USD') {
    currencyToSend = 1;
  }

  return (
    <StepStack>
      <StepContainer>
        <StepLeft>
          <Stack>
            <p style={{ color: '#2D3779' }}>Instagram</p>
            <Input
              type="text"
              label="Post"
              placeholder="Please Enter Amount"
              value={instaP}
              // onValue={(instaP) => setFilter({ ...filter, instaP })}
              onValue={(instaP) => setFormData({ ...formData, instaP })}
              errorCallback={handleErrors(10)}
              // validators={[
              //   {
              //     message: t('Post amount is required'),
              //     validator: (instaP) => {
              //       const v = instaP as string;
              //       if (v.trim()) return true;
              //       return false;
              //     },
              //   },
              //   {
              //     message: t('Please enter post amount!'),
              //     validator: (instaP) => {
              //       try {
              //         instagramPostSchema.validateSync({ instaP });
              //         return true;
              //       } catch {
              //         return false;
              //       }
              //     },
              //   },
              // ]}
            />
            <Input
              type="text"
              label="Story"
              placeholder="Please Enter Amount"
              value={instaS}
              // onValue={(instaP) => setFilter({ ...filter, instaP })}
              onValue={(instaS) => setFormData({ ...formData, instaS })}
              errorCallback={handleErrors(11)}
              // validators={[
              //   {
              //     message: t('Story amount is required'),
              //     validator: (instaS) => {
              //       const v = instaS as string;
              //       if (v.trim()) return true;
              //       return false;
              //     },
              //   },
              //   {
              //     message: t('Please enter story amount!'),
              //     validator: (instaS) => {
              //       try {
              //         instagramStorySchema.validateSync({ instaS });
              //         return true;
              //       } catch {
              //         return false;
              //       }
              //     },
              //   },
              // ]}
            />
            <Input
              type="text"
              label="Reel"
              placeholder="Please Enter Amount"
              value={instaR}
              // onValue={(instaP) => setFilter({ ...filter, instaP })}
              onValue={(instaR) => setFormData({ ...formData, instaR })}
              errorCallback={handleErrors(12)}
              // validators={[
              //   {
              //     message: t('Reel amount is required'),
              //     validator: (instaR) => {
              //       const v = instaR as string;
              //       if (v.trim()) return true;
              //       return false;
              //     },
              //   },
              //   {
              //     message: t('Please enter reel amount!'),
              //     validator: (instaR) => {
              //       try {
              //         instagramReelSchema.validateSync({ instaR });
              //         return true;
              //       } catch {
              //         return false;
              //       }
              //     },
              //   },
              // ]}
            />
          </Stack>
        </StepLeft>
        {/* <StepFMiddle>
          <Stack>
            <p style={{ color: '#6f6f6f' }}>Twitter</p>
            <Input
              type="text"
              label="Video - 10sec"
              placeholder="Please Enter Amount"
              value={filter.yVideoS}
              onValue={(yVideoS) => setFilter({ ...filter, yVideoS })}
            />
            <Input
              type="text"
              label="Video - 30sec"
              placeholder="Please Enter Amount"
              value={filter.yVideoM}
              onValue={(yVideoM) => setFilter({ ...filter, yVideoM })}
            />
            <Input
              type="text"
              label="Video - 60sec"
              placeholder="Please Enter Amount"
              value={filter.yVideoL}
              onValue={(yVideoL) => setFilter({ ...filter, yVideoL })}
            />
          </Stack>
        </StepFMiddle>
        <StepSMiddle> */}
        {/* <Stack>
          <p style={{ color: '#6f6f6f' }}>TikTok</p>
          <Input
            type="text"
            label="Post"
            placeholder="Please Enter Amount"
            value={filter.yVideoL}
            onValue={(yVideoL) => setFilter({ ...filter, yVideoL })}
          />
        </Stack>
      </StepSMiddle> */}
        <StepRight>
          <Stack>
            <p style={{ color: '#2D3779' }}>Questionnaire</p>
            <p
              style={{
                color: '#6f6f6f',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
              }}
            >
              Question Credit{' '}
              <Tooltip
                title={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '10px 2.5px',
                    }}
                  >
                    <p>Question Credit</p>
                    <p>
                      Question Credit is determined by the complexity of the
                      question. If the question is taking more time for
                      participant to answer it will be worth more credits.
                    </p>
                    <p>
                      <p>Example:</p>
                      <p>Yes or No = 1 credit</p>
                      <p>Multiple Choice = 1 credit</p>
                      <p>Open-ended Question = 2 credits</p>
                    </p>
                    <p>
                      Additional credits will be assigned to the questions that
                      require more time e.g. watching a short video.
                    </p>
                  </div>
                }
                style={{
                  width: '20px',
                  height: '20px',
                  marginLeft: '10px',
                  whiteSpace: 'pre-wrap',
                }}
              >
                <span>
                  <InfoIcon />
                </span>
              </Tooltip>
            </p>

            <Input
              type="text"
              placeholder="Please Enter Amount"
              value={questionCredit}
              onValue={(questionCredit) =>
                setFormData({ ...formData, questionCredit })
              }
              style={{ marginTop: '-15px' }}
              errorCallback={handleErrors(13)}
              // validators={[
              //   {
              //     message: t('Question credit amount is required'),
              //     validator: (questionCredit) => {
              //       const v = questionCredit as string;
              //       if (v.trim()) return true;
              //       return false;
              //     },
              //   },
              //   {
              //     message: t('Please enter question credit amount!'),
              //     validator: (questionCredit) => {
              //       try {
              //         lastNameSchema.validateSync({ questionCredit });
              //         return true;
              //       } catch {
              //         return false;
              //       }
              //     },
              //   },
              // ]}
            />

            <Input
              type="text"
              label="Average 20 Question Survey"
              placeholder="Calculation"
              value={Number(formData.questionCredit) * 40}
              disabled
              onValue={(averageQuestionSurvey) =>
                setFormData({ ...formData, averageQuestionSurvey })
              }
            />
            <p style={{ color: '#6f6f6f' }}>Interview</p>
            <Input
              type="text"
              label="Interview: 30min"
              placeholder="Please Enter Amount"
              value={interviewShort}
              onValue={(interviewShort) =>
                setFormData({ ...formData, interviewShort })
              }
              errorCallback={handleErrors(14)}
              // validators={[
              //   {
              //     message: t('Interview amount is required'),
              //     validator: (lastName) => {
              //       const v = lastName as string;
              //       if (v.trim()) return true;
              //       return false;
              //     },
              //   },
              //   {
              //     message: t('Please enter interview amount!'),
              //     validator: (lastName) => {
              //       try {
              //         lastNameSchema.validateSync({ lastName });
              //         return true;
              //       } catch {
              //         return false;
              //       }
              //     },
              //   },
              // ]}
            />
            <Input
              type="text"
              label="Interview: 60min"
              placeholder="Please Enter Amount"
              value={interviewLong}
              onValue={(interviewLong) =>
                setFormData({ ...formData, interviewLong })
              }
              errorCallback={handleErrors(15)}
              // validators={[
              //   {
              //     message: t('Interview amount is required'),
              //     validator: (lastName) => {
              //       const v = lastName as string;
              //       if (v.trim()) return true;
              //       return false;
              //     },
              //   },
              //   {
              //     message: t('Please enter interview amount!'),
              //     validator: (lastName) => {
              //       try {
              //         lastNameSchema.validateSync({ lastName });
              //         return true;
              //       } catch {
              //         return false;
              //       }
              //     },
              //   },
              // ]}
            />
          </Stack>
        </StepRight>
      </StepContainer>
      <StepText>
        *It&apos;s enough to fill out only one field for the submit form.
      </StepText>
    </StepStack>
  );
};

export default Step;
