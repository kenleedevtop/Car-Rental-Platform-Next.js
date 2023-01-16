import React, { useState } from 'react';
import {
  ReportsPageMain,
  ReportsPageCharts,
  ReportsPageFilter,
  ReportsPageFilterActions,
} from 'features/reports/styles';
import {
  CardWithChart,
  CardWithText,
  Menu,
  Table,
  Tabs,
} from 'components/custom';
import {
  ApproveIcon,
  ContactedIcon,
  ContactIcon,
  CreateIcon,
  DeleteIcon,
  DeliverIcon,
  DownloadIcon,
  EditIcon,
  IdentifiedIcon,
  RegisteredIcon,
  ScheduleIcon,
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
} from 'features/reports/role/admin/elements';
import { useMenu, useModal } from 'hooks';

const ReportsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateReportsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [erModal, openErModal, closeErModal] = useModal(false);
  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const [menuTBC, openTBC, setOpenTBC] = useMenu(false);
  const [menuTBS, openTBS, setOpenTBS] = useMenu(false);
  const [menuAF, openAF, setOpenAF] = useMenu(false);
  const [menuA, openA, setOpenA] = useMenu(false);

  const handleMenuTBC = () => {
    setOpenTBC(!openTBC);
  };
  const handleMenuTBS = () => {
    setOpenTBS(!openTBS);
  };
  const handleMenuAF = () => {
    setOpenAF(!openAF);
  };
  const handleMenuA = () => {
    setOpenA(!openA);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateReportsFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <ReportsPageMain>
      <ReportsPageCharts columns={4}>
        <CardWithChart
          title="Ordered"
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
          title="Ready"
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
          title="Delivered"
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
          title="Revenue"
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
      </ReportsPageCharts>
      <CardWithText
        title="Reports"
        description="More than 290+ new Reports"
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
            <ReportsPageFilter>
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Company"
                  placeholder="Select Company"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
                />
                <Input
                  type="select"
                  label="Client"
                  placeholder="Select Client"
                  value={filter.client}
                  onValue={(client) => setFilter({ ...filter, client })}
                />
                <Input
                  type="select"
                  label="Report"
                  placeholder="Select Type"
                  value={filter.report}
                  onValue={(report) => setFilter({ ...filter, report })}
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Select Location"
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
                  type="min-max"
                  label="Numbers of Ifluencer"
                  value={filter.numberOfIfluencers}
                  onValue={(numberOfIfluencers) =>
                    setFilter({ ...filter, numberOfIfluencers })
                  }
                />
                <Input
                  type="date"
                  label="Start"
                  placeholder="Select Start Date"
                  value={filter.startDate}
                  onValue={(startDate) => setFilter({ ...filter, startDate })}
                />
                <Input
                  type="date"
                  label="End"
                  placeholder="Select End Date"
                  value={filter.endDate}
                  onValue={(endDate) => setFilter({ ...filter, endDate })}
                />
                <Input
                  type="min-max"
                  label="Budget"
                  placeholder="Please Select"
                  value={filter.budget}
                  onValue={(budget) => setFilter({ ...filter, budget })}
                />
                <Input
                  type="multiselect"
                  label="Lable"
                  placeholder="Choose several state"
                  value={filter.lable}
                  onValue={(lable) => setFilter({ ...filter, lable })}
                />
              </Grid>
              <ReportsPageFilterActions direction="horizontal">
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
              </ReportsPageFilterActions>
            </ReportsPageFilter>
          </Collapse>
          <Tabs
            tabs={['Ordered', 'Ready', 'Delivered']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <Table
            head={[
              {
                reference: 'campaign',
                label: 'Campaign',
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
                reference: 'influencers',
                label: 'Influencers',
              },
              {
                reference: 'price',
                label: 'Price',
              },
              {
                reference: 'actions',
                label: 'Actions',
              },
            ]}
            items={[]}
            renderItem={renderItem}
          />

          <Pagination count={32} />

          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={handleMenuTBC}>
              TBC Actions
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuTBS}>
              TBS Actions
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuAF}>
              AF Actions
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuA}>
              A Actions
            </Button>
          </Stack>
          {openTBC && (
            <Menu
              items={[
                {
                  icon: <CreateIcon />,
                  label: 'Create',
                  action: () => {},
                },
                {
                  icon: <ContactIcon />,
                  label: 'Contact',
                  action: () => {},
                },
                {
                  icon: <EditIcon />,
                  label: 'Note',
                  action: () => {},
                },
                {
                  icon: <ScheduleIcon />,
                  label: 'Schedule',
                  action: () => {},
                },
                {
                  icon: <DeleteIcon />,
                  label: 'Remove',
                  action: () => {},
                },
              ]}
              ref={menuTBC}
            />
          )}
          {openTBS && (
            <Menu
              items={[
                {
                  icon: <DeliverIcon />,
                  label: 'Deliver',
                  action: () => {},
                },
                {
                  icon: <DownloadIcon />,
                  label: 'Download',
                  action: () => {},
                },
                {
                  icon: <ContactIcon />,
                  label: 'Contact',
                  action: () => {},
                },
                {
                  icon: <EditIcon />,
                  label: 'Note',
                  action: () => {},
                },
                {
                  icon: <ScheduleIcon />,
                  label: 'Schedule',
                  action: () => {},
                },
                {
                  icon: <DeleteIcon />,
                  label: 'Remove',
                  action: () => {},
                },
              ]}
              ref={menuTBS}
            />
          )}
          {openAF && (
            <Menu
              items={[
                {
                  icon: <ApproveIcon />,
                  label: 'Approved',
                  action: () => {},
                },
                {
                  icon: <DownloadIcon />,
                  label: 'Download',
                  action: () => {},
                },
                {
                  icon: <ContactIcon />,
                  label: 'Contact',
                  action: () => {},
                },
                {
                  icon: <EditIcon />,
                  label: 'Note',
                  action: () => {},
                },
                {
                  icon: <ScheduleIcon />,
                  label: 'Schedule',
                  action: () => {},
                },
                {
                  icon: <DeleteIcon />,
                  label: 'Remove',
                  action: () => {},
                },
              ]}
              ref={menuAF}
            />
          )}
          {openA && (
            <Menu
              items={[
                {
                  icon: <DownloadIcon />,
                  label: 'Download',
                  action: () => {},
                },
                {
                  icon: <ContactIcon />,
                  label: 'Contact',
                  action: () => {},
                },
                {
                  icon: <EditIcon />,
                  label: 'Note',
                  action: () => {},
                },
                {
                  icon: <ScheduleIcon />,
                  label: 'Schedule',
                  action: () => {},
                },
                {
                  icon: <DeleteIcon />,
                  label: 'Remove',
                  action: () => {},
                },
              ]}
              ref={menuA}
            />
          )}
        </Stack>
      </CardWithText>
      {erModal && <ExportReportsModal onClose={closeErModal} />}
      {crModal && <CreateReportsModal onClose={closeCrModal} />}
    </ReportsPageMain>
  );
};

export default ReportsPage;
