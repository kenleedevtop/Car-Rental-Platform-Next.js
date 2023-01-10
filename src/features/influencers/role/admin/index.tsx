import React, { useState } from 'react';
import {
  InfluencersPageMain,
  InfluencersPageCharts,
  InfluencersPageFilter,
  InfluencersPageFilterActions,
} from 'features/influencers/styles';
import {
  CardWithChart,
  CardWithText,
  Table,
  Tabs,
  Title,
} from 'components/custom';
import {
  InstagramIcon,
  SlidersHorizontalIcon,
  TiktokIcon,
  TwitterIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import {
  DClientsHead,
  DGenerateInfluencersFilter,
} from 'features/influencers/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useModal } from 'hooks';
import {
  AddToInfluencerModal,
  DonateInfluencerModal,
  ContactInfluencerModal,
  DeleteInfluencerModal,
  ExportInfluencersModal,
  InfluencerProfile,
  NoteInfluencer,
  NotificationsSettingsModal,
  ScheduleInfluencerModal,
} from 'features/influencers/role/admin/elements';

const InfluencersPage = () => {
  // Modals
  const [aiModal, openAiModal, closeAiModal] = useModal(false);
  const [donateiModal, openDonateiModal, closeDonateiModal] = useModal(false);
  const [eModal, openEModal, closeEModal] = useModal(false);
  const [diModal, openDiModal, closeDiModal] = useModal(false);
  const [ciModal, openCiModal, closeCiModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);
  const [nsModal, openNsModal, closeNsModal] = useModal(false);
  const [ipModal, openIpModal, closeIpModal] = useModal(false);
  const [niModal, openNiModal, closeNiModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateInfluencersFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateInfluencersFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <InfluencersPageMain>
      <InfluencersPageCharts>
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
      </InfluencersPageCharts>
      <CardWithText
        title="Influencers"
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
            Add To
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <InfluencersPageFilter>
              <Tabs
                value={tabs}
                onValue={setTabs}
                tabs={['Influencers', 'Audience', 'Performance', 'Campaign']}
              />

              {/* //Tab 0 */}
              {tabs === 0 && (
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
                    label="Age"
                    value={filter.age}
                    onValue={(age) => setFilter({ ...filter, age })}
                  />
                  <Input
                    type="min-max"
                    label="Followers"
                    value={filter.followers}
                    onValue={(followers) => setFilter({ ...filter, followers })}
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
                    label="Average Likes"
                    value={filter.averageLikes}
                    onValue={(averageLikes) =>
                      setFilter({ ...filter, averageLikes })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Average Comments"
                    value={filter.averageComments}
                    onValue={(averageComments) =>
                      setFilter({ ...filter, averageComments })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Reach Multipler"
                    value={filter.reachMultipler}
                    onValue={(reachMultipler) =>
                      setFilter({ ...filter, reachMultipler })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Real Followers"
                    value={filter.realFollowers}
                    onValue={(realFollowers) =>
                      setFilter({ ...filter, realFollowers })
                    }
                  />
                  <Input
                    type="select"
                    label="Interests"
                    placeholder="Please Select"
                    value={filter.interests}
                    onValue={(interests) => setFilter({ ...filter, interests })}
                  />
                  <Input
                    type="multiselect"
                    label="Mentions"
                    placeholder="Choose several state"
                    value={filter.mentions}
                    onValue={(mentions) => setFilter({ ...filter, mentions })}
                  />
                  <Input
                    type="multiselect"
                    label="Hashtags"
                    placeholder="Choose several state"
                    value={filter.hashtags}
                    onValue={(hashtags) => setFilter({ ...filter, hashtags })}
                  />
                  <Input
                    type="multiselect"
                    label="Brands"
                    placeholder="Choose several state"
                    value={filter.brands}
                    onValue={(brands) => setFilter({ ...filter, brands })}
                  />
                  <Input
                    type="min-max"
                    label="Campaigns"
                    value={filter.campaigns}
                    onValue={(campaigns) => setFilter({ ...filter, campaigns })}
                  />
                  <Input
                    type="min-max"
                    label="Total Campaigns"
                    value={filter.totalCampaigns}
                    onValue={(totalCampaigns) =>
                      setFilter({ ...filter, totalCampaigns })
                    }
                  />
                </Grid>
              )}

              {/* //Tab 1 */}
              {tabs === 1 && (
                <Grid columns={4}>
                  <Input
                    type="min-max"
                    label="Age"
                    value={filter.audienceAge}
                    onValue={(audienceAge) =>
                      setFilter({ ...filter, audienceAge })
                    }
                  />
                  <InputGroup
                    label="Gender"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.gender,
                        onValue: (gender) => setFilter({ ...filter, gender }),
                        type: 'select',
                      },
                      {
                        value: filter.genderPercent,
                        onValue: (genderPercent) =>
                          setFilter({ ...filter, genderPercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Country"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.country,
                        onValue: (country) => setFilter({ ...filter, country }),
                        type: 'select',
                      },
                      {
                        value: filter.countryPercent,
                        onValue: (countryPercent) =>
                          setFilter({ ...filter, countryPercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                  <InputGroup
                    label="City"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.city,
                        onValue: (city) => setFilter({ ...filter, city }),
                        type: 'select',
                      },
                      {
                        value: filter.cityPercent,
                        onValue: (cityPercent) =>
                          setFilter({ ...filter, cityPercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Language"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.language,
                        onValue: (language) =>
                          setFilter({ ...filter, language }),
                        type: 'select',
                      },
                      {
                        value: filter.languagePercent,
                        onValue: (languagePercent) =>
                          setFilter({ ...filter, languagePercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Ethnicity"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.ethnicity,
                        onValue: (ethnicity) =>
                          setFilter({ ...filter, ethnicity }),
                        type: 'select',
                      },
                      {
                        value: filter.ethnicityPercent,
                        onValue: (ethnicityPercent) =>
                          setFilter({ ...filter, ethnicityPercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Patients"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.patients,
                        onValue: (patients) =>
                          setFilter({ ...filter, patients }),
                        type: 'select',
                      },
                      {
                        value: filter.patientsPercent,
                        onValue: (patientsPercent) =>
                          setFilter({ ...filter, patientsPercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Brand Affinity"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.brandAffinity,
                        onValue: (brandAffinity) =>
                          setFilter({ ...filter, brandAffinity }),
                        type: 'select',
                      },
                      {
                        value: filter.brandAffinityPercent,
                        onValue: (brandAffinityPercent) =>
                          setFilter({ ...filter, brandAffinityPercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Symptoms"
                    inputRatio="1fr 100px"
                    elements={[
                      {
                        value: filter.symptoms,
                        onValue: (symptoms) =>
                          setFilter({ ...filter, symptoms }),
                        type: 'select',
                      },
                      {
                        value: filter.symptomsPercent,
                        onValue: (symptomsPercent) =>
                          setFilter({ ...filter, symptomsPercent }),
                        type: 'number',
                        endAdornment: '%',
                      },
                    ]}
                  />
                </Grid>
              )}

              {/* //Tab 2 */}
              {tabs === 2 && (
                <Grid columns={4}>
                  <Input
                    type="min-max"
                    label="Cost per click"
                    value={filter.costPerClick}
                    onValue={(costPerClick) =>
                      setFilter({ ...filter, costPerClick })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Cost per target"
                    value={filter.costPerTarget}
                    onValue={(costPerTarget) =>
                      setFilter({ ...filter, costPerTarget })
                    }
                  />
                  <Input
                    type="select"
                    label="Post type"
                    placeholder="Please Select"
                    value={filter.postType}
                    onValue={(postType) => setFilter({ ...filter, postType })}
                  />
                </Grid>
              )}

              {/* Tab 3 */}
              {tabs === 3 && (
                <Grid columns={4}>
                  <Input
                    type="min-max"
                    label="Influencers needed"
                    value={filter.influencersNeeded}
                    onValue={(influencersNeeded) =>
                      setFilter({ ...filter, influencersNeeded })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Audience overlap"
                    value={filter.audienceOverlap}
                    onValue={(audienceOverlap) =>
                      setFilter({ ...filter, audienceOverlap })
                    }
                  />
                  <Input
                    type="select"
                    label="Prioritize by"
                    placeholder="Please Select"
                    value={filter.priority}
                    onValue={(priority) => setFilter({ ...filter, priority })}
                  />
                </Grid>
              )}

              <InfluencersPageFilterActions direction="horizontal">
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
              </InfluencersPageFilterActions>
            </InfluencersPageFilter>
          </Collapse>
          <Title title="Influencers" />
          <Table head={DClientsHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
          <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={openDiModal}>
              Delete Influencer
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={openDonateiModal}
            >
              Donate Influencer
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
          </Stack>
        </Stack>
      </CardWithText>
      {aiModal && <AddToInfluencerModal onClose={closeAiModal} />}
      {donateiModal && <DonateInfluencerModal onClose={closeDonateiModal} />}
      {eModal && <ExportInfluencersModal onClose={closeEModal} />}
      {diModal && <DeleteInfluencerModal onClose={closeDiModal} />}
      {ciModal && <ContactInfluencerModal onClose={closeCiModal} />}
      {siModal && <ScheduleInfluencerModal onClose={closeSiModal} />}
      {nsModal && <NotificationsSettingsModal onClose={closeNsModal} />}
      {ipModal && <InfluencerProfile onClose={closeIpModal} />}
      {niModal && <NoteInfluencer onClose={closeNiModal} />}{' '}
    </InfluencersPageMain>
  );
};

export default InfluencersPage;
