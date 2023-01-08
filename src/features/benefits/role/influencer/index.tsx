import React, { useState } from 'react';
import {
  BenefitsPageMain,
  BenefitsPageCharts,
  BenefitsPageFilter,
  BenefitsPageFilterActions,
} from 'features/benefits/role/influencer/styles';
import {
  DFinanceHead,
  DFinanceHead2,
  DGenerateFinanceFilter,
} from 'features/benefits/role/influencer/data';
import { CardWithChart, CardWithText, Table } from 'components/custom';
import { SlidersHorizontalIcon, UserFocusIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useModal } from 'hooks';
import {
  AddSuggestionModal,
  ExportBenefitsModal,
} from 'features/benefits/role/influencer/elements';

const BenefitsPage = () => {
  const [asModal, openAsModal, closeAsModal] = useModal(false);
  const [ebModal, openEbModal, closeEbModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateFinanceFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateFinanceFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <BenefitsPageMain>
      <BenefitsPageCharts columns={4}>
        <CardWithChart
          title="Revenue"
          icon={<UserFocusIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Cost"
          icon={<UserFocusIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Profit"
          icon={<UserFocusIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Margin"
          icon={<UserFocusIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Profit"
          icon={<UserFocusIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Margin"
          icon={<UserFocusIcon />}
          percent={2}
          count={23}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </BenefitsPageCharts>
      <CardWithText
        title="Benefits"
        description="20 new Benefits"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEbModal}>
            Export
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <BenefitsPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search For Benefit"
                  placeholder="Search For Statement"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
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
                  label="Category"
                  placeholder="Please Select"
                  value={filter.category}
                  onValue={(category) => setFilter({ ...filter, category })}
                />
              </Grid>
              <BenefitsPageFilterActions direction="horizontal">
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
              </BenefitsPageFilterActions>
            </BenefitsPageFilter>
          </Collapse>
          <Table head={DFinanceHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      <CardWithText
        title="Suggestions"
        actions={[
          <Button color="primary" variant="contained" onClick={openAsModal}>
            Suggest
          </Button>,
        ]}
      >
        <Stack>
          <Table head={DFinanceHead2} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      {asModal && <AddSuggestionModal onClose={closeAsModal} />}
      {ebModal && <ExportBenefitsModal onClose={closeEbModal} />}
    </BenefitsPageMain>
  );
};

export default BenefitsPage;