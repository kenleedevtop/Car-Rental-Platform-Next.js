import { BarChart, ExtendedLineChart, MatrixChart } from 'components/csr';
import {
  CardWithText,
  Note,
  ProgressDisplay,
  Tabs,
  Title,
} from 'components/custom';
import CampaignsCard from 'components/custom/campaigns-card';
import { DotsIcon } from 'components/svg';
import { Grid, GridCell, Stack } from 'components/system';
import { Button, Card, InputGroup, Pagination } from 'components/ui';
import React, { useState } from 'react';

const HomePage = () => {
  const [state, setState] = useState({
    currency: null,
    amount: '',
    start: null,
    end: null,
    save: null,
  });

  return (
    <Card>
      <Stack>
        <Tabs
          tabs={['Instagram', 'Youtube', 'TikTok']}
          value={0}
          onValue={() => {}}
        />

        <Grid columns={4}>
          <GridCell columnSpan={2}>
            <Stack>
              <CardWithText
                title="Competitive Analysis"
                actions={[<DotsIcon />]}
              >
                <Stack>
                  <Tabs
                    tabs={['Post', 'Reel', 'Story']}
                    value={0}
                    onValue={() => {}}
                  />
                  <Note>
                    Influencers with an audience your size, asks for 21-25 USD
                    per Post on average.{' '}
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
                      data={[5, 10, 15, 20, 25, 18, 13, 8, 3, 1]}
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
                          onValue: (currency) =>
                            setState({ ...state, currency }),
                          type: 'select',
                          placeholder: 'USD',
                          options: [
                            {
                              value: 'eur',
                              label: 'EUR',
                            },
                            {
                              value: 'usd',
                              label: 'USD',
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
              <CardWithText title="Campaigns" actions={[<DotsIcon />]} />
              <Card>
                <Stack>
                  <p style={{ color: '#7E839F' }}>Campaigns in Progress</p>
                  <Note>
                    Here you can see all of your campaigns that are currently in
                    progress.
                  </Note>
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'success', text: 'Posted' }}
                  />
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'warning', text: 'To Be Posted' }}
                  />
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'warning', text: 'To Be Posted' }}
                  />
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'warning', text: 'To Be Posted' }}
                  />
                  <Pagination count={32} />
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <p style={{ color: '#7E839F' }}>Available Campaigns</p>
                  <Note>
                    Here you can see all of the campaigns you have been invited
                    to.
                  </Note>
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'primary', text: 'Reel' }}
                  />
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'primary', text: 'Post' }}
                  />
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'primary', text: 'Post' }}
                  />
                  <CampaignsCard
                    company="Roche"
                    app="Depression Management App"
                    status={{ color: 'primary', text: 'Post' }}
                  />
                  <Pagination count={32} />
                </Stack>
              </Card>
            </Stack>
          </GridCell>
          <GridCell columnSpan={2}>
            <Stack>
              <CardWithText title="Performance" actions={[<DotsIcon />]}>
                <Stack>
                  <Stack
                    direction="horizontal"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p style={{ color: '#7E839F' }}>Followers Growth</p>
                    <p style={{ color: '#7E839F' }}>12.5k</p>
                  </Stack>
                  <Note>
                    Here you can see how your community has grown over time.
                  </Note>
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
                </Stack>
              </CardWithText>
              <Card>
                <Stack>
                  <Stack
                    direction="horizontal"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <p style={{ color: '#7E839F' }}>Engagement</p>
                    <p style={{ color: '#7E839F' }}>5.32%</p>
                  </Stack>
                  <Note>
                    Here you can see how your engagement has changed over time.
                  </Note>
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
                </Stack>
              </Card>
              <Card>
                <Stack>
                  <p style={{ color: '#7E839F' }}>Best time to post</p>
                  <Note>
                    Here you can see how your posts have performed based on the
                    time.
                  </Note>
                  <div style={{ width: 600, height: 360, margin: '50px 0px' }}>
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
              </Card>

              <Card>
                <Stack>
                  <p style={{ color: '#7E839F' }}>Audience</p>
                  <Note>Here you can see Audience score.</Note>
                  <Stack style={{ padding: '0 100px' }}>
                    <ProgressDisplay label="Patient community" percent={100} />
                    <ProgressDisplay label="Reach" percent={70} />
                    <ProgressDisplay label="Past Performance" percent={80} />
                    <ProgressDisplay label="Engagement" percent={75} />
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </GridCell>
        </Grid>
      </Stack>
    </Card>
  );
};

export default HomePage;
