import React, { useState } from 'react';

import {
  IncomePageMain,
  IncomePageCharts,
  IncomePageChartsGrid,
  IncomePageFilter,
  IncomePageFilterActions,
  IncomePageFilterContainer,
  WithdrawContainer,
  WithdrawGrid,
  WithdrawGridLeft,
  WithdrawGridRight,
  WithdrawNameContainer,
  AmbassadorInput,
} from 'features/income/styles';

import { DGenerateAmbassadorIncomeFilter } from 'features/income/role/ambasador/data';

import {
  CardWithChart,
  CardWithText,
  IconWithText,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  SlidersHorizontalIcon,
  HouseIcon,
  CampaignsIcon,
  SMLAIcon,
  SurveysAIcon,
  ReportsAIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Card, Input, InputGroup, Pagination } from 'components/ui';
import { Collapse, Grid, Stack } from 'components/system';
import { useModal } from 'hooks';
import { ExportIncomeModal } from 'features/income/role/ambasador/elements';
import Note from 'components/custom/note';

const IncomePage = () => {
  const [tab, setTab] = useState(0);

  const [filter, setFilter] = useState<any>(DGenerateAmbassadorIncomeFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [eiModal, openEiModal, closeEiModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateAmbassadorIncomeFilter());
  };

  return (
    <IncomePageMain>
      <IncomePageCharts>
        <IncomePageChartsGrid>
          <CardWithChart
            title="Campaigns"
            icon={<CampaignsIcon />}
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
            icon={<SMLAIcon />}
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
            icon={<SurveysAIcon />}
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
            title="Reports"
            icon={<ReportsAIcon />}
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
            style={
              window.innerWidth < 600
                ? { padding: '1.25rem 0', boxShadow: 'unset' }
                : { padding: '1.25rem', boxShadow: '0px 2px 5px #00000010' }
            }
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
                  <IncomePageFilterContainer>
                    <Input
                      type="text"
                      label="Search"
                      placeholder="Please Enter"
                      value={filter.search}
                      onValue={(search) => setFilter({ ...filter, search })}
                    />
                    <Input
                      type="select"
                      label="Product"
                      placeholder="Please Select"
                      value={filter.product}
                      onValue={(product) => setFilter({ ...filter, product })}
                    />
                    <Input
                      type="select"
                      label="Client"
                      placeholder="Please Select"
                      value={filter.client}
                      onValue={(client) => setFilter({ ...filter, client })}
                    />
                    <InputGroup
                      label="Date"
                      inputRatio="1fr 1fr"
                      elements={[
                        {
                          value: filter.startDate,
                          onValue: (startDate) =>
                            setFilter({ ...filter, startDate }),
                          type: 'date',
                          placeholder: 'Start date',
                        },
                        {
                          value: filter.endDate,
                          onValue: (endDate) =>
                            setFilter({ ...filter, endDate }),
                          type: 'date',
                          placeholder: 'End date',
                        },
                      ]}
                    />
                    <AmbassadorInput
                      type="min-max"
                      label="Amount"
                      value={filter.amount}
                      onValue={(amount) => setFilter({ ...filter, amount })}
                    />
                  </IncomePageFilterContainer>
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
              <CheckboxTable
                head={[
                  {
                    reference: 'statement',
                    label: 'Statement',
                    visible: true,
                  },
                  {
                    reference: 'client',
                    label: 'Client',
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
                        placeholder="Please Enter"
                        value={filter.firstName}
                        onValue={(firstName) =>
                          setFilter({ ...filter, firstName })
                        }
                      />
                      <Input
                        type="text"
                        label="Last Name"
                        placeholder="Please Enter"
                        value={filter.lastName}
                        onValue={(lastName) =>
                          setFilter({ ...filter, lastName })
                        }
                      />
                    </WithdrawNameContainer>
                    <Input
                      type="text"
                      label="Bank Name"
                      placeholder="Please Enter"
                      value={filter.bankName}
                      onValue={(bankName) => setFilter({ ...filter, bankName })}
                    />
                    <Input
                      type="text"
                      label="Bank Address"
                      placeholder="Please Enter"
                      value={filter.bankAddress}
                      onValue={(bankAddress) =>
                        setFilter({ ...filter, bankAddress })
                      }
                    />
                    <Input
                      type="text"
                      label="IBAN"
                      placeholder="Please Enter"
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
                        {
                          value: filter.amountW,
                          onValue: (amountW) =>
                            setFilter({ ...filter, amountW }),
                          type: 'text',
                          placeholder: '420',
                        },
                      ]}
                    />
                    <Note showIcon>
                      55 CHF is approximatelay{' '}
                      <span style={{ color: '#448DC9' }}>60 USD</span>, but a
                      minor currency exchange fee (%) from a bank is expected.
                    </Note>
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
            </Stack>
          </WithdrawContainer>
        )}
      </Card>
      {eiModal && <ExportIncomeModal onClose={closeEiModal} />}
    </IncomePageMain>
  );
};

export default IncomePage;
