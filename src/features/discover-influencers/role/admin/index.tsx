import React, { useState } from 'react';
import {
  DiscoverInfluencersPageMain,
  DiscoverInfluencersPageCharts,
  DiscoverInfluencersPageFilter,
  DiscoverInfluencersPageFilterActions,
} from 'features/discover-influencers/styles';
import { CardWithChart, CardWithText, Menu, Tabs } from 'components/custom';
import {
  ApproveIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  InstagramIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  TiktokIcon,
  TwitterIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateDiscoverInfluencersFilter } from 'features/discover-influencers/data';
import {
  AddInfluencerModal,
  ContactInfluencerModal,
  DeleteInfluencerModal,
  ExportInfluencersModal,
  InfluencerProfile,
  NoteInfluencer,
  NotificationsSettingsModal,
  ScheduleInfluencerModal,
} from 'features/discover-influencers/role/admin/elements';
import { useMenu, useModal } from 'hooks';

const DiscoverInfluencersPage = () => {
  // Modals
  const [aiModal, openAiModal, closeAiModal] = useModal(false);
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [nsModal, openNsModal, closeNsModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);

  const [tabs, setTabs] = useState(0);

  const [filter, setFilter] = useState<any>(
    DGenerateDiscoverInfluencersFilter()
  );

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateDiscoverInfluencersFilter());
  };

  const [tbaMenu, openTBA, setOpenTBA] = useMenu(false);
  const [DIMenu, openDI, setOpenDI] = useMenu(false);

  const handleTBAMenu = () => {
    setOpenTBA(!openTBA);
  };

  const handleDIMenu = () => {
    setOpenDI(!openDI);
  };

  return (
    <DiscoverInfluencersPageMain>
      <DiscoverInfluencersPageCharts>
        <CardWithChart
          title="Instagram"
          icon={<InstagramIcon />}
          percent={2}
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Twitter"
          icon={<TwitterIcon />}
          percent={2}
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Tiktok"
          icon={<TiktokIcon />}
          percent={-6}
          count={7552.8}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </DiscoverInfluencersPageCharts>
      <CardWithText
        title="Discovered Influencers"
        description="More than 290+ new Influencers"
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
            Add Influencer
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <DiscoverInfluencersPageFilter>
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Platform"
                  placeholder="Please Select"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
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
                  type="min-max"
                  label="Followers"
                  value={filter.followers}
                  onValue={(followers) => setFilter({ ...filter, followers })}
                />
                <Input
                  type="min-max"
                  label="Age"
                  value={filter.age}
                  onValue={(age) => setFilter({ ...filter, age })}
                />
                <Input
                  type="min-max"
                  label="Status"
                  value={filter.status}
                  onValue={(status) => setFilter({ ...filter, status })}
                />
                <Input
                  type="multiselect"
                  label="Add Label"
                  placeholder="Choose several state"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
                />
                <Input
                  type="select"
                  label="Task"
                  placeholder="Please Select"
                  value={filter.Task}
                  onValue={(Task) => setFilter({ ...filter, Task })}
                />
              </Grid>
              <DiscoverInfluencersPageFilterActions direction="horizontal">
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
              </DiscoverInfluencersPageFilterActions>
            </DiscoverInfluencersPageFilter>
          </Collapse>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['Identified', 'Contacted', 'Registered', 'To Be Approved']}
          />
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={openDiModal}>
              Delete Influencer
            </Button>
            <Button color="primary" variant="contained" onClick={openCiModal}>
              Contact Influencer
            </Button>
            <Button color="primary" variant="contained" onClick={openSiModal}>
              Schedule Influencer
            </Button>
            <Button color="primary" variant="contained" onClick={openNsModal}>
              Notifications Settings
            </Button>
            <Button color="primary" variant="contained" onClick={openIpModal}>
              Influencer Profile
            </Button>
            <Button color="primary" variant="contained" onClick={openNiModal}>
              Note Influencer
            </Button>
            <Button color="primary" variant="contained" onClick={handleTBAMenu}>
              TBA actions
            </Button>
            <Button color="primary" variant="contained" onClick={handleDIMenu}>
              Discover Actions
            </Button>
          </Stack>
          {openTBA && (
            <Menu
              items={[
                {
                  icon: <ApproveIcon />,
                  label: 'Approve',
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
              ref={tbaMenu}
            />
          )}
          {openDI && (
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
              ref={DIMenu}
            />
          )}
        </Stack>
      </CardWithText>
      {aiModal && <AddInfluencerModal onClose={closeAiModal} />}
      {eModal && <ExportInfluencersModal onClose={closeEModal} />}
      {diModal && <DeleteInfluencerModal onClose={closeDiModal} />}
      {ciModal && <ContactInfluencerModal onClose={closeCiModal} />}
      {siModal && <ScheduleInfluencerModal onClose={closeSiModal} />}
      {nsModal && <NotificationsSettingsModal onClose={closeNsModal} />}
      {ipModal && <InfluencerProfile onClose={closeIpModal} />}
      {niModal && <NoteInfluencer onClose={closeNiModal} />}
    </DiscoverInfluencersPageMain>
  );
};

export default DiscoverInfluencersPage;
