import { Tooltip } from '@mui/material';
import { BarChart, ExtendedLineChart, MatrixChart } from 'components/csr';
import {
  CardWithText,
  Note,
  ProgressDisplay,
  Status,
  CheckboxTable,
  Tabs,
  CampaignsCard,
  Title,
  Table,
} from 'components/custom';
import { HomeInfluencerPageGrid } from 'features/home/styles';
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
      <HomeInfluencerPageGrid>
        <GridCell columnSpan={2}>
          <CardWithText title="Campaigns" actions={[<DotsIcon />]}>
            <Stack direction="horizontal">
              <Stack>
                <Tabs
                  tabs={['Available', 'In Progress']}
                  value={tabsC}
                  onValue={setTabsC}
                />
                {tabsC === 0 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={32} />
                  </>
                )}
                {tabsC === 1 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                        {
                          reference: 'status',
                          label: 'Status',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={32} />
                  </>
                )}
              </Stack>
              <Stack>
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
            </Stack>
          </CardWithText>
        </GridCell>
        <GridCell columnSpan={2}>
          <CardWithText title="Surveys" actions={[<DotsIcon />]}>
            <Stack direction="horizontal">
              <Stack>
                <Tabs
                  tabs={['Available', 'In Progress']}
                  value={tabsS}
                  onValue={setTabsS}
                />
                {tabsS === 0 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={32} />
                  </>
                )}
                {tabsS === 1 && (
                  <>
                    <Table
                      head={[
                        {
                          reference: 'campaign',
                          label: 'Campaign',
                          visible: true,
                        },
                        {
                          reference: 'status',
                          label: 'Status',
                          visible: true,
                        },
                      ]}
                      items={DCampaignItems}
                      renderItem={renderItem}
                    />
                    <Pagination count={32} />
                  </>
                )}
              </Stack>
              <Stack>
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
            </Stack>
          </CardWithText>
        </GridCell>
      </HomeInfluencerPageGrid>
    </Stack>
  );
};

export default HomePage;
