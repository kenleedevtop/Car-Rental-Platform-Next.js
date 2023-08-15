import React, { useState } from 'react';
import {
  FinancePageMain,
  FinancePageCharts,
  FinancePageFilter,
  FinancePageFilterActions,
} from 'features/finance/styles';
import {
  DFinanceAdminCostHead,
  DFinanceAdminRevenueHead,
  DGenerateFinanceAdminFilter,
} from 'features/finance/data';
import {
  CardWithChart,
  CardWithText,
  Menu,
  NewCheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ApproveIcon,
  ContactIcon,
  CostIcon,
  DeclineIcon,
  DeleteIcon,
  EditIcon,
  FinanceSmallIcon,
  MarginIcon,
  ProfitIcon,
  ReceivedIcon,
  RevenueIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal } from 'hooks';

const FinancePage = () => {
  const [cfModal, openCfModal, closeCfModal] = useModal(false);
  const [efModal, openEfModal, closeEfModal] = useModal(false);
  const [afModal, openAfModal, closeAfModal] = useModal(false);
  const [riModal, openRiModal, closeRiModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateFinanceAdminFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);
  const [tab, setTab] = useState(0);
  const [filterTabs, setFilterTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateFinanceAdminFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <FinancePageMain>
      <FinancePageCharts>
        <CardWithChart
          title="Revenue"
          icon={<RevenueIcon />}
          smallIcon={<FinanceSmallIcon />}
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
          title="Cost"
          icon={<CostIcon />}
          smallIcon={<FinanceSmallIcon />}
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
          title="Profit"
          icon={<ProfitIcon />}
          smallIcon={<FinanceSmallIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </FinancePageCharts>
      <FinancePageCharts>
        <CardWithChart
          title="Revenue"
          icon={<RevenueIcon />}
          smallIcon={<FinanceSmallIcon />}
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
          title="Cost"
          icon={<CostIcon />}
          smallIcon={<FinanceSmallIcon />}
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
          title="Profit"
          icon={<ProfitIcon />}
          smallIcon={<FinanceSmallIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </FinancePageCharts>
      <CardWithText
        title="Financial Statement"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEfModal}>
            Export
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <FinancePageFilter>
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Type"
                  placeholder="Please Select"
                  value={filter.type}
                  onValue={(type) => setFilter({ ...filter, type })}
                />
                <Input
                  type="select"
                  label="Investor"
                  placeholder="Please Select"
                  value={filter.investor}
                  onValue={(investor) => setFilter({ ...filter, investor })}
                />
                <Input
                  type="select"
                  label="Developer"
                  placeholder="Please Select"
                  value={filter.developer}
                  onValue={(developer) => setFilter({ ...filter, developer })}
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
                <Input
                  type="select"
                  label="Project"
                  placeholder="Please Select"
                  value={filter.project}
                  onValue={(project) => setFilter({ ...filter, project })}
                />
                <Input
                  type="select"
                  label="Status"
                  placeholder="Please Select"
                  value={filter.status}
                  onValue={(status) => setFilter({ ...filter, status })}
                />
                <Input
                  type="min-max"
                  label="Amount"
                  placeholder="Please Select"
                  value={filter.amount}
                  onValue={(amount) => setFilter({ ...filter, amount })}
                />
                <Input
                  type="date"
                  label="Date"
                  placeholder="Please Select"
                  value={filter.date}
                  onValue={(date) => setFilter({ ...filter, date })}
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
        </Stack>
      </CardWithText>
      <CardWithText title="Cost" actions={[]}>
        <Stack>
          <Tabs
            value={tab}
            onValue={setTab}
            tabs={['Payments', 'Withdrawals']}
          />
          {tab === 0 && (
            <>
              <NewCheckboxTable
                head={DFinanceAdminCostHead}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}
          {tab === 1 && (
            <>
              <NewCheckboxTable
                head={DFinanceAdminCostHead}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}
        </Stack>
      </CardWithText>
      <CardWithText title="Revenue" actions={[]}>
        <Stack>
          <Tabs value={tabs} onValue={setTabs} tabs={['Pending', 'Received']} />
          {tabs === 0 && (
            <>
              <NewCheckboxTable
                head={DFinanceAdminRevenueHead}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}
          {tabs === 1 && (
            <>
              <NewCheckboxTable
                head={DFinanceAdminRevenueHead}
                items={[]}
                renderItem={renderItem}
              />
              <Pagination count={32} />
            </>
          )}
        </Stack>
      </CardWithText>
    </FinancePageMain>
  );
};

export default FinancePage;
