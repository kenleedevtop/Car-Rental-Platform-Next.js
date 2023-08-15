import React, { useState } from 'react';
import {
  FinancePageMain,
  FinancePageCharts,
  FinancePageFilter,
  FinancePageFilterActions,
  FinanceHeadline,
  FinanceCard,
  FinanceCardLeft,
  FinanceCardRight,
  DepositHeadline,
  DepositList,
  DepositItem,
  WithdrawSpan,
  WithdrawInputGrid,
} from 'features/finance/styles';
import {
  DFinanceInvestorHead,
  DGenerateFinanceFilter,
} from 'features/finance/data';
import {
  CardWithChartFinance,
  CardWithText,
  Tabs,
  Table,
} from 'components/custom';
import {
  CostIcon,
  FinanceSmallIcon,
  InfoIcon,
  ProfitIcon,
  RevenueIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Card, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';

const FinancePage = () => {
  const [filter, setFilter] = useState<any>(DGenerateFinanceFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateFinanceFilter());
  };

  const renderItem = ({ headItem }: TTableRenderItemObject) => {
    if (headItem.reference === 'statement') {
      return 'Rent for Property';
    }
    if (headItem.reference === 'date') {
      return 'May 1, 2023';
    }
    if (headItem.reference === 'type') {
      return 'Rent';
    }
    if (headItem.reference === 'amount') {
      return '€250';
    }

    return '';
  };

  return (
    <FinancePageMain>
      <Tabs
        value={tabs}
        onValue={setTabs}
        tabs={['Account Statement', 'Deposit', 'Withdrawal']}
      />
      {tabs === 0 && (
        <Stack>
          <FinancePageCharts>
            <CardWithChartFinance
              title="Rent"
              icon={<RevenueIcon />}
              smallIcon={<FinanceSmallIcon />}
              percent={2}
              count={7552.8}
              chartData={{
                values: Array.from(Array(20).keys()).map((_x) =>
                  faker.datatype.number({ min: 10, max: 30 })
                ),
                labels: Array.from(Array(20).keys()).map((_x) => ''),
              }}
              last30Days={7552.8}
              last12Months={7552.8}
              total={7552.8}
            />
            <CardWithChartFinance
              title="Capital Gain"
              icon={<ProfitIcon />}
              smallIcon={<FinanceSmallIcon />}
              percent={2}
              count={7552.8}
              chartData={{
                values: Array.from(Array(20).keys()).map((_x) =>
                  faker.datatype.number({ min: 10, max: 30 })
                ),
                labels: Array.from(Array(20).keys()).map((_x) => ''),
              }}
              last30Days={7552.8}
              last12Months={7552.8}
              total={7552.8}
            />
            <CardWithChartFinance
              title="Total"
              icon={<TotalIcon />}
              smallIcon={<FinanceSmallIcon />}
              percent={2}
              count={7552.8}
              chartData={{
                values: Array.from(Array(20).keys()).map((_x) =>
                  faker.datatype.number({ min: 10, max: 30 })
                ),
                labels: Array.from(Array(20).keys()).map((_x) => ''),
              }}
              last30Days={7552.8}
              last12Months={7552.8}
              total={7552.8}
            />
          </FinancePageCharts>
          <CardWithText
            title="Accountment Statement"
            actions={[
              <Button
                color={filterOpen ? 'secondary' : 'default'}
                variant="contained"
                onClick={toggleFilter}
                startIcon={<SlidersHorizontalIcon width="18" height="18" />}
              >
                Filters
              </Button>,
            ]}
          >
            <Stack>
              <Collapse removeGap in={filterOpen}>
                <FinancePageFilter>
                  <Grid columns={4}>
                    <Input
                      type="select"
                      label="Project"
                      placeholder="Please Select"
                      value={filter.project}
                      onValue={(project) => setFilter({ ...filter, project })}
                    />
                    <InputGroup
                      label="Date"
                      inputRatio="1fr 1fr"
                      elements={[
                        {
                          value: filter.dateFrom,
                          onValue: (dateFrom) =>
                            setFilter({ ...filter, dateFrom }),
                          type: 'date',
                          placeholder: 'From',
                        },
                        {
                          value: filter.dateTo,
                          onValue: (dateTo) => setFilter({ ...filter, dateTo }),
                          type: 'date',
                          placeholder: 'To',
                        },
                      ]}
                    />
                    <Input
                      type="select"
                      label="Type"
                      placeholder="Please Select"
                      value={filter.type}
                      onValue={(type) => setFilter({ ...filter, type })}
                    />
                    <Input
                      type="min-max"
                      label="Amount"
                      value={filter.amount}
                      onValue={(amount) => setFilter({ ...filter, amount })}
                    />
                  </Grid>
                  <FinancePageFilterActions direction="horizontal">
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
                  </FinancePageFilterActions>
                </FinancePageFilter>
              </Collapse>
              <Table
                head={DFinanceInvestorHead}
                items={[
                  {
                    name: 'Detailed planning of the project',
                    published: '01.05.2023',
                    action: 'a',
                  },
                  {
                    name: 'Detailed planning of the project',
                    published: '01.05.2023',
                    action: 'a',
                  },
                  {
                    name: 'Detailed planning of the project',
                    published: '01.05.2023',
                    action: 'a',
                  },
                  {
                    name: 'Detailed planning of the project',
                    published: '01.05.2023',
                    action: 'a',
                  },
                  {
                    name: 'Detailed planning of the project',
                    published: '01.05.2023',
                    action: 'a',
                  },
                  {
                    name: 'Detailed planning of the project',
                    published: '01.05.2023',
                    action: 'a',
                  },
                ]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </Stack>
          </CardWithText>
        </Stack>
      )}
      {tabs === 1 && (
        <FinanceCard>
          <FinanceCardLeft>
            <Input
              type="text"
              label="IBAN Account"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
            <Input
              type="text"
              label="Bank Code (SWIFT/BIC)"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
            <Input
              type="text"
              label="Reference Number"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
            <Input
              type="text"
              label="Details"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
            <Input
              type="text"
              label="Bank Address"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
          </FinanceCardLeft>
          <FinanceCardRight>
            <DepositHeadline>
              <InfoIcon /> Please Note
            </DepositHeadline>
            <DepositList>
              <DepositItem>deposits should be made in euros.</DepositItem>
              <DepositItem>
                only payments made from [User full name] bank account are
                accepted. If the name on the bank account does not match with
                the name in your Real Estate platform account, the transfer will
                be rejected.
              </DepositItem>
              <DepositItem>
                it can take up to 2-3 working days for the funds to arrive to
                your account.
              </DepositItem>
            </DepositList>
          </FinanceCardRight>
        </FinanceCard>
      )}
      {tabs === 2 && (
        <FinanceCard>
          <FinanceCardLeft>
            <Stack direction="horizontal">
              <Input
                type="text"
                label="First Name"
                placeholder="Please Enter"
                value={null}
                onValue={() => {}}
              />
              <Input
                type="text"
                label="Last Name"
                placeholder="Please Enter"
                value={null}
                onValue={() => {}}
              />
            </Stack>
            <Input
              type="text"
              label="Bank Name"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
            <Input
              type="text"
              label="Bank Address"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
            <Input
              type="text"
              label="IBAN"
              placeholder="Please Enter"
              value={null}
              onValue={() => {}}
            />
          </FinanceCardLeft>
          <FinanceCardRight>
            <Stack>
              <WithdrawInputGrid>
                <Input
                  type="text"
                  label="Enter Amount (Available amount is $499.00)"
                  placeholder="Please Enter"
                  value={null}
                  onValue={() => {}}
                />
                <Input
                  type="select"
                  placeholder="Please Select"
                  value={null}
                  onValue={() => {}}
                />
              </WithdrawInputGrid>
              <WithdrawSpan>
                <InfoIcon />
                Currency conversion fee is 1.00%
              </WithdrawSpan>
            </Stack>
            <Stack>
              <Input
                type="text"
                label="Confirm Password"
                placeholder="Please Enter"
                value={null}
                onValue={() => {}}
              />
              <WithdrawSpan>
                <InfoIcon />
                Enter your password to make sure it is really you.
              </WithdrawSpan>
            </Stack>
            <Button color="primary" variant="contained">
              Withdraw
            </Button>
          </FinanceCardRight>
        </FinanceCard>
      )}
    </FinancePageMain>
  );
};

export default FinancePage;
