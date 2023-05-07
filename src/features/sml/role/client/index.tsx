import React, { useState } from 'react';
import {
  SmlPageMain,
  SmlPageCharts,
  SmlPageFilter,
  SmlPageFilterActions,
  SMLPageFilterContainer,
} from 'features/sml/styles';
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
  OrderedIcon,
  RegisteredIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateSmlFilter } from 'features/sml/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  CreateSmlModal,
  CreateSmlTabsModal,
  ExportSmlModal,
  //   CreateSmlModal,
  //   OrderSmlModal,
  //   CreateSmlTabsModal,
  //   CreateSmlFinal,
} from 'features/sml/role/client/elements';
import { useMenu, useModal } from 'hooks';

const SmlPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSmlFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);
  //   const [osModal, openOsModal, closeOsModal] = useModal(false);
  const [cstModal, openCstModal, closeCstModal] = useModal(false);
  //   const [csfModal, openCsfModal, closeCsfModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSmlFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [menuR, openR, setOpenR] = useMenu(false);
  const [menuO, openO, setOpenO] = useMenu(false);
  const [menuOn, openOn, setOpenOn] = useMenu(false);
  const [menuS, openS, setOpenS] = useMenu(false);

  const handleMenuR = () => {
    setOpenR(!openR);
  };
  const handleMenuO = () => {
    setOpenO(!openO);
  };
  const handleMenuOn = () => {
    setOpenOn(!openOn);
  };
  const handleMenuS = () => {
    setOpenS(!openS);
  };

  return (
    <SmlPageMain>
      <SmlPageCharts>
        <CardWithChart
          title="To Be Created"
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
          title="Finished"
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
      </SmlPageCharts>
      <CardWithText
        title="Social Media Listening"
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
          <Button color="default" variant="contained" onClick={openEsModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openCsModal}>
            Get Report
          </Button>,
        ]}
      >
        <Stack>
          {/* <Collapse in={filterOpen}>
            <SmlPageFilter>
              <SMLPageFilterContainer>
                <Input
                  type="text"
                  label="Search For Report"
                  placeholder="Report Name"
                  value={filter.report}
                  onValue={(report) => setFilter({ ...filter, report })}
                />
                <Input
                  type="select"
                  label="Stakeholder"
                  placeholder="Please Select"
                  value={filter.stakeholder}
                  onValue={(stakeholder) =>
                    setFilter({ ...filter, stakeholder })
                  }
                />
                <Input
                  type="select"
                  label="Language"
                  placeholder="Select Language"
                  value={filter.language}
                  onValue={(language) => setFilter({ ...filter, language })}
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
                  type="select"
                  label="Platform"
                  placeholder="Select Platform"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
                />
              </SMLPageFilterContainer>
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
          </Collapse> */}
          <Tabs
            tabs={['Of Interest', 'New', 'Archive', 'Subscriptions']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <Title title="Of Interest" />
          <CheckboxTable
            head={[
              {
                reference: 'diseaseArea',
                label: 'Disease Area',
                visible: true,
              },
              {
                reference: 'subscription',
                label: 'Subscription',
                visible: true,
              },
              {
                reference: 'tokens',
                label: 'Tokens',
                visible: true,
              },
              {
                reference: 'budget',
                label: 'Budget (Monthly)',
                visible: false,
              },
              {
                reference: 'socialMedia',
                label: 'Social Media',
                visible: true,
              },
              {
                reference: 'totalTokensUsed',
                label: 'Total Tokens Used',
                visible: false,
              },
              {
                reference: 'tokensUsedThisMonth',
                label: 'Tokens Used This Month',
                visible: false,
              },
              {
                reference: 'startDate',
                label: 'Start Date',
                visible: false,
              },
              {
                reference: 'endDate',
                label: 'End Date',
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

          <Stack direction="horizontal">
            <Button variant="contained" onClick={handleMenuR}>
              Reccomended actions
            </Button>
            <Button variant="contained" onClick={handleMenuO}>
              Ordered actions
            </Button>
            <Button variant="contained" onClick={handleMenuOn}>
              Ongoing actions
            </Button>
            <Button variant="contained" onClick={handleMenuS}>
              Subscription actions
            </Button>
            <Button variant="contained" onClick={openCstModal}>
              Create SML Tabs
            </Button>
          </Stack>
          {openR && (
            <Menu
              items={[
                {
                  icon: <OrderedIcon />,
                  label: 'Order',
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
              ref={menuR}
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
          {openS && (
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
              ref={menuS}
            />
          )}
        </Stack>
      </CardWithText>
      {esModal && <ExportSmlModal onClose={closeEsModal} />}
      {csModal && <CreateSmlModal onClose={closeCsModal} />}
      {cstModal && <CreateSmlTabsModal onClose={closeCstModal} />}
    </SmlPageMain>
  );
};

export default SmlPage;
