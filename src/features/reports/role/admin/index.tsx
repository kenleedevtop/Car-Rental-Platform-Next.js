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
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ContactIcon,
  CreateIcon,
  DeleteIcon,
  DeliverIcon,
  EditIcon,
  FinishedIcon,
  InfoIcon,
  ManageIcon,
  OrderedIcon,
  ReadyIcon,
  ReportsSmallIcon,
  RevenueIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateReportsFilter, DReportsHead } from 'features/reports/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportReportsModal,
  CreateReportsModal,
} from 'features/reports/role/admin/elements';
import { useMenu, useModal } from 'hooks';
import { useRouter } from 'next/router';

const ReportsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateReportsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [tabs, setTabs] = useState(0);

  const [erModal, openErModal, closeErModal] = useModal(false);
  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const [menuTBC, openTBC, setOpenTBC] = useMenu(false);
  const [menuTBS, openTBS, setOpenTBS] = useMenu(false);
  const [menuAF, openAF, setOpenAF] = useMenu(false);

  const handleMenuTBC = () => {
    setOpenTBC(!openTBC);
  };
  const handleMenuTBS = () => {
    setOpenTBS(!openTBS);
  };
  const handleMenuAF = () => {
    setOpenAF(!openAF);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateReportsFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const router = useRouter();

  return (
    <ReportsPageMain>
      <ReportsPageCharts>
        <CardWithChart
          title="Ordered"
          icon={<OrderedIcon />}
          percent={2}
          smallIcon={<ReportsSmallIcon />}
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
          icon={<ReadyIcon />}
          smallIcon={<ReportsSmallIcon />}
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
          icon={<FinishedIcon />}
          smallIcon={<ReportsSmallIcon />}
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
          icon={<RevenueIcon />}
          smallIcon={<ReportsSmallIcon />}
          percent={2}
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
              <Tabs
                tabs={['Report', 'Client']}
                value={tabs}
                onValue={setTabs}
              />
              {tabs === 0 && (
                <Grid columns={4}>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Select Enter"
                    value={filter.search}
                    onValue={(search) => setFilter({ ...filter, search })}
                  />
                  <Input
                    type="select"
                    label="Type"
                    placeholder="Select Select"
                    value={filter.type}
                    onValue={(type) => setFilter({ ...filter, type })}
                    options={[
                      {
                        value: 0,
                        label: 'Basic',
                      },
                      {
                        value: 1,
                        label: 'Premium',
                      },
                      {
                        value: 2,
                        label: 'Custom',
                      },
                    ]}
                  />
                  <Input
                    type="min-max"
                    label="Budget"
                    value={filter.budget}
                    onValue={(budget) => setFilter({ ...filter, budget })}
                  />
                  <InputGroup
                    label="Date"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.dateStart,
                        onValue: (dateStart) =>
                          setFilter({ ...filter, dateStart }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.dateEnd,
                        onValue: (dateEnd) => setFilter({ ...filter, dateEnd }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
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
                    label="Reach"
                    value={filter.reach}
                    onValue={(reach) => setFilter({ ...filter, reach })}
                  />
                  <Input
                    type="min-max"
                    label="Likes"
                    value={filter.likes}
                    onValue={(likes) => setFilter({ ...filter, likes })}
                  />
                  <Input
                    type="min-max"
                    label="Comments"
                    value={filter.comments}
                    onValue={(comments) => setFilter({ ...filter, comments })}
                  />
                  <Input
                    type="min-max"
                    label="Website clicks"
                    value={filter.websiteClicks}
                    onValue={(websiteClicks) =>
                      setFilter({ ...filter, websiteClicks })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Engagement"
                    value={filter.engagement}
                    onValue={(engagement) =>
                      setFilter({ ...filter, engagement })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Cost per Click"
                    value={filter.costPerClick}
                    onValue={(costPerClick) =>
                      setFilter({ ...filter, costPerClick })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Cost per Target"
                    value={filter.costPerTarget}
                    onValue={(costPerTarget) =>
                      setFilter({ ...filter, costPerTarget })
                    }
                  />
                  <Input
                    type="select"
                    label="Labels"
                    placeholder="Please Select"
                    value={filter.labels}
                    onValue={(labels) => setFilter({ ...filter, labels })}
                  />
                </Grid>
              )}
              {tabs === 1 && (
                <Grid columns={4}>
                  <Input
                    type="select"
                    label="Industry"
                    placeholder="Please Select"
                    value={filter.industry}
                    onValue={(industry) => setFilter({ ...filter, industry })}
                  />
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
                    label="Ambassador"
                    placeholder="Please Select"
                    value={filter.ambassador}
                    onValue={(ambassador) =>
                      setFilter({ ...filter, ambassador })
                    }
                  />
                  <Input
                    type="select"
                    label="Product"
                    placeholder="Please Select"
                    value={filter.product}
                    onValue={(product) => setFilter({ ...filter, product })}
                  />
                </Grid>
              )}

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
          <CheckboxTable
            head={DReportsHead}
            items={[]}
            renderItem={renderItem}
          />

          <Pagination count={32} />

          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={handleMenuTBC}>
              Ordered
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuTBS}>
              Ready
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuAF}>
              Delivered
            </Button>
          </Stack>
          {openTBC && (
            <Menu
              items={[
                {
                  icon: <InfoIcon />,
                  label: 'Info',
                  action: () => {},
                },
                {
                  icon: <ManageIcon />,
                  label: 'Manage',
                  action: () => router.push('/services/reports/manage'),
                },
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
                  label: 'Create',
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
                  icon: <InfoIcon />,
                  label: 'Info',
                  action: () => {},
                },
                {
                  icon: <ManageIcon />,
                  label: 'Manage',
                  action: () => router.push('/services/reports/manage'),
                },
                {
                  icon: <DeliverIcon />,
                  label: 'Deliver',
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
                  icon: <InfoIcon />,
                  label: 'Info',
                  action: () => {},
                },
                {
                  icon: <ManageIcon />,
                  label: 'Manage',
                  action: () => router.push('/services/reports/manage'),
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
        </Stack>
      </CardWithText>
      {erModal && <ExportReportsModal onClose={closeErModal} />}
      {crModal && <CreateReportsModal onClose={closeCrModal} />}
    </ReportsPageMain>
  );
};

export default ReportsPage;
