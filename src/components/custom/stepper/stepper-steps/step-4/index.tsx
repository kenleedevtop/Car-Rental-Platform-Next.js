import { Tooltip } from '@mui/material';
import { InfoIcon } from 'components/svg';
import { Stack } from 'components/system';
import {
  StepContainer,
  StepStack,
  StepTop,
  StepLeft,
  StepFMiddle,
  StepSMiddle,
  StepRight,
} from 'components/custom/stepper/stepper-steps/step-4/style';
import { Input } from 'components/ui';
import React, { useState } from 'react';

const Step = () => {
  const [filter, setFilter] = useState({
    currency: null,

    instaP: null,
    instaS: null,
    instaR: null,

    yVideoS: null,
    yVideoM: null,
    yVideoL: null,

    ttPost: null,

    questionCredit: '',
    averageQuestionSurvey: '',
    interviewShort: '',
    interviewLong: '',
  });
  return (
    <StepStack>
      <StepContainer>
        <StepTop>
          <Input
            type="select"
            label="Currency"
            placeholder="Currency"
            value={filter.currency}
            onValue={(currency) => setFilter({ ...filter, currency })}
            options={[
              {
                value: 'eur',
                label: 'EUR',
              },
              {
                value: 'usd',
                label: 'USD',
              },
              {
                value: 'chf',
                label: 'CHF',
              },
            ]}
          />
        </StepTop>
      </StepContainer>
      <StepContainer>
        <StepLeft>
          <Stack>
            <p style={{ color: '#6f6f6f' }}>Instagram</p>
            <Input
              type="text"
              label="Post"
              placeholder="Please Enter Amount"
              value={filter.instaP}
              onValue={(instaP) => setFilter({ ...filter, instaP })}
            />
            <Input
              type="text"
              label="Story"
              placeholder="Please Enter Amount"
              value={filter.instaP}
              onValue={(instaP) => setFilter({ ...filter, instaP })}
            />
            <Input
              type="text"
              label="Reel"
              placeholder="Please Enter Amount"
              value={filter.instaP}
              onValue={(instaP) => setFilter({ ...filter, instaP })}
            />
          </Stack>
        </StepLeft>
        <StepFMiddle>
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
        <StepSMiddle>
          <Stack>
            <p style={{ color: '#6f6f6f' }}>TikTok</p>
            <Input
              type="text"
              label="Post"
              placeholder="Please Enter Amount"
              value={filter.yVideoL}
              onValue={(yVideoL) => setFilter({ ...filter, yVideoL })}
            />
          </Stack>
        </StepSMiddle>
        <StepRight>
          <Stack>
            <p style={{ color: '#6f6f6f' }}>Questionnaire</p>
            <p
              style={{
                color: '#6f6f6f',
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
              }}
            >
              Question Credit
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
              value={filter.questionCredit}
              onValue={(questionCredit) =>
                setFilter({ ...filter, questionCredit })
              }
              style={{ marginTop: '-15px' }}
            />

            <Input
              type="text"
              label="Average 20 Question Survey"
              placeholder="Calculation"
              value={filter.questionCredit}
              onValue={(questionCredit) =>
                setFilter({ ...filter, questionCredit })
              }
            />
            <p style={{ color: '#6f6f6f' }}>Interview</p>
            <Input
              type="text"
              label="Interview: 30min"
              placeholder="Please Enter Amount"
              value={filter.interviewShort}
              onValue={(interviewShort) =>
                setFilter({ ...filter, interviewShort })
              }
            />
            <Input
              type="text"
              label="Interview: 60min"
              placeholder="Please Enter Amount"
              value={filter.interviewLong}
              onValue={(interviewLong) =>
                setFilter({ ...filter, interviewLong })
              }
            />
          </Stack>
        </StepRight>
      </StepContainer>
    </StepStack>
  );
};

export default Step;
