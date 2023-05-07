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
  Menu,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ContactedIcon,
  ContactIcon,
  CreateIcon,
  DeleteIcon,
  EditIcon,
  FinishedIcon,
  IdentifiedIcon,
  InfoIcon,
  OrderedIcon,
  ReadyIcon,
  RegisteredIcon,
  ReportSMLIcon,
  RevenueIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  SMLSmallIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateSmlFilter } from 'features/sml/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportSmlModal,
  CreateSmlModal,
  OrderSmlModal,
  CreateSmlTabsModal,
  CreateSmlFinal,
} from 'features/sml/role/admin/elements';
import { useMenu, useModal } from 'hooks';
import { useRouter } from 'next/router';

const SmlPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSmlFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);
  const [osModal, openOsModal, closeOsModal] = useModal(false);
  const [cstModal, openCstModal, closeCstModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSmlFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [menuTBC, openTBC, setOpenTBC] = useMenu(false);
  const [menuTBS, openTBS, setOpenTBS] = useMenu(false);
  const [menuSML, openSML, setOpenSML] = useMenu(false);

  const handleMenuTBC = () => {
    setOpenTBC(!openTBC);
  };
  const handleMenuTBS = () => {
    setOpenTBS(!openTBS);
  };
  const handleMenuSML = () => {
    setOpenSML(!openSML);
  };

  const router = useRouter();

  const handleRoute = (route: string) => {
    router.push(route);
  };

  return (
    <SmlPageMain>
      <SmlPageCharts>
        <CardWithChart
          title="Ordered"
          icon={<OrderedIcon />}
          smallIcon={<SMLSmallIcon />}
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
          icon={<ReadyIcon />}
          smallIcon={<SMLSmallIcon />}
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
          smallIcon={<SMLSmallIcon />}
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
          smallIcon={<SMLSmallIcon />}
          percent={2}
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
          <Button color="default" variant="contained" onClick={openEsModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openCsModal}>
            Create SML
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <SmlPageFilter>
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
                  label="Stakeholder"
                  placeholder="Select Type"
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
                  type="text"
                  label="Platform"
                  placeholder="Select Platform"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
                />
                <Input
                  type="date"
                  label="Start Date"
                  placeholder="Start"
                  value={filter.startDate}
                  onValue={(startDate) => setFilter({ ...filter, startDate })}
                />
                <Input
                  type="date"
                  label="End Date"
                  placeholder="Start"
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
            tabs={['Ordered', 'Ready', 'Delivered']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <CheckboxTable
            head={[
              {
                reference: 'client',
                label: 'Client',
                visible: true,
              },
              {
                reference: 'diseaseArea',
                label: 'Disease Area',
                visible: true,
              },
              {
                reference: 'platform',
                label: 'Platform',
                visible: true,
              },
              {
                reference: 'stakeholder',
                label: 'Stakeholder',
                visible: true,
              },
              {
                reference: 'period',
                label: 'Period',
                visible: true,
              },
              {
                reference: 'subscription',
                label: 'Subscription',
                visible: true,
              },
              {
                reference: 'status',
                label: 'Status',
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
            <Button variant="contained" onClick={handleMenuTBS}>
              TBS actions
            </Button>
            <Button variant="contained" onClick={handleMenuTBC}>
              TBC actions
            </Button>
            <Button variant="contained" onClick={handleMenuSML}>
              SML actions
            </Button>
          </Stack>
        </Stack>
        {openTBS && (
          <Menu
            items={[
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
        {openSML && (
          <Menu
            items={[
              {
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ReportSMLIcon />,
                label: 'Report',
                action: () => {
                  handleRoute('/services/sml/reports');
                },
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
            ref={menuSML}
          />
        )}
        <Stack direction="horizontal" style={{ marginTop: '50px' }}>
          <Button variant="contained" onClick={openOsModal}>
            Os modal
          </Button>
          <Button variant="contained" onClick={openCstModal}>
            Cst modal
          </Button>
        </Stack>
      </CardWithText>
      {esModal && <ExportSmlModal onClose={closeEsModal} />}
      {csModal && <CreateSmlModal onClose={closeCsModal} />}
      {osModal && <OrderSmlModal onClose={closeOsModal} />}
      {cstModal && <CreateSmlTabsModal onClose={closeCstModal} />}
    </SmlPageMain>
  );
};

export default SmlPage;
