import React, { useState } from 'react';
import {
  DiscoverClientsPageMain,
  DiscoverClientsPageCharts,
  DiscoverClientsPageFilter,
  DiscoverClientsPageFilterActions,
} from 'features/discover-clients/styles';
import { CardWithChart, CardWithText, Tabs } from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateDiscoverClientsFilter } from 'features/discover-clients/data';
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
import { useModal } from 'hooks';

const DiscoverClientsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateDiscoverClientsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateDiscoverClientsFilter());
  };

  const [aiModal, openAiModal, closeAiModal] = useModal(false);
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [nsModal, openNsModal, closeNsModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);

  return (
    <DiscoverClientsPageMain>
      <DiscoverClientsPageCharts>
        <CardWithChart
          title="Identified"
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
          title="Contacted"
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
          title="Registered"
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
          title="Total"
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
                  label="Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                />
                <Input
                  type="select"
                  label="Email"
                  placeholder="Show all"
                  value={filter.email}
                  onValue={(email) => setFilter({ ...filter, email })}
                />
                <Input
                  type="select"
                  label="Task"
                  placeholder="Show all"
                  value={filter.task}
                  onValue={(task) => setFilter({ ...filter, task })}
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
            value={0}
            onValue={() => {}}
            tabs={[
              'Identified',
              'Contacted',
              'Registered',
              'Scheduled',
              'Approved',
            ]}
          />
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
          </Stack>
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
