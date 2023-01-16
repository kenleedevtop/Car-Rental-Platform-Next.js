import { Tooltip } from '@mui/material';
import { BarChart, ExtendedLineChart, MatrixChart } from 'components/csr';
import {
  CardWithText,
  Note,
  ProgressDisplay,
  Status,
  Table,
  Tabs,
  CampaignsCard,
  Title,
} from 'components/custom';
import { TColor } from 'components/custom/status/types';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { DotsIcon, InfoIcon } from 'components/svg';
import { Grid, GridCell, Stack } from 'components/system';
import { Button, InputGroup, Pagination } from 'components/ui';
import React, { useState } from 'react';
import { DCampaignItems } from 'features/home/role/influencer/data';
import Theme from 'theme';

const HomePage = () => {
  const [state, setState] = useState({
    currency: null,
    amount: '',
    start: null,
    end: null,
    save: null,
  });

  const [tabsC, setTabsC] = useState(0);
  const [tabsSM, setTabsSM] = useState(0);
  const [tabsS, setTabsS] = useState(0);
  const [tabsCA, setTabsCA] = useState(0);

  const renderItem = ({ headItem, cell }: TTableRenderItemObject) => {
    if (headItem.reference === 'campaign') {
      return (
        <CampaignsCard
          image={cell.data.image}
          company={cell.data.company}
          app={cell.data.app}
        />
      );
    }
    if (headItem.reference === 'status') {
      const statuses = [
        {
          id: 0,
          text: 'Posted',
          color: 'success',
        },
        {
          id: 1,
          text: 'To be Posted',
          color: 'warning',
        },
        {
          id: 2,
          text: 'Reel',
          color: 'primary',
        },
        {
          id: 3,
          text: 'Post',
          color: 'primary',
        },
      ];
      const statusData = statuses[cell.data as number];

      return (
        <Status color={statusData.color as TColor} text={statusData.text} />
      );
    }

    return '';
  };

  return (
    <Stack>
      <Grid columns={4}>
        <GridCell columnSpan={2}>
          <Stack>
            <CardWithText title="Campaigns" actions={[<DotsIcon />]}>
              <Stack>
                <Tabs
                  tabs={['Available', 'In Progress']}
                  value={tabsC}
                  onValue={setTabsC}
                />
                <Table
                  head={[
                    {
                      reference: 'campaign',
                      label: 'Campaign',
                    },
                    {
                      reference: 'status',
                      label: 'Status',
                    },
                  ]}
                  items={DCampaignItems}
                  renderItem={renderItem}
                />
                <Pagination count={32} />
                <Title title="Competitive Analysis" />
                <Tabs
                  tabs={['Instagram', 'Twitter', 'Tiktok']}
                  value={tabsSM}
                  onValue={setTabsSM}
                />
                <Note showIcon={false}>
                  Influencers with an audience your size, asks for 21-25 USD per
                  Post on average.
                </Note>
                <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                  <BarChart
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
                        color: `${Theme.palette.secondary.main}40`,
                        values: [5, 10, 15, 20, 25, 18, 13, 8, 3, 1],
                      },
                    ]}
                    verticalLabel="Number of Influencers"
                    horizontalLabel="Amount Per Post"
                  />
                </div>
                <GridCell
                  columnSpan={4}
                  style={{ display: 'flex', alignItems: 'flex-end' }}
                >
                  <InputGroup
                    label="Desired amount per Post"
                    inputRatio="150px 150px"
                    elements={[
                      {
                        value: state.amount,
                        onValue: (amount) => setState({ ...state, amount }),
                        type: 'text',
                        placeholder: '18',
                      },
                      {
                        value: state.currency,
                        onValue: (currency) => setState({ ...state, currency }),
                        type: 'select',
                        placeholder: 'CHF',
                        options: [
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
                        ],
                      },
                    ]}
                  />
                  <Button
                    style={{
                      width: '150px',
                      height: '39px',
                      marginLeft: '10px',
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Save
                  </Button>
                </GridCell>
              </Stack>
            </CardWithText>
          </Stack>
        </GridCell>
        <GridCell columnSpan={2}>
          <Stack>
            <CardWithText title="Surveys" actions={[<DotsIcon />]}>
              <Stack>
                <Tabs
                  tabs={['Available', 'In Progress']}
                  value={tabsS}
                  onValue={setTabsS}
                />
                <Table
                  head={[
                    {
                      reference: 'campaign',
                      label: 'Campaign',
                    },
                    {
                      reference: 'status',
                      label: 'Status',
                    },
                  ]}
                  items={DCampaignItems}
                  renderItem={renderItem}
                />
                <Pagination count={32} />
                <Title title="Competitive Analysis" />
                <Tabs
                  tabs={['Questionnaire', 'Interview']}
                  value={tabsCA}
                  onValue={setTabsCA}
                />
                <Note showIcon={false}>
                  Patients asks for 1-2.5 USD per Question Credit on average.
                </Note>
                <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                  <BarChart
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
                        color: `${Theme.palette.secondary.main}40`,
                        values: [5, 10, 15, 20, 25, 18, 13, 8, 3, 1],
                      },
                    ]}
                    verticalLabel="Number of Influencers"
                    horizontalLabel="Amount Per Post"
                  />
                </div>
                <GridCell
                  columnSpan={4}
                  style={{ display: 'flex', alignItems: 'flex-end' }}
                >
                  <InputGroup
                    label="Desired amount per Post"
                    inputRatio="150px 150px"
                    elements={[
                      {
                        value: state.amount,
                        onValue: (amount) => setState({ ...state, amount }),
                        type: 'text',
                        placeholder: '18',
                      },
                      {
                        value: state.currency,
                        onValue: (currency) => setState({ ...state, currency }),
                        type: 'select',
                        placeholder: 'CHF',
                        options: [
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
                        ],
                      },
                    ]}
                  />
                  <Button
                    style={{
                      width: '150px',
                      height: '39px',
                      marginLeft: '10px',
                    }}
                    variant="contained"
                    color="primary"
                  >
                    Save
                  </Button>
                </GridCell>
              </Stack>
            </CardWithText>
          </Stack>
        </GridCell>
      </Grid>
      <Grid>
        <CardWithText title="Performance">
          <Grid columns={8} style={{ gap: '100px' }}>
            <GridCell columnSpan={4}>
              <Stack
                direction="horizontal"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Stack direction="horizontal">
                  <p style={{ color: '#7E839F' }}>Followers Growth</p>
                  <Tooltip
                    title="Here you can see how your community has grown over time."
                    style={{ width: '20px', height: '20px' }}
                  >
                    <span>
                      <InfoIcon />
                    </span>
                  </Tooltip>
                </Stack>
                <p style={{ color: '#7E839F' }}>12.5k</p>
              </Stack>
              <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                <ExtendedLineChart
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
                  data={[5, 10, 15, 20, 25, 18, 13, 8, 3, 1]}
                  verticalLabel="Number of Followers"
                  horizontalLabel="Time"
                />
              </div>
              <Stack>
                <Stack direction="horizontal">
                  <p style={{ color: '#7E839F' }}>Best time to post</p>
                  <Tooltip
                    title="Here you can see how your posts have performed based on the time."
                    style={{ width: '20px', height: '20px' }}
                  >
                    <span>
                      <InfoIcon />
                    </span>
                  </Tooltip>
                </Stack>
                <div style={{ width: 500, height: 300, margin: '0 0 50px' }}>
                  <MatrixChart
                    horizontalLabels={[
                      '0-2',
                      '2-4',
                      '4-6',
                      '6-8',
                      '8-10',
                      '10-12',
                      '12-14',
                      '14-16',
                      '16-18',
                      '18-20',
                      '20-22',
                      '22-24',
                    ]}
                    verticalLabels={[
                      'MON',
                      'TUE',
                      'WED',
                      'THU',
                      'FRI',
                      'SAT',
                      'SUN',
                    ]}
                    data={[
                      [5, 30, 50, 2, 0, 0, 7, 0, 5, 5, 60, 15],
                      [50, 2, 0, 0, 15, 20, 25, 15, 0, 0, 12, 13],
                      [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
                      [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
                      [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
                      [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
                      [5, 10, 15, 20, 25, 18, 13, 8, 3, 1, 50, 1],
                    ]}
                  />
                </div>
              </Stack>
            </GridCell>
            <GridCell columnSpan={4}>
              <Stack
                direction="horizontal"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Stack direction="horizontal">
                  <p style={{ color: '#7E839F' }}>Engagement</p>
                  <Tooltip
                    title="Here you can see how your engagement has changed over time."
                    style={{ width: '20px', height: '20px' }}
                  >
                    <span>
                      <InfoIcon />
                    </span>
                  </Tooltip>
                </Stack>
                <p style={{ color: '#7E839F' }}>5.32%</p>
              </Stack>
              <div style={{ width: 500, height: 300, margin: '50px 0px' }}>
                <ExtendedLineChart
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
                  data={[5, 10, 15, 20, 25, 18, 13, 8, 3, 1]}
                  verticalLabel="Engagement"
                  horizontalLabel="Time"
                />
              </div>
              <Stack>
                <Stack direction="horizontal">
                  <p style={{ color: '#7E839F' }}>Audience</p>
                  <Tooltip
                    title="Here you can see Audience score."
                    style={{ width: '20px', height: '20px' }}
                  >
                    <span>
                      <InfoIcon />
                    </span>
                  </Tooltip>
                </Stack>
                <Stack style={{ padding: '50px 100px 0' }}>
                  <ProgressDisplay label="Patient community" percent={100} />
                  <ProgressDisplay label="Reach" percent={70} />
                  <ProgressDisplay label="Past Performance" percent={80} />
                  <ProgressDisplay label="Engagement" percent={75} />
                </Stack>
              </Stack>
            </GridCell>
          </Grid>
        </CardWithText>
      </Grid>
    </Stack>
  );
};

export default HomePage;
