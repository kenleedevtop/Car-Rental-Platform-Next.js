import React, { useState } from 'react';
import {
  FinancePageMain,
  FinancePageCharts,
  FinancePageFilter,
  FinancePageFilterActions,
} from 'features/finance/styles';
import {
  DFinanceHead,
  DFinanceHead2,
  DGenerateFinanceFilter,
} from 'features/finance/data';
import {
  CardWithChart,
  CardWithProgress,
  CardWithText,
  Table,
  Tabs,
} from 'components/custom';
import {
  BusinessmanIcon,
  ContactedIcon,
  IdentifiedIcon,
  RedCrossIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useModal } from 'hooks';
import {
  CreateFinanceModal,
  ExportFinanceModal,
  ApproveFinanceModal,
} from 'features/finance/role/admin/elements';

const FinancePage = () => {
  const [cfModal, openCfModal, closeCfModal] = useModal(false);
  const [efModal, openEfModal, closeEfModal] = useModal(false);
  const [afModal, openAfModal, closeAfModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateFinanceFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateFinanceFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <FinancePageMain>
      <FinancePageCharts columns={4}>
        <CardWithChart
          title="Revenue"
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
          title="Cost"
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
          title="Profit"
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
          title="Margin"
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
      </FinancePageCharts>

      <FinancePageCharts columns={4}>
        <CardWithProgress
          title="Industry"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Location"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Disease Area"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Platform"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
      </FinancePageCharts>
      <CardWithText
        title="Financial Statement"
        description="More than 290+ new Statements"
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
          <Button color="primary" variant="contained" onClick={openCfModal}>
            Add Statement
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <FinancePageFilter>
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Company"
                  placeholder="Please Select"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
                />
                <Input
                  type="select"
                  label="Client"
                  placeholder="Please Select"
                  value={filter.client}
                  onValue={(client) => setFilter({ ...filter, client })}
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
                  label="Disease Area"
                  placeholder="Please Select"
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="select"
                  label="Industry"
                  placeholder="Please Select"
                  value={filter.industry}
                  onValue={(industry) => setFilter({ ...filter, industry })}
                />
                <Input
                  type="select"
                  label="Platform"
                  placeholder="Please Select"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
                />
                <Input
                  type="select"
                  label="Promotion Type"
                  placeholder="Please Select"
                  value={filter.promotionType}
                  onValue={(promotionType) =>
                    setFilter({ ...filter, promotionType })
                  }
                />
                <Input
                  type="select"
                  label="Data Range"
                  placeholder="Please Select"
                  value={filter.dataRange}
                  onValue={(dataRange) => setFilter({ ...filter, dataRange })}
                />
                <Input
                  type="number"
                  label="Influencer Size"
                  placeholder="Please Enter"
                  value={filter.influencerSize}
                  onValue={(influencerSize) =>
                    setFilter({ ...filter, influencerSize })
                  }
                />
                <Input
                  type="min-max"
                  label="Influencers"
                  value={filter.influencers}
                  onValue={(influencers) =>
                    setFilter({ ...filter, influencers })
                  }
                />
                <Input
                  type="min-max"
                  label="Budget"
                  value={filter.budget}
                  onValue={(budget) => setFilter({ ...filter, budget })}
                />
                <Input
                  type="multiselect"
                  label="Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
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
      <CardWithText
        title="Cost"
        actions={[
          <Button color="default" variant="contained" onClick={openAfModal}>
            Approve
          </Button>,
        ]}
      >
        <Stack>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['Payments', 'Withdrawals']}
          />
          <Table head={DFinanceHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      <CardWithText
        title="Revenue"
        actions={[
          <Button color="default" variant="contained">
            Received
          </Button>,
        ]}
      >
        <Stack>
          <Tabs value={0} onValue={() => {}} tabs={['Pending', 'Received']} />
          <Table head={DFinanceHead2} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      {cfModal && <CreateFinanceModal onClose={closeCfModal} />}
      {efModal && <ExportFinanceModal onClose={closeEfModal} />}
      {afModal && <ApproveFinanceModal onClose={closeAfModal} />}
    </FinancePageMain>
  );
};

export default FinancePage;
