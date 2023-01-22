import React, { useState } from 'react';
import {
  SmlPageMain,
  SmlPageCharts,
  SmlPageFilter,
  SmlPageFilterActions,
} from 'features/sml/styles';
import {
  CardWithChart,
  CardWithText,
  Table,
  Tabs,
  Title,
} from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateReportsFilter } from 'features/reports/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportReportsModal,
  CreateReportsModal,
} from 'features/reports/role/client/elements';
import { useModal } from 'hooks';

const ReportsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateReportsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [erModal, openErModal, closeErModal] = useModal(false);
  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateReportsFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <SmlPageMain>
      <SmlPageCharts columns={4}>
        <CardWithChart
          title="Without report"
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
          title="To Be Created"
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
          title="Received"
          icon={<RegisteredIcon />}
          percent={-6}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Approved"
          icon={<TotalIcon />}
          percent={-6}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </SmlPageCharts>
      <SmlPageCharts columns={4}>
        <CardWithChart
          title="Reach"
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
          title="Likes"
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
          title="Comments"
          icon={<RegisteredIcon />}
          percent={-6}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Website Clicks"
          icon={<TotalIcon />}
          percent={-6}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </SmlPageCharts>
      <CardWithText
        title="Reports"
        description="2 New Reports This Month"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openErModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openCrModal}>
            Create Report
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <SmlPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search For Report"
                  placeholder="Campaign Name"
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
                  label="Location"
                  placeholder="Select Language"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
                <Input
                  type="select"
                  label="Disease Area"
                  placeholder="Select Disease Area"
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="text"
                  label="Platform"
                  placeholder="Select Platform"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
                />
                <Input
                  type="select"
                  label="Promotion Type"
                  placeholder="Select Promotion Team"
                  value={filter.promotionType}
                  onValue={(promotionType) =>
                    setFilter({ ...filter, promotionType })
                  }
                />
                <Input
                  type="select"
                  label="Influencer Size"
                  placeholder="Select Influencer Size"
                  value={filter.influencerSize}
                  onValue={(influencerSize) =>
                    setFilter({ ...filter, influencerSize })
                  }
                />
                <Input
                  type="min-max"
                  label="Numbers of Ifluencers"
                  value={filter.numberOfIfluencers}
                  onValue={(numberOfIfluencers) =>
                    setFilter({ ...filter, numberOfIfluencers })
                  }
                />
                <Input
                  type="date"
                  label="Start Date"
                  placeholder="Select Start Date"
                  value={filter.startDate}
                  onValue={(startDate) => setFilter({ ...filter, startDate })}
                />
                <Input
                  type="date"
                  label="End Date"
                  placeholder="Select End Date"
                  value={filter.endDate}
                  onValue={(endDate) => setFilter({ ...filter, endDate })}
                />
                <Input
                  type="min-max"
                  label="Budget"
                  value={filter.budget}
                  onValue={(budget) => setFilter({ ...filter, budget })}
                />
              </Grid>
              <SmlPageFilterActions direction="horizontal">
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
              </SmlPageFilterActions>
            </SmlPageFilter>
          </Collapse>
          <Tabs
            tabs={['Without Report', 'To Be Created', 'Received', 'Approved']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <Title title="Without report" />
          <Table
            head={[
              {
                reference: 'campaignName',
                label: 'Campaign name',
                visible: true,
              },
              {
                reference: 'product',
                label: 'Product',
                visible: true,
              },
              {
                reference: 'platform',
                label: 'Platform',
                visible: true,
              },
              {
                reference: 'startAndFinishDate',
                label: 'Start & Finish Date',
                visible: true,
              },
              {
                reference: 'influencers',
                label: 'Influencers',
                visible: true,
              },
              {
                reference: 'report',
                label: 'Report',
                visible: true,
              },
              {
                reference: 'budget',
                label: 'Budget',
                visible: true,
              },
              {
                reference: 'actions',
                label: 'Actions',
                visible: true,
              },
            ]}
            items={[]}
            renderItem={renderItem}
          />

          <Pagination count={32} />
        </Stack>
      </CardWithText>
      {erModal && <ExportReportsModal onClose={closeErModal} />}
      {crModal && <CreateReportsModal onClose={closeCrModal} />}
    </SmlPageMain>
  );
};

export default ReportsPage;
