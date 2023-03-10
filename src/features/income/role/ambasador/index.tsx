import React, { useState } from 'react';

import {
  IncomePageMain,
  IncomePageCharts,
  IncomePageChartsGrid,
  IncomePageFilter,
  IncomePageFilterActions,
  WithdrawContainer,
  WithdrawGrid,
  WithdrawGridLeft,
  WithdrawGridRight,
  WithdrawNameContainer,
} from 'features/income/styles';

import { DGenerateIncomeFilter } from 'features/income/role/ambasador/data';

import {
  CardWithChart,
  CardWithText,
  IconWithText,
  Table,
  Tabs,
} from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
  HouseIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Card, Input, InputGroup, Pagination } from 'components/ui';
import { Collapse, Grid, GridCell, Stack } from 'components/system';
import { useModal } from 'hooks';
import { ExportIncomeModal } from 'features/income/role/ambasador/elements';
import Note from 'components/custom/note';

const IncomePage = () => {
  const [tab, setTab] = useState(0);

  const [filter, setFilter] = useState<any>(DGenerateIncomeFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [eiModal, openEiModal, closeEiModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateIncomeFilter());
  };

  return (
    <IncomePageMain>
      <IncomePageCharts>
        <IncomePageChartsGrid>
          <CardWithChart
            title="Campaigns"
            icon={<IdentifiedIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="SML"
            icon={<ContactedIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Surveys"
            icon={<RegisteredIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
          <CardWithChart
            title="Total"
            icon={<TotalIcon />}
            percent={2}
            count={75}
            chartData={{
              values: Array.from(Array(20).keys()).map((_x) =>
                faker.datatype.number({ min: 10, max: 30 })
              ),
              labels: Array.from(Array(20).keys()).map((_x) => ''),
            }}
          />
        </IncomePageChartsGrid>
      </IncomePageCharts>
      <Card>
        <Tabs
          value={tab}
          onValue={setTab}
          tabs={['Account Statement', 'Withdraw']}
        />
        {tab === 0 ? (
          <CardWithText
            title="Account Statement"
            description="20 new Campaigns"
            actions={[
              <Button
                color={filterOpen ? 'secondary' : 'default'}
                variant="contained"
                onClick={toggleFilter}
                startIcon={<SlidersHorizontalIcon width="18" height="18" />}
              >
                Filters
              </Button>,
              <Button color="default" variant="contained" onClick={openEiModal}>
                Export
              </Button>,
            ]}
          >
            <Stack>
              <Collapse removeGap in={filterOpen}>
                <IncomePageFilter>
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Search For Statement"
                      placeholder="Search For Statement"
                      value={filter.search}
                      onValue={(search) => setFilter({ ...filter, search })}
                    />
                    <InputGroup
                      label="Start & Finish"
                      inputRatio="200px 200px"
                      elements={[
                        {
                          value: filter.start,
                          onValue: (start) => setFilter({ ...filter, start }),
                          type: 'date',
                          placeholder: 'Start date',
                        },
                        {
                          value: filter.end,
                          onValue: (end) => setFilter({ ...filter, end }),
                          type: 'date',
                          placeholder: 'End date',
                        },
                      ]}
                    />
                    <Input
                      type="select"
                      label="Statement Type"
                      placeholder="Please Select"
                      value={filter.statement}
                      onValue={(statement) =>
                        setFilter({ ...filter, statement })
                      }
                    />
                    <Input
                      type="min-max"
                      label="Amount"
                      value={filter.amount}
                      onValue={(amount) => setFilter({ ...filter, amount })}
                    />
                  </Grid>
                  <IncomePageFilterActions direction="horizontal">
                    <Button color="primary" variant="contained">
                      Filter
                    </Button>
                    <Button
                      color="secondary"
                      variant="outlined"
                      onClick={clearFilters}
                    >
                      Clear filter
                    </Button>
                  </IncomePageFilterActions>
                </IncomePageFilter>
              </Collapse>
              <Table
                head={[
                  {
                    reference: 'statement',
                    label: 'Statement',
                    visible: true,
                  },
                  {
                    reference: 'type',
                    label: 'Type',
                    visible: true,
                  },
                  {
                    reference: 'date',
                    label: 'Date',
                    visible: true,
                  },
                  {
                    reference: 'amount',
                    label: 'Amount',
                    visible: true,
                  },
                ]}
                items={[]}
                renderItem={() => {}}
              />

              <Pagination count={32} />
            </Stack>
          </CardWithText>
        ) : (
          <WithdrawContainer>
            <Stack>
              <WithdrawGrid>
                <WithdrawGridLeft>
                  <Stack>
                    <WithdrawNameContainer direction="horizontal">
                      <Input
                        type="text"
                        label="First Name"
                        placeholder="John"
                        value={filter.firstName}
                        onValue={(firstName) =>
                          setFilter({ ...filter, firstName })
                        }
                      />
                      <Input
                        type="text"
                        label="Last Name"
                        placeholder="Doe"
                        value={filter.lastName}
                        onValue={(lastName) =>
                          setFilter({ ...filter, lastName })
                        }
                      />
                    </WithdrawNameContainer>
                    <Input
                      type="text"
                      label="Bank Name"
                      placeholder="Bank of America"
                      value={filter.bankName}
                      onValue={(bankName) => setFilter({ ...filter, bankName })}
                    />
                    <Input
                      type="text"
                      label="Bank Address"
                      placeholder="St 6 Ft. Honey Park, NYC 1000001"
                      value={filter.bankAddress}
                      onValue={(bankAddress) =>
                        setFilter({ ...filter, bankAddress })
                      }
                    />
                    <Input
                      type="text"
                      label="IBAN"
                      placeholder="7895516485489487"
                      value={filter.iban}
                      onValue={(iban) => setFilter({ ...filter, iban })}
                    />
                  </Stack>
                </WithdrawGridLeft>
                <WithdrawGridRight>
                  <Stack>
                    <InputGroup
                      label="Enter Amount (Available amount is $499.00)"
                      inputRatio="100px 1fr"
                      elements={[
                        {
                          value: filter.currency,
                          onValue: (currency) =>
                            setFilter({ ...filter, currency }),
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
                        {
                          value: filter.amountW,
                          onValue: (amountW) =>
                            setFilter({ ...filter, amountW }),
                          type: 'text',
                          placeholder: '420',
                        },
                      ]}
                    />
                    <Note showIcon>Currency conversion fee is 1.00%</Note>
                    <Input
                      type="text"
                      label="Confirm Password"
                      placeholder="Password"
                      value={filter.password}
                      onValue={(password) => setFilter({ ...filter, password })}
                    />
                    <Note showIcon>
                      Enter your password to make sure it is really you.
                    </Note>
                    <Button color="primary" variant="contained" size="large">
                      Withdraw
                    </Button>
                  </Stack>
                </WithdrawGridRight>
              </WithdrawGrid>
              <IconWithText
                icon={<HouseIcon />}
                title="Withdraw money with ease!"
                text={[
                  "Withdraw money from your Patients Influence account to your nominated personal bank account with ease. Please bear in mind that depending on your location, local bank's working hours and speed, the deposit may take up to a few days to reflected in your bank account.",
                  'For any additional questions, please feel free to contact us at any time.',
                ]}
              />
            </Stack>
          </WithdrawContainer>
        )}
      </Card>
      {eiModal && <ExportIncomeModal onClose={closeEiModal} />}
    </IncomePageMain>
  );
};

export default IncomePage;
