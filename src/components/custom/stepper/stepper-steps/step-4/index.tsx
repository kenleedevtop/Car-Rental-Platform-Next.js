/* eslint-disable no-shadow */
import { Tooltip } from '@mui/material';
import { InfoIcon } from 'components/svg';
import { Stack } from 'components/system';
import {
  StepContainer,
  StepStack,
  StepLeft,
  StepRight,
  StepFMiddle,
  StepSMiddle,
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
    yVideoS,
    yVideoM,
    yVideoL,
    ttPost,
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
      <div
        style={{
          height: '25px',
          width: '100%',
          color: '#2D3779',
          font: 'inter',
          fontWeight: '600',
          display: 'grid',
          gridTemplateColumns:'repeat(8, 1fr)',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p>Campaigns</p>
        </div>
        <div style={{ justifyContent: 'center', gridColumn:'3'}}>
          <p>Surveys</p>
        </div>
      </div>
      <StepContainer style={{ display: 'flex' }}>
        <StepLeft>
          <Stack>
            <p style={{ color: '#7E839F', font: 'inter', fontWeight: '600' }}>
              Instagram
            </p>
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
              style={{ color: 'red', font: 'inter', fontWeight: '500' }}
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
            <p style={{ color: '#7E839F', font: 'inter', fontWeight: '600' }}>
              Youtube
            </p>
            <Input
              type="text"
              label="Video - 10sec"
              placeholder="Please Enter Amount"
              value={yVideoS}
              onValue={(yVideoS) => setFormData({ ...formData, yVideoS })}
            />
            <Input
              type="text"
              label="Video - 30sec"
              placeholder="Please Enter Amount"
              value={yVideoM}
              onValue={(yVideoM) => setFormData({ ...formData, yVideoM })}
            />
            <Input
              type="text"
              label="Video - 60sec"
              placeholder="Please Enter Amount"
              value={yVideoL}
              onValue={(yVideoL) => setFormData({ ...formData, yVideoL })}
            />
          </Stack>
        </StepFMiddle>
        <StepSMiddle>
          <Stack>
            <p style={{ color: '#7E839F', font: 'inter', fontWeight: '600' }}>
              TikTok
            </p>
            <Input
              type="text"
              label="Post"
              placeholder="Please Enter Amount"
              value={ttPost}
              onValue={(ttPost) => setFormData({ ...formData, ttPost })}
            />
          </Stack>
        </StepSMiddle> */}
        <StepRight>
          <Stack>
            <p style={{ color: '#7E839F', font: 'inter', fontWeight: '600' }}>
              Questionnaire
            </p>
            <p
              style={{
                color: '#6f6f6f',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
              }}
            >
              <p style={{ font: 'inter', fontWeight: '500' }}>
                Question Credit
              </p>

              <Tooltip
                componentsProps={{
                  tooltip: {
                    sx: {
                      bgcolor: 'common.white',
                      boxShadow: '0px 5px 15px 0px rgba(0,4,4,0.25)',
                    },
                  },
                }}
                title={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      padding: '10px 2.5px',
                      color: 'black',
                      backgroundColor: 'white',
                      boxShadow: '2px',
                    }}
                  >
                    <p
                      style={{
                        font: 'inter',
                        fontWeight: '600',
                        color: '#7E839F',
                        fontSize: '11px',
                        lineHeight: '13.31px',
                      }}
                    >
                      Question Credit
                    </p>
                    <p
                      style={{
                        font: 'inter',
                        fontWeight: '500',
                        color: '#9F9FB0',
                        fontSize: '11px',
                        lineHeight: '13.31px',
                      }}
                    >
                      Question Credit is determined by the complexity of the
                      question. If the question is taking more time for
                      participant to answer it will be worth more credits.
                    </p>
                    <p
                      style={{
                        font: 'inter',
                        fontWeight: '500',
                        color: '#9F9FB0',
                        fontSize: '11px',
                        lineHeight: '13.31px',
                      }}
                    >
                      <p>Example:</p>
                      <p>Yes or No = 1 credit</p>
                      <p>Multiple Choice = 1 credit</p>
                      <p>Open-ended Question = 2 credits</p>
                    </p>
                    <p
                      style={{
                        font: 'inter',
                        fontWeight: '500',
                        color: '#9F9FB0',
                        fontSize: '11px',
                        lineHeight: '13.31px',
                      }}
                    >
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
            <p style={{ color: '#7E839F', fontWeight: '600', font: 'inter' }}>
              Interview
            </p>
            <Input
              type="text"
              label="30min"
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
              label="60min"
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
