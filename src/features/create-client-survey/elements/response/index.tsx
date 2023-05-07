import React, { useState } from 'react';
import { TResponseProps } from 'features/create-survey/elements/response/types';
import {
  ResponseMain,
  ResponseHeader,
  ResponseBody,
  ResponseOptions,
  ResponseQuestion,
  ResponseAnswer,
  ResponseAnswers,
} from 'features/create-survey/elements/response/styles';
import { Input } from 'components/ui';
import { Stack } from 'components/system';
import { BubbleChart, PieChart } from 'components/csr';
import { InputLabel } from 'components/ui/input/styles';
import Theme from 'theme';

const Response = ({ data, ...props }: TResponseProps) => {
  const { id, credit, optional, question, type, answers, hasOther } = data;

  const [participants, setParticipants] = useState([]);

  return (
    <ResponseMain {...props}>
      <ResponseHeader>
        <ResponseQuestion>{question}</ResponseQuestion>
        <Input
          type="select"
          placeholder="Please Select"
          value={0}
          onValue={setParticipants}
          options={participants}
        />
      </ResponseHeader>
      <ResponseBody>
        <ResponseAnswer>
          {['multichoice', 'multiselect'].includes(type) && (
            <>
              <ResponseAnswers />
              <ResponseOptions>
                <Stack direction="horizontal">
                  <Stack
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    }}
                  >
                    <InputLabel> Results </InputLabel>
                    <PieChart
                      style={{ width: '50%' }}
                      labels={['Patients', 'Doctors', 'Nurses', 'Muggles']}
                      data={[21, 52, 23, 14]}
                    />
                  </Stack>
                  <Stack>
                    <Input
                      type="select"
                      label="Variable"
                      placeholder="Please Select"
                      value={0}
                      onValue={() => {}}
                    />
                    <div style={{ width: '100%', height: 400 }}>
                      <BubbleChart
                        labels={[
                          '0-5',
                          '6-10',
                          '11-15',
                          '16-20',
                          '21-25',
                          '26-30',
                          '31-35',
                          '36-40',
                          '41-45',
                          '46-50',
                        ]}
                        data={[
                          {
                            color: `${Theme.palette.primary.main}`,
                            values: [
                              { x: 1, y: 1, r: 20 },
                              { x: 2, y: 2, r: 5 },
                              { x: 3, y: 3, r: 50 },
                            ],
                          },
                          {
                            color: `${Theme.palette.secondary.main}`,
                            values: [
                              { x: 3, y: 1, r: 1 },
                              { x: 4, y: 2, r: 2 },
                              { x: 5, y: 3, r: 8 },
                            ],
                          },
                        ]}
                        verticalLabel="Number of Influencers"
                        horizontalLabel="Amount Per Post"
                      />
                    </div>
                  </Stack>
                </Stack>
              </ResponseOptions>
            </>
          )}
        </ResponseAnswer>
      </ResponseBody>
    </ResponseMain>
  );
};

export default Response;
