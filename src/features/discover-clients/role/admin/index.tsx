import React, { useState } from 'react';
import {
  DiscoverClientsPageMain,
  DiscoverClientsPageCharts,
  DiscoverClientsPageFilter,
  DiscoverClientsPageFilterActions,
} from 'features/discover-clients/styles';
import {
  CardWithChart,
  CardWithText,
  Menu,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import {
  ClientContactedIcon,
  ClientIdentifiedIcon,
  ClientRegisteredIcon,
  ClientScheduledIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import {
  DClientsHeadContacted,
  DClientsHeadIdentified,
  DClientsHeadRegistered,
  DClientsHeadScheduled,
  DGenerateDiscoverClientsFilter,
} from 'features/discover-clients/data';
import {
  AddClientsModal,
  ContactClientsModal,
  DeleteClientsModal,
  ExportClientsModal,
  ClientsProfile,
  NoteClients,
  NotificationsSettingsModal,
  ScheduleClientsModal,
} from 'features/discover-clients/role/admin/elements';
import { useMenu, useModal } from 'hooks';
import { TTableRenderItemObject } from 'components/custom/table/types';

const DiscoverClientsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateDiscoverClientsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateDiscoverClientsFilter());
  };

  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  const [aiModal, openAiModal, closeAiModal] = useModal(false);
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [nsModal, openNsModal, closeNsModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);

  const renderItem = ({
    headItem,
    cell,
    row,
    table,
  }: TTableRenderItemObject) => {};

  return (
    <DiscoverClientsPageMain>
      <DiscoverClientsPageCharts>
        <CardWithChart
          title="Identified"
          icon={<ClientIdentifiedIcon />}
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
          title="Contacted"
          icon={<ClientContactedIcon />}
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
          title="Registered"
          icon={<ClientRegisteredIcon />}
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
          title="Scheduled"
          icon={<ClientScheduledIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </DiscoverClientsPageCharts>
      <CardWithText
        title="Discovered Clients"
        description="More than 290+ new Clients"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEModal}>
            Export
          </Button>,
          <Button color="default" variant="contained" onClick={() => {}}>
            Import
          </Button>,
          <Button color="primary" variant="contained" onClick={openAiModal}>
            Add Client
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <DiscoverClientsPageFilter>
              <Grid columns={4}>
                <Input
                  type="text"
                  label="Search"
                  placeholder="Please Enter"
                  value={filter.search}
                  onValue={(search) => setFilter({ ...filter, search })}
                />
                <Input
                  type="multiselect"
                  label="Industry"
                  placeholder="Please Select"
                  value={filter.industry}
                  onValue={(industry) => setFilter({ ...filter, industry })}
                />
                <Input
                  type="multiselect"
                  label="Company"
                  placeholder="Please Select"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
                />
                <Input
                  type="multiselect"
                  label="Role"
                  placeholder="Please Select"
                  value={filter.role}
                  onValue={(role) => setFilter({ ...filter, role })}
                />
                <Input
                  type="multiselect"
                  label="Product"
                  placeholder="Please Select"
                  value={filter.product}
                  onValue={(product) => setFilter({ ...filter, product })}
                />
                <Input
                  type="multiselect"
                  label="Ambassador"
                  placeholder="Please Select"
                  value={filter.ambassador}
                  onValue={(ambassador) => setFilter({ ...filter, ambassador })}
                />
                <Input
                  type="multiselect"
                  label="Disease Area"
                  placeholder="Please Select"
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Please Select"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
                <Input
                  type="multiselect"
                  label="Market"
                  placeholder="Please Select"
                  value={filter.market}
                  onValue={(market) => setFilter({ ...filter, market })}
                />
                <Input
                  type="select"
                  label="Status"
                  placeholder="Please Select"
                  value={filter.status}
                  onValue={(status) => setFilter({ ...filter, status })}
                  options={[
                    {
                      value: 0,
                      label: 'Not confirmed',
                    },
                    {
                      value: 0,
                      label: 'Confirmed',
                    },
                    {
                      value: 0,
                      label: 'Verified',
                    },
                    {
                      value: 0,
                      label: 'Approved',
                    },
                  ]}
                />
                <InputGroup
                  label="Joined"
                  inputRatio="1fr 1fr"
                  elements={[
                    {
                      type: 'date',
                      placeholder: 'From',
                      value: filter.joinedFrom,
                      onValue: (joinedFrom) =>
                        setFilter({ ...filter, joinedFrom }),
                    },
                    {
                      type: 'date',
                      placeholder: 'To',
                      value: filter.joinedTo,
                      onValue: (joinedTo) => setFilter({ ...filter, joinedTo }),
                    },
                  ]}
                />
                <Input
                  type="multiselect"
                  label="Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                />
                <Input
                  type="multiselect"
                  label="Schedule"
                  placeholder="Please Select"
                  value={filter.schedule}
                  onValue={(schedule) => setFilter({ ...filter, schedule })}
                  options={[
                    {
                      value: 0,
                      label: 'Reminder',
                    },
                    {
                      value: 1,
                      label: 'Task',
                    },
                    {
                      value: 2,
                      label: 'Meeting',
                    },
                    {
                      value: 3,
                      label: 'Task',
                    },
                  ]}
                />
              </Grid>
              <DiscoverClientsPageFilterActions direction="horizontal">
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
              </DiscoverClientsPageFilterActions>
            </DiscoverClientsPageFilter>
          </Collapse>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['Identified', 'Contacted', 'Registered', 'Scheduled']}
          />
          {tabs === 0 && (
            <CheckboxTable
              head={DClientsHeadIdentified}
              items={[]}
              renderItem={() => {}}
            />
          )}
          {tabs === 1 && (
            <CheckboxTable
              head={DClientsHeadContacted}
              items={[]}
              renderItem={() => {}}
            />
          )}
          {tabs === 2 && (
            <CheckboxTable
              head={DClientsHeadRegistered}
              items={[]}
              renderItem={() => {}}
            />
          )}
          {tabs === 3 && (
            <CheckboxTable
              head={DClientsHeadScheduled}
              items={[]}
              renderItem={() => {}}
            />
          )}
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={openDiModal}>
              Delete Client
            </Button>
            <Button color="primary" variant="contained" onClick={openCiModal}>
              Contact Client
            </Button>
            <Button color="primary" variant="contained" onClick={openSiModal}>
              Schedule Client
            </Button>
            <Button color="primary" variant="contained" onClick={openNsModal}>
              Notifications Settings
            </Button>
            <Button color="primary" variant="contained" onClick={openIpModal}>
              Client Profile
            </Button>
            <Button color="primary" variant="contained" onClick={openNiModal}>
              Note Client
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenu}>
              Action button
            </Button>
          </Stack>
          {open && (
            <Menu
              items={[
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
              ref={menu}
            />
          )}
        </Stack>
      </CardWithText>
      {aiModal && <AddClientsModal onClose={closeAiModal} />}
      {eModal && <ExportClientsModal onClose={closeEModal} />}
      {diModal && <DeleteClientsModal onClose={closeDiModal} />}
      {ciModal && <ContactClientsModal onClose={closeCiModal} />}
      {siModal && <ScheduleClientsModal onClose={closeSiModal} />}
      {nsModal && <NotificationsSettingsModal onClose={closeNsModal} />}
      {ipModal && <ClientsProfile onClose={closeIpModal} />}
      {niModal && <NoteClients onClose={closeNiModal} />}
    </DiscoverClientsPageMain>
  );
};

export default DiscoverClientsPage;
