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

import { FormData } from '../..';

type Step4FormProps = {
  formData: FormData;
  setFormData: any;
};

const Step = ({ formData, setFormData }: Step4FormProps) => {
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

  return (
    <StepStack>
      <div
        style={{
          height: '25px',
          width: '100%',
          color: '#2D3779',
          font: 'inter',
          fontWeight: '600',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p>Campaigns</p>
        </div>
        <div style={{ justifyContent: 'left' }}>
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
              style={{ color: 'red', font: 'inter', fontWeight: '500' }}
            />
            <Input
              type="text"
              label="Story"
              placeholder="Please Enter Amount"
              value={instaS}
              // onValue={(instaP) => setFilter({ ...filter, instaP })}
              onValue={(instaS) => setFormData({ ...formData, instaS })}
            />
            <Input
              type="text"
              label="Reel"
              placeholder="Please Enter Amount"
              value={instaR}
              // onValue={(instaP) => setFilter({ ...filter, instaP })}
              onValue={(instaR) => setFormData({ ...formData, instaR })}
            />
          </Stack>
        </StepLeft>
        <StepFMiddle>
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
        </StepSMiddle>
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
            />

            <Input
              type="text"
              label="Average 20 Question Survey"
              placeholder="Calculation"
              value={averageQuestionSurvey}
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
            />
            <Input
              type="text"
              label="60min"
              placeholder="Please Enter Amount"
              value={interviewLong}
              onValue={(interviewLong) =>
                setFormData({ ...formData, interviewLong })
              }
            />
          </Stack>
        </StepRight>
      </StepContainer>
    </StepStack>
  );
};

export default Step;
