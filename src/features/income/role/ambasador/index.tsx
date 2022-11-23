import React, { useState } from 'react';

import {
  IncomePageMain,
  IncomePageCharts,
  IncomePageChartsGrid,
  IncomePageFilter,
  IncomePageFilterActions,
  IconBackground,
} from 'features/income/styles';

import { DGenerateIncomeFilter } from 'features/income/role/ambasador/data';

import { CardWithChart, CardWithText, Table, Tabs } from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
  HouseIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Card, Input, Pagination } from 'components/ui';
import { Collapse, Grid, Stack } from 'components/system';
import { useModal } from 'hooks';
import { ExportIncomeModal } from 'features/income/role/ambasador/elements';

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
        <IncomePageChartsGrid columns={4}>
          <CardWithChart
            title="Clients"
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
            title="Ongoing"
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
            title="Completed"
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
            title="Revenue"
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
                    <Input
                      type="date"
                      label="Start Date"
                      value={filter.startDate}
                      onValue={(startDate) =>
                        setFilter({ ...filter, startDate })
                      }
                    />
                    <Input
                      type="date"
                      label="End Date"
                      placeholder="Please Select"
                      value={filter.endDate}
                      onValue={(endDate) => setFilter({ ...filter, endDate })}
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
                  },
                  {
                    reference: 'type',
                    label: 'Type',
                  },
                  {
                    reference: 'date',
                    label: 'Date',
                  },
                  {
                    reference: 'amount',
                    label: 'Amount',
                  },
                ]}
                items={[]}
                renderItem={() => {}}
              />

              <Pagination count={32} />
            </Stack>
          </CardWithText>
        ) : (
          <Card>
            <Stack direction="horizontal">
              <Stack>
                <Stack direction="horizontal">
                  <Input
                    type="text"
                    label="First Name"
                    placeholder="John"
                    value={filter.firstName}
                    onValue={(firstName) => setFilter({ ...filter, firstName })}
                  />
                  <Input
                    type="text"
                    label="Last Name"
                    placeholder="Doe"
                    value={filter.lastName}
                    onValue={(lastName) => setFilter({ ...filter, lastName })}
                  />
                </Stack>
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
              <Stack>
                <Input
                  type="text"
                  label="Enter Amount (Available amount is $499.00)"
                  placeholder="420"
                  value={filter.amountW}
                  onValue={(amountW) => setFilter({ ...filter, amountW })}
                />
                <Input
                  type="text"
                  label="Confirm Password"
                  placeholder="Password"
                  value={filter.password}
                  onValue={(password) => setFilter({ ...filter, password })}
                />
                <Button color="primary" variant="contained">
                  Withdraw
                </Button>
              </Stack>
            </Stack>
            <Stack
              direction="horizontal"
              style={{
                margin: '100px 0',
                display: 'flex',
                alignItems: 'center',
                color: '#7E839F',
              }}
            >
              <IconBackground>
                <HouseIcon />
              </IconBackground>
              <Stack>
                <h2>Withdraw money with ease!</h2>
                <p>
                  Withdraw money from your Patients Influence account to your
                  nominated personal bank account with ease. Please bear in mind
                  that depending on your location, local bank&apos;s working
                  hours and speed, the deposit may take up to a few days to
                  reflected in your bank account.
                </p>
                <p>
                  For any additional questions, please feel free to contact us
                  at any time.
                </p>
              </Stack>
            </Stack>
          </Card>
        )}
      </Card>
      {eiModal && <ExportIncomeModal onClose={closeEiModal} />}
    </IncomePageMain>
  );
};

export default IncomePage;
