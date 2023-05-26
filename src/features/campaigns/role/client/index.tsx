import React, { useState } from 'react';
import {
  CampaignsPageMain,
  CampaignsPageFilterContainer,
  CampaignsPageFilter,
  CampaignsPageFilterActions,
} from 'features/campaigns/styles';
import {
  DCampaignsClientHead,
  DGenerateCampaignsClientFilter,
} from 'features/campaigns/data';
import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  Menu,
  Tabs,
} from 'components/custom';
import {
  ContactIcon,
  FinishedIcon,
  InfoIcon,
  InpreparationIcon,
  ManageIcon,
  OngoingIcon,
  ReportIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useMenu, useModal } from 'hooks';
import {
  AddCampaignModal,
  ExportCampaignsModal,
  CreatedCampaignModal,
} from 'features/campaigns/role/client/elements';
import { useRouter } from 'next/router';

const CampaignsPage = () => {
  const [acModal, openAcModal, closeAcModal] = useModal(false);
  const [ecModal, openEcModal, closeEcModal] = useModal(false);
  const [ccModal, openCcModal, closeCcModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateCampaignsClientFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const [filterTabs, setFilterTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateCampaignsClientFilter());
  };

  const [menuIp, openIp, setOpenIp] = useMenu(false);
  const [menuF, openF, setOpenF] = useMenu(false);

  const handleMenuIp = () => {
    setOpenIp(!openIp);
  };
  const handleMenuF = () => {
    setOpenF(!openF);
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const router = useRouter();

  return (
    <CampaignsPageMain>
      <CampaignsPageFilterContainer>
        <CardWithChart
          title="In Preparation"
          icon={<InpreparationIcon />}
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
          title="Ongoing"
          icon={<OngoingIcon />}
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
          title="Influencers"
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
      </CampaignsPageFilterContainer>

      {/* <CampaignsPageFilterContainer>
        <CardWithProgress
          title="Influencers"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
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
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
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
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
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
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <TwitterIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
      </CampaignsPageFilterContainer> */}
      <CardWithText
        title="Campaigns"
        description="20 new Affiliates"
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
                tabs={['Campaign', 'Target']}
                value={filterTabs}
                onValue={setFilterTabs}
              />
              {filterTabs === 0 && (
                <CampaignsPageFilterContainer>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Please Enter"
                    value={filter.company}
                    onValue={(company) => setFilter({ ...filter, company })}
                  />
                  <Input
                    type="select"
                    label="Product"
                    placeholder="Please Select"
                    value={filter.product}
                    onValue={(product) => setFilter({ ...filter, product })}
                  />
                  <Input
                    type="min-max"
                    label="Budget"
                    placeholder="Please Select"
                    value={filter.budget}
                    onValue={(budget) => setFilter({ ...filter, budget })}
                  />
                  <InputGroup
                    label="Date Joined"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.startDateStart,
                        onValue: (startDateStart) =>
                          setFilter({ ...filter, startDateStart }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.startDateEnd,
                        onValue: (startDateEnd) =>
                          setFilter({ ...filter, startDateEnd }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Date Joined"
                    inputRatio="1fr 1fr"
                    elements={[
                      {
                        value: filter.endDateStart,
                        onValue: (endDateStart) =>
                          setFilter({ ...filter, endDateStart }),
                        type: 'date',
                        placeholder: 'From',
                      },
                      {
                        value: filter.endDateEnd,
                        onValue: (endDateEnd) =>
                          setFilter({ ...filter, endDateEnd }),
                        type: 'date',
                        placeholder: 'To',
                      },
                    ]}
                  />
                  <Input
                    type="min-max"
                    label="Number of Influencers"
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
                    value={filter.socialMediaPlatform}
                    onValue={(socialMediaPlatform) =>
                      setFilter({ ...filter, socialMediaPlatform })
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
                </CampaignsPageFilterContainer>
              )}
              {filterTabs === 1 && (
                <CampaignsPageFilterContainer>
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
                    placeholder="Please Select"
                    value={filter.age}
                    onValue={(age) => setFilter({ ...filter, age })}
                  />

                  <Input
                    type="select"
                    label="Gender"
                    placeholder="Please Select"
                    value={filter.gender}
                    onValue={(gender) => setFilter({ ...filter, gender })}
                    options={[
                      {
                        value: 0,
                        label: 'Male',
                      },
                      {
                        value: 1,
                        label: 'Female',
                      },
                      {
                        value: 2,
                        label: 'Other',
                      },
                    ]}
                  />
                  <Input
                    type="select"
                    label="Language"
                    placeholder="Please Select"
                    value={filter.language}
                    onValue={(language) => setFilter({ ...filter, language })}
                  />
                </CampaignsPageFilterContainer>
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
            tabs={['In Preparation', 'Ongoing', 'Finished', 'Report Received']}
          />
          <CheckboxTable
            head={DCampaignsClientHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Stack>
        <Stack direction="horizontal">
          <Button color="primary" variant="contained" onClick={openCcModal}>
            {' '}
            Created Campaign
          </Button>
          <Button color="primary" variant="contained" onClick={handleMenuIp}>
            {' '}
            In Preparation Action
          </Button>
          <Button color="primary" variant="contained" onClick={handleMenuF}>
            {' '}
            Finished Action
          </Button>
        </Stack>
        {openIp && (
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
                action: () => router.push('/campaigns/manage'),
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
            ref={menuIp}
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
                action: () => router.push('/campaigns/manage'),
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
            ref={menuF}
          />
        )}
      </CardWithText>
      {acModal && <AddCampaignModal onClose={closeAcModal} />}
      {ecModal && <ExportCampaignsModal onClose={closeEcModal} />}
      {ccModal && <CreatedCampaignModal onClose={closeCcModal} />}
    </CampaignsPageMain>
  );
};

export default CampaignsPage;
