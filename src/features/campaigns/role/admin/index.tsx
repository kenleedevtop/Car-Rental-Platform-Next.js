import React, { useState } from 'react';
import {
  CampaignsPageMain,
  CampaignsPageCharts,
  CampaignsPageFilter,
  CampaignsPageFilterActions,
} from 'features/campaigns/styles';
import {
  DCampaignsAdminHead,
  DGenerateCampaignsFilter,
} from 'features/campaigns/data';
import {
  CardWithChart,
  CardWithProgress,
  CardWithText,
  CheckboxTable,
  Menu,
  Tabs,
} from 'components/custom';
import {
  CampaignsCompanyIcon,
  CampaignsDiseaseIcon,
  CampaignsLocationIcon,
  CampaignsSmallIcon,
  CampaignsStruggleIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  FinishedIcon,
  FinishIcon,
  InfoIcon,
  InpreparationIcon,
  ManageIcon,
  OngoingIcon,
  ReportIcon,
  RevenueIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  StartIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal } from 'hooks';
import {
  AddCampaignModal,
  CreatedCampaignModal,
  ExportCampaignsModal,
  NoteCampaignsModal,
  ScheduleCampaignModal,
} from 'features/campaigns/role/admin/elements';

const CampaignsPage = () => {
  const [acModal, openAcModal, closeAcModal] = useModal(false);
  const [ecModal, openEcModal, closeEcModal] = useModal(false);
  const [scModal, openScModal, closeScModal] = useModal(false);
  const [ncModal, openNcModal, closeNcModal] = useModal(false);
  const [ccModal, openCcModal, closeCcModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateCampaignsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);
  const [filterTabs, setFilterTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateCampaignsFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [menuI, openI, setOpenI] = useMenu(false);
  const [menuO, openO, setOpenO] = useMenu(false);
  const [menuF, openF, setOpenF] = useMenu(false);
  const [menuA, openA, setOpenA] = useMenu(false);
  const [menuIn, openIn, setOpenIn] = useMenu(false);

  const handleMenuI = () => {
    setOpenI(!openI);
  };
  const handleMenuO = () => {
    setOpenO(!openO);
  };
  const handleMenuF = () => {
    setOpenF(!openF);
  };
  const handleMenuA = () => {
    setOpenA(!openA);
  };
  const handleMenuIn = () => {
    setOpenIn(!openIn);
  };

  return (
    <CampaignsPageMain>
      <CampaignsPageCharts>
        <CardWithChart
          title="In Preparation"
          icon={<InpreparationIcon />}
          percent={2}
          smallIcon={<CampaignsSmallIcon />}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Ongoing"
          icon={<OngoingIcon />}
          smallIcon={<CampaignsSmallIcon />}
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
          icon={<FinishedIcon />}
          smallIcon={<CampaignsSmallIcon />}
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
          smallIcon={<CampaignsSmallIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </CampaignsPageCharts>

      <CampaignsPageCharts>
        <CardWithProgress
          title="Company"
          icon={<CampaignsCompanyIcon />}
          progressData={[
            {
              icon: 'TS',
              percent: 100,
              title: 'Test',
            },
            {
              icon: 'TS',
              percent: 38,
              title: 'Test',
            },
            {
              icon: 'TS',
              percent: 57,
              title: 'Test',
            },
            {
              icon: 'TS',
              percent: 57,
              title: 'Test',
            },
            {
              icon: 'TS',
              percent: 57,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Location"
          icon={<CampaignsLocationIcon />}
          progressData={[
            {
              icon: 'US',
              percent: 100,
              title: 'United States',
            },
            {
              icon: 'US',
              percent: 38,
              title: 'United States',
            },
            {
              icon: 'US',
              percent: 57,
              title: 'United States',
            },
          ]}
        />
        <CardWithProgress
          title="Disease Area"
          icon={<CampaignsDiseaseIcon />}
          progressData={[
            {
              icon: 'BC',
              percent: 100,
              title: 'Brain Cancer',
            },
            {
              icon: 'BC',
              percent: 38,
              title: 'Brain Cancer',
            },
            {
              icon: 'BC',
              percent: 57,
              title: 'Brain Cancer',
            },
          ]}
        />
        <CardWithProgress
          title="Struggle"
          icon={<CampaignsStruggleIcon />}
          progressData={[
            {
              icon: 'MP',
              percent: 100,
              title: 'Muscle Pain',
            },
            {
              icon: 'MP',
              percent: 38,
              title: 'Muscle Pain',
            },
            {
              icon: 'MP',
              percent: 57,
              title: 'Muscle Pain',
            },
          ]}
        />
      </CampaignsPageCharts>
      <CardWithText
        title="Campaigns"
        description="More than 290+ new Campaigns"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEcModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openAcModal}>
            Create Campaign
          </Button>,
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <CampaignsPageFilter>
              <Tabs
                tabs={['Campaign', 'Client', 'Target']}
                value={filterTabs}
                onValue={setFilterTabs}
              />
              {filterTabs === 0 && (
                <Grid columns={4}>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Please Enter"
                    value={filter.search}
                    onValue={(search) => setFilter({ ...filter, search })}
                  />
                  <Input
                    type="min-max"
                    label="Budget"
                    value={filter.budget}
                    onValue={(budget) => setFilter({ ...filter, budget })}
                  />
                  <Input
                    type="date"
                    label="startDate"
                    placeholder="Please Select"
                    value={filter.startDate}
                    onValue={(startDate) => setFilter({ ...filter, startDate })}
                  />
                  <Input
                    type="date"
                    label="endDate"
                    placeholder="Please Select"
                    value={filter.endDate}
                    onValue={(endDate) => setFilter({ ...filter, endDate })}
                  />
                  <Input
                    type="min-max"
                    label="Influencers (Number)"
                    value={filter.influencers}
                    onValue={(influencers) =>
                      setFilter({ ...filter, influencers })
                    }
                  />
                  <Input
                    type="select"
                    label="Influencer Size"
                    placeholder="Please Select"
                    value={filter.influencerSize}
                    onValue={(influencerSize) =>
                      setFilter({ ...filter, influencerSize })
                    }
                  />
                  <Input
                    type="select"
                    label="Social Media Platform"
                    placeholder="Please Select"
                    value={filter.socialMedia}
                    onValue={(socialMedia) =>
                      setFilter({ ...filter, socialMedia })
                    }
                  />
                  <Input
                    type="select"
                    label="Post Type"
                    placeholder="Please Select"
                    value={filter.postType}
                    onValue={(postType) => setFilter({ ...filter, postType })}
                  />
                  <Input
                    type="select"
                    label="Report"
                    placeholder="Please Select"
                    value={filter.report}
                    onValue={(report) => setFilter({ ...filter, report })}
                  />
                  <Input
                    type="select"
                    label="Labels"
                    placeholder="Please Select"
                    value={filter.labels}
                    onValue={(labels) => setFilter({ ...filter, labels })}
                  />
                  <Input
                    type="select"
                    label="Schedule"
                    placeholder="Please Select"
                    value={filter.schedule}
                    onValue={(schedule) => setFilter({ ...filter, schedule })}
                  />
                </Grid>
              )}
              {filterTabs === 1 && (
                <Grid columns={4}>
                  <Input
                    type="select"
                    label="Disease Area"
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
              {filterTabs === 2 && (
                <Grid columns={4}>
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
                    label="Struggles"
                    placeholder="Please Select"
                    value={filter.struggles}
                    onValue={(struggles) => setFilter({ ...filter, struggles })}
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
                    label="Ethnicity"
                    placeholder="Please Select"
                    value={filter.ethnicity}
                    onValue={(ethnicity) => setFilter({ ...filter, ethnicity })}
                  />
                  <Input
                    type="select"
                    label="Interests"
                    placeholder="Please Select"
                    value={filter.interests}
                    onValue={(interests) => setFilter({ ...filter, interests })}
                  />
                  <Input
                    type="min-max"
                    label="Age"
                    value={filter.age}
                    onValue={(age) => setFilter({ ...filter, age })}
                  />
                  <Input
                    type="select"
                    label="Gender"
                    placeholder="Please Select"
                    value={filter.gender}
                    onValue={(gender) => setFilter({ ...filter, gender })}
                  />
                  <Input
                    type="select"
                    label="Language"
                    placeholder="Please Select"
                    value={filter.language}
                    onValue={(language) => setFilter({ ...filter, language })}
                  />
                </Grid>
              )}
              <CampaignsPageFilterActions direction="horizontal">
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
              </CampaignsPageFilterActions>
            </CampaignsPageFilter>
          </Collapse>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['In Preparation', 'Ongoing', 'Finished']}
          />
          <CheckboxTable
            head={DCampaignsAdminHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={10} />
          <Stack direction="horizontal">
            <Button variant="contained" color="primary" onClick={openNcModal}>
              Note Campaign
            </Button>
            <Button variant="contained" color="primary" onClick={openScModal}>
              Schedule Campaign
            </Button>
            <Button variant="contained" color="primary" onClick={openCcModal}>
              Created Campaign
            </Button>
          </Stack>
          <Stack direction="horizontal">
            <Button variant="contained" color="primary" onClick={handleMenuI}>
              Inprogress action
            </Button>
            <Button variant="contained" color="primary" onClick={handleMenuO}>
              Ongoing action
            </Button>
            <Button variant="contained" color="primary" onClick={handleMenuF}>
              Finished action
            </Button>
            <Button variant="contained" color="primary" onClick={handleMenuA}>
              Archived action
            </Button>
            <Button variant="contained" color="primary" onClick={handleMenuIn}>
              Influencer action
            </Button>
          </Stack>
        </Stack>

        {openI && (
          <Menu
            items={[
              {
                icon: <StartIcon />,
                label: 'Start',
                action: () => {},
              },
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
            ref={menuI}
          />
        )}
        {openO && (
          <Menu
            items={[
              {
                icon: <FinishIcon />,
                label: 'Finish',
                action: () => {},
              },
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
            ref={menuO}
          />
        )}
        {openF && (
          <Menu
            items={[
              {
                icon: <ReportIcon />,
                label: 'Report',
                action: () => {},
              },
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
            ref={menuF}
          />
        )}
        {openA && (
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
            ref={menuA}
          />
        )}
        {openIn && (
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
            ref={menuIn}
          />
        )}
      </CardWithText>
      {acModal && <AddCampaignModal onClose={closeAcModal} />}
      {ecModal && <ExportCampaignsModal onClose={closeEcModal} />}
      {scModal && <ScheduleCampaignModal onClose={closeScModal} />}
      {ncModal && <NoteCampaignsModal onClose={closeNcModal} />}
      {ccModal && <CreatedCampaignModal onClose={closeCcModal} />}
    </CampaignsPageMain>
  );
};

export default CampaignsPage;
