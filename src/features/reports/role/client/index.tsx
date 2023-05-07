import React, { useState } from 'react';
import {
  ReportsPageMain,
  ReportsPageCharts,
  ReportsPageFilter,
  ReportsPageFilterActions,
  ReportsPageFilterContainer,
} from 'features/reports/styles';
import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  Menu,
  Tabs,
  Title,
} from 'components/custom';
import {
  ContactIcon,
  ContactedIcon,
  IdentifiedIcon,
  InfoIcon,
  ManageIcon,
  RegisteredIcon,
  ReportIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Stack } from 'components/system';
import { Collapse } from '@mui/material';
import {
  DGenerateReportsClientsFilter,
  DReportsClientHead,
} from 'features/reports/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportReportsModal,
  CreateReportsModal,
} from 'features/reports/role/client/elements';
import { useMenu, useModal } from 'hooks';
import { useRouter } from 'next/router';

const ReportsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateReportsClientsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [erModal, openErModal, closeErModal] = useModal(false);
  const [crModal, openCrModal, closeCrModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateReportsClientsFilter());
  };

  const [menuWr, openWr, setOpenWr] = useMenu(false);
  const [menuO, openO, setOpenO] = useMenu(false);
  const [menuOn, openOn, setOpenOn] = useMenu(false);
  const [menuD, openD, setOpenD] = useMenu(false);

  const handleMenuWr = () => {
    setOpenWr(!openWr);
  };
  const handleMenuO = () => {
    setOpenO(!openO);
  };
  const handleMenuOn = () => {
    setOpenOn(!openOn);
  };
  const handleMenuD = () => {
    setOpenD(!openD);
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const router = useRouter();

  return (
    <ReportsPageMain>
      <ReportsPageCharts>
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
      </ReportsPageCharts>
      <ReportsPageCharts>
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
      </ReportsPageCharts>
      <CardWithText
        title="Reports"
        description="2 New Reports This Month"
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
              <ReportsPageFilterContainer>
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
                  label="Type"
                  placeholder="Please Select"
                  value={filter.type}
                  onValue={(type) => setFilter({ ...filter, type })}
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
                  label="Numbers of Ifluencers"
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
                  label="Website Clicks"
                  value={filter.websiteClicks}
                  onValue={(websiteClicks) =>
                    setFilter({ ...filter, websiteClicks })
                  }
                />
                <Input
                  type="min-max"
                  label="Engagement"
                  value={filter.engagement}
                  onValue={(engagement) => setFilter({ ...filter, engagement })}
                />
                <Input
                  type="min-max"
                  label="Cost Per Click"
                  value={filter.costPerClick}
                  onValue={(costPerClick) =>
                    setFilter({ ...filter, costPerClick })
                  }
                />
                <Input
                  type="min-max"
                  label="Cost Per Target"
                  value={filter.costPerTarget}
                  onValue={(costPerTarget) =>
                    setFilter({ ...filter, costPerTarget })
                  }
                />
              </ReportsPageFilterContainer>
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
            tabs={['Without Report', 'Ordered', 'Ongoing', 'Delivered']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <CheckboxTable
            head={DReportsClientHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
          <Stack direction="horizontal">
            <Button variant="contained" color="primary" onClick={handleMenuWr}>
              Without Report Action
            </Button>
            <Button variant="contained" color="primary" onClick={handleMenuO}>
              Ordered Action
            </Button>
            <Button variant="contained" color="primary" onClick={handleMenuOn}>
              Ongoing Action
            </Button>
            <Button variant="contained" color="primary" onClick={handleMenuD}>
              Delivered Action
            </Button>
          </Stack>
        </Stack>
        {openWr && (
          <Menu
            items={[
              {
                icon: <ReportIcon />,
                label: 'Report',
                action: () => {},
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <ScheduleIcon />,
                label: 'Schedule',
                action: () => {},
              },
            ]}
            ref={menuWr}
          />
        )}
        {openO && (
          <Menu
            items={[
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <ScheduleIcon />,
                label: 'Schedule',
                action: () => {},
              },
            ]}
            ref={menuO}
          />
        )}
        {openOn && (
          <Menu
            items={[
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <ScheduleIcon />,
                label: 'Schedule',
                action: () => {},
              },
            ]}
            ref={menuOn}
          />
        )}
        {openD && (
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
                action: () => router.push('/reports/manage'),
              },
              {
                icon: <ContactIcon />,
                label: 'Contact',
                action: () => {},
              },
              {
                icon: <ScheduleIcon />,
                label: 'Schedule',
                action: () => {},
              },
            ]}
            ref={menuD}
          />
        )}
      </CardWithText>
      {erModal && <ExportReportsModal onClose={closeErModal} />}
      {crModal && <CreateReportsModal onClose={closeCrModal} />}
    </ReportsPageMain>
  );
};

export default ReportsPage;
