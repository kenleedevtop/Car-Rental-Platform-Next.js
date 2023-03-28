import React, { useState } from 'react';
import {
  InfluencersPageMain,
  InfluencersPageCharts,
  InfluencersPageFilter,
  InfluencersPageFilterActions,
  InfluencersPageActions,
  InfluencersPageButtons,
} from 'features/influencers/styles';
import {
  CardWithChart,
  CardWithText,
  Menu,
  Table,
  Tabs,
  Title,
} from 'components/custom';
import {
  ContactIcon,
  DeleteIcon,
  EditIcon,
  InstagramIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  TiktokIcon,
  TotalIcon,
  TwitterIcon,
  UserIcon,
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
import { useMenu, useModal } from 'hooks';
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
  ConfirmInfluencerModal,
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
  const [cfrmModal, openCfrmModal, closeCfrmModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateInfluencersFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);
  const [audienceTabs, setAudienceTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateInfluencersFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <InfluencersPageMain>
      <InfluencersPageCharts>
        <CardWithChart
          title="Instagram"
          icon={<InstagramIcon />}
          smallIcon={<UserIcon />}
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
          title="Twitter"
          icon={<TwitterIcon />}
          smallIcon={<UserIcon />}
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
          title="Tiktok"
          icon={<TiktokIcon />}
          smallIcon={<UserIcon />}
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
          smallIcon={<UserIcon />}
          percent={2}
          count={75}
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

              {tabs === 0 && (
                <Grid columns={4}>
                  <Input
                    type="select"
                    label="Search"
                    placeholder="Please Select"
                    value={filter.search}
                    onValue={(search) => setFilter({ ...filter, search })}
                  />
                  <Input
                    type="select"
                    label="Social Media"
                    placeholder="Please Select"
                    value={filter.socialMedia}
                    onValue={(socialMedia) =>
                      setFilter({ ...filter, socialMedia })
                    }
                  />
                  <Input
                    type="select"
                    label="Experience As"
                    placeholder="Please Select"
                    value={filter.experienceAs}
                    onValue={(experienceAs) =>
                      setFilter({ ...filter, experienceAs })
                    }
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
                    type="min-max"
                    label="Age"
                    placeholder="Please Select"
                    value={filter.age}
                    onValue={(age) => setFilter({ ...filter, age })}
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
                    label="Location"
                    placeholder="Please Select"
                    value={filter.location}
                    onValue={(location) => setFilter({ ...filter, location })}
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
                    label="Struggles"
                    placeholder="Please Select"
                    value={filter.struggles}
                    onValue={(struggles) => setFilter({ ...filter, struggles })}
                  />
                  <Input
                    type="select"
                    label="Interests"
                    placeholder="Please Select"
                    value={filter.interests}
                    onValue={(interests) => setFilter({ ...filter, interests })}
                  />
                  <Input
                    type="select"
                    label="Brands"
                    placeholder="Please Select"
                    value={filter.brands}
                    onValue={(brands) => setFilter({ ...filter, brands })}
                  />
                  <Input
                    type="select"
                    label="Products"
                    placeholder="Please Select"
                    value={filter.products}
                    onValue={(products) => setFilter({ ...filter, products })}
                  />
                  <Input
                    type="text"
                    label="Keywords"
                    placeholder="Please Enter"
                    value={filter.keywords}
                    onValue={(keywords) => setFilter({ ...filter, keywords })}
                  />
                  <Input
                    type="select"
                    label="Language"
                    placeholder="Choose several state"
                    value={filter.labels}
                    onValue={(labels) => setFilter({ ...filter, labels })}
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
                    type="select"
                    label="Label"
                    value={filter.label}
                    onValue={(label) => setFilter({ ...filter, label })}
                  />
                  <Input
                    type="select"
                    label="Schedule"
                    value={filter.schedule}
                    onValue={(schedule) => setFilter({ ...filter, schedule })}
                  />
                  <InputGroup
                    label="Date"
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
                        onValue: (joinedTo) =>
                          setFilter({ ...filter, joinedTo }),
                      },
                    ]}
                  />
                </Grid>
              )}

              {tabs === 1 && (
                <>
                  <Tabs
                    value={audienceTabs}
                    onValue={setAudienceTabs}
                    tabs={['Patients', 'Caregivers', 'Doctors', 'Nurses']}
                  />
                  {audienceTabs === 0 && (
                    <Grid columns={4}>
                      <InputGroup
                        label="Experience As"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsExperienceAsCount,
                            onValue: (patientsExperienceAsCount) =>
                              setFilter({
                                ...filter,
                                patientsExperienceAsCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsExperienceAs,
                            onValue: (patientsExperienceAs) =>
                              setFilter({ ...filter, patientsExperienceAs }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="HCP"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsHCPCount,
                            onValue: (patientsHCPCount) =>
                              setFilter({ ...filter, patientsHCPCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsHCP,
                            onValue: (patientsHCP) =>
                              setFilter({ ...filter, patientsHCP }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Gender"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsGenderCount,
                            onValue: (patientsGenderCount) =>
                              setFilter({ ...filter, patientsGenderCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsGender,
                            onValue: (patientsGender) =>
                              setFilter({ ...filter, patientsGender }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Age"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsAgeCount,
                            onValue: (patientsAgeCount) =>
                              setFilter({ ...filter, patientsAgeCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsAge,
                            onValue: (patientsAge) =>
                              setFilter({ ...filter, patientsAge }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Ethnicity"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsEthnicityCount,
                            onValue: (patientsEthnicityCount) =>
                              setFilter({ ...filter, patientsEthnicityCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsEthnicity,
                            onValue: (patientsEthnicity) =>
                              setFilter({ ...filter, patientsEthnicity }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Location"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsLocationCount,
                            onValue: (patientsLocationCount) =>
                              setFilter({ ...filter, patientsLocationCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsLocation,
                            onValue: (patientsLocation) =>
                              setFilter({ ...filter, patientsLocation }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Disease Area"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsDiseaseAreaCount,
                            onValue: (patientsDiseaseAreaCount) =>
                              setFilter({
                                ...filter,
                                patientsDiseaseAreaCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsDiseaseArea,
                            onValue: (patientsDiseaseArea) =>
                              setFilter({ ...filter, patientsDiseaseArea }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Struggles"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsStrugglesCount,
                            onValue: (patientsStrugglesCount) =>
                              setFilter({ ...filter, patientsStrugglesCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsStruggles,
                            onValue: (patientsStruggles) =>
                              setFilter({ ...filter, patientsStruggles }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Interests"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsInterestsCount,
                            onValue: (patientsInterestsCount) =>
                              setFilter({ ...filter, patientsInterestsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsInterests,
                            onValue: (patientsInterests) =>
                              setFilter({ ...filter, patientsInterests }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Brands"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsBrandsCount,
                            onValue: (patientsBrandsCount) =>
                              setFilter({ ...filter, patientsBrandsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsBrands,
                            onValue: (patientsBrands) =>
                              setFilter({ ...filter, patientsBrands }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Products"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsProductsCount,
                            onValue: (patientsProductsCount) =>
                              setFilter({ ...filter, patientsProductsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsProducts,
                            onValue: (patientsProducts) =>
                              setFilter({ ...filter, patientsProducts }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <Input
                        type="text"
                        label="Keywords"
                        value={filter.patientsKeywords}
                        onValue={(patientsKeywords) =>
                          setFilter({ ...filter, patientsKeywords })
                        }
                      />
                      <InputGroup
                        label="Language"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.patientsLanguageCount,
                            onValue: (patientsLanguageCount) =>
                              setFilter({ ...filter, patientsLanguageCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.patientsLanguage,
                            onValue: (patientsLanguage) =>
                              setFilter({ ...filter, patientsLanguage }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                    </Grid>
                  )}
                  {audienceTabs === 1 && (
                    <Grid columns={4}>
                      <InputGroup
                        label="Experience As"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversExperienceAsCount,
                            onValue: (caregiversExperienceAsCount) =>
                              setFilter({
                                ...filter,
                                caregiversExperienceAsCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversExperienceAs,
                            onValue: (caregiversExperienceAs) =>
                              setFilter({ ...filter, caregiversExperienceAs }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="HCP"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversHCPCount,
                            onValue: (caregiversHCPCount) =>
                              setFilter({ ...filter, caregiversHCPCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversHCP,
                            onValue: (caregiversHCP) =>
                              setFilter({ ...filter, caregiversHCP }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Gender"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversGenderCount,
                            onValue: (caregiversGenderCount) =>
                              setFilter({ ...filter, caregiversGenderCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversGender,
                            onValue: (caregiversGender) =>
                              setFilter({ ...filter, caregiversGender }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Age"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversAgeCount,
                            onValue: (caregiversAgeCount) =>
                              setFilter({ ...filter, caregiversAgeCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversAge,
                            onValue: (caregiversAge) =>
                              setFilter({ ...filter, caregiversAge }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Ethnicity"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversEthnicityCount,
                            onValue: (caregiversEthnicityCount) =>
                              setFilter({
                                ...filter,
                                caregiversEthnicityCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversEthnicity,
                            onValue: (caregiversEthnicity) =>
                              setFilter({ ...filter, caregiversEthnicity }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Location"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversLocationCount,
                            onValue: (caregiversLocationCount) =>
                              setFilter({ ...filter, caregiversLocationCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversLocation,
                            onValue: (caregiversLocation) =>
                              setFilter({ ...filter, caregiversLocation }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Disease Area"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversDiseaseAreaCount,
                            onValue: (caregiversDiseaseAreaCount) =>
                              setFilter({
                                ...filter,
                                caregiversDiseaseAreaCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversDiseaseArea,
                            onValue: (caregiversDiseaseArea) =>
                              setFilter({ ...filter, caregiversDiseaseArea }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Struggles"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversStrugglesCount,
                            onValue: (caregiversStrugglesCount) =>
                              setFilter({
                                ...filter,
                                caregiversStrugglesCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversStruggles,
                            onValue: (caregiversStruggles) =>
                              setFilter({ ...filter, caregiversStruggles }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Interests"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversInterestsCount,
                            onValue: (caregiversInterestsCount) =>
                              setFilter({
                                ...filter,
                                caregiversInterestsCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversInterests,
                            onValue: (caregiversInterests) =>
                              setFilter({ ...filter, caregiversInterests }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Brands"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversBrandsCount,
                            onValue: (caregiversBrandsCount) =>
                              setFilter({ ...filter, caregiversBrandsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversBrands,
                            onValue: (caregiversBrands) =>
                              setFilter({ ...filter, caregiversBrands }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Products"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversProductsCount,
                            onValue: (caregiversProductsCount) =>
                              setFilter({ ...filter, caregiversProductsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversProducts,
                            onValue: (caregiversProducts) =>
                              setFilter({ ...filter, caregiversProducts }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <Input
                        type="text"
                        label="Keywords"
                        value={filter.caregiversKeywords}
                        onValue={(caregiversKeywords) =>
                          setFilter({ ...filter, caregiversKeywords })
                        }
                      />
                      <InputGroup
                        label="Language"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.caregiversLanguageCount,
                            onValue: (caregiversLanguageCount) =>
                              setFilter({ ...filter, caregiversLanguageCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.caregiversLanguage,
                            onValue: (caregiversLanguage) =>
                              setFilter({ ...filter, caregiversLanguage }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                    </Grid>
                  )}
                  {audienceTabs === 2 && (
                    <Grid columns={4}>
                      <InputGroup
                        label="Experience As"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsExperienceAsCount,
                            onValue: (doctorsExperienceAsCount) =>
                              setFilter({
                                ...filter,
                                doctorsExperienceAsCount,
                              }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsExperienceAs,
                            onValue: (doctorsExperienceAs) =>
                              setFilter({ ...filter, doctorsExperienceAs }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="HCP"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsHCPCount,
                            onValue: (doctorsHCPCount) =>
                              setFilter({ ...filter, doctorsHCPCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsHCP,
                            onValue: (doctorsHCP) =>
                              setFilter({ ...filter, doctorsHCP }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Gender"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsGenderCount,
                            onValue: (doctorsGenderCount) =>
                              setFilter({ ...filter, doctorsGenderCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsGender,
                            onValue: (doctorsGender) =>
                              setFilter({ ...filter, doctorsGender }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Age"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsAgeCount,
                            onValue: (doctorsAgeCount) =>
                              setFilter({ ...filter, doctorsAgeCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsAge,
                            onValue: (doctorsAge) =>
                              setFilter({ ...filter, doctorsAge }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Ethnicity"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsEthnicityCount,
                            onValue: (doctorsEthnicityCount) =>
                              setFilter({ ...filter, doctorsEthnicityCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsEthnicity,
                            onValue: (doctorsEthnicity) =>
                              setFilter({ ...filter, doctorsEthnicity }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Location"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsLocationCount,
                            onValue: (doctorsLocationCount) =>
                              setFilter({ ...filter, doctorsLocationCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsLocation,
                            onValue: (doctorsLocation) =>
                              setFilter({ ...filter, doctorsLocation }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Disease Area"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsDiseaseAreaCount,
                            onValue: (doctorsDiseaseAreaCount) =>
                              setFilter({ ...filter, doctorsDiseaseAreaCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsDiseaseArea,
                            onValue: (doctorsDiseaseArea) =>
                              setFilter({ ...filter, doctorsDiseaseArea }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Struggles"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsStrugglesCount,
                            onValue: (doctorsStrugglesCount) =>
                              setFilter({ ...filter, doctorsStrugglesCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsStruggles,
                            onValue: (doctorsStruggles) =>
                              setFilter({ ...filter, doctorsStruggles }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Interests"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsInterestsCount,
                            onValue: (doctorsInterestsCount) =>
                              setFilter({ ...filter, doctorsInterestsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsInterests,
                            onValue: (doctorsInterests) =>
                              setFilter({ ...filter, doctorsInterests }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Brands"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsBrandsCount,
                            onValue: (doctorsBrandsCount) =>
                              setFilter({ ...filter, doctorsBrandsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsBrands,
                            onValue: (doctorsBrands) =>
                              setFilter({ ...filter, doctorsBrands }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Products"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsProductsCount,
                            onValue: (doctorsProductsCount) =>
                              setFilter({ ...filter, doctorsProductsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsProducts,
                            onValue: (doctorsProducts) =>
                              setFilter({ ...filter, doctorsProducts }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <Input
                        type="text"
                        label="Keywords"
                        value={filter.doctorsKeywords}
                        onValue={(doctorsKeywords) =>
                          setFilter({ ...filter, doctorsKeywords })
                        }
                      />
                      <InputGroup
                        label="Language"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.doctorsLanguageCount,
                            onValue: (doctorsLanguageCount) =>
                              setFilter({ ...filter, doctorsLanguageCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.doctorsLanguage,
                            onValue: (doctorsLanguage) =>
                              setFilter({ ...filter, doctorsLanguage }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                    </Grid>
                  )}
                  {audienceTabs === 3 && (
                    <Grid columns={4}>
                      <InputGroup
                        label="Experience As"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesExperienceAsCount,
                            onValue: (nursesExperienceAsCount) =>
                              setFilter({ ...filter, nursesExperienceAsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesExperienceAs,
                            onValue: (nursesExperienceAs) =>
                              setFilter({ ...filter, nursesExperienceAs }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="HCP"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesHCPCount,
                            onValue: (nursesHCPCount) =>
                              setFilter({ ...filter, nursesHCPCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesHCP,
                            onValue: (nursesHCP) =>
                              setFilter({ ...filter, nursesHCP }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Gender"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesGenderCount,
                            onValue: (nursesGenderCount) =>
                              setFilter({ ...filter, nursesGenderCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesGender,
                            onValue: (nursesGender) =>
                              setFilter({ ...filter, nursesGender }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Age"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesAgeCount,
                            onValue: (nursesAgeCount) =>
                              setFilter({ ...filter, nursesAgeCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesAge,
                            onValue: (nursesAge) =>
                              setFilter({ ...filter, nursesAge }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Ethnicity"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesEthnicityCount,
                            onValue: (nursesEthnicityCount) =>
                              setFilter({ ...filter, nursesEthnicityCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesEthnicity,
                            onValue: (nursesEthnicity) =>
                              setFilter({ ...filter, nursesEthnicity }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Location"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesLocationCount,
                            onValue: (nursesLocationCount) =>
                              setFilter({ ...filter, nursesLocationCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesLocation,
                            onValue: (nursesLocation) =>
                              setFilter({ ...filter, nursesLocation }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Disease Area"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesDiseaseAreaCount,
                            onValue: (nursesDiseaseAreaCount) =>
                              setFilter({ ...filter, nursesDiseaseAreaCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesDiseaseArea,
                            onValue: (nursesDiseaseArea) =>
                              setFilter({ ...filter, nursesDiseaseArea }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Strugless"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesStrugglesCount,
                            onValue: (nursesStrugglesCount) =>
                              setFilter({ ...filter, nursesStrugglesCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesStruggles,
                            onValue: (nursesStruggles) =>
                              setFilter({ ...filter, nursesStruggles }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Interests"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesInterestsCount,
                            onValue: (nursesInterestsCount) =>
                              setFilter({ ...filter, nursesInterestsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesInterests,
                            onValue: (nursesInterests) =>
                              setFilter({ ...filter, nursesInterests }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Brands"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesBrandsCount,
                            onValue: (nursesBrandsCount) =>
                              setFilter({ ...filter, nursesBrandsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesBrands,
                            onValue: (nursesBrands) =>
                              setFilter({ ...filter, nursesBrands }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <InputGroup
                        label="Products"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesProductsCount,
                            onValue: (nursesProductsCount) =>
                              setFilter({ ...filter, nursesProductsCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesProducts,
                            onValue: (nursesProducts) =>
                              setFilter({ ...filter, nursesProducts }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                      <Input
                        type="text"
                        label="Keywords"
                        value={filter.nursesKeywords}
                        onValue={(nursesKeywords) =>
                          setFilter({ ...filter, nursesKeywords })
                        }
                      />
                      <InputGroup
                        label="Language"
                        inputRatio="1fr 1fr"
                        elements={[
                          {
                            type: 'number',
                            placeholder: 'Please Enter',
                            value: filter.nursesLanguageCount,
                            onValue: (nursesLanguageCount) =>
                              setFilter({ ...filter, nursesLanguageCount }),
                          },
                          {
                            type: 'select',
                            placeholder: 'Please Select',
                            value: filter.nursesLanguage,
                            onValue: (nursesLanguage) =>
                              setFilter({ ...filter, nursesLanguage }),
                            options: [
                              {
                                value: 0,
                                label: 'Absolute',
                              },
                              {
                                value: 1,
                                label: 'Percentage',
                              },
                            ],
                          },
                        ]}
                      />
                    </Grid>
                  )}
                </>
              )}

              {tabs === 2 && (
                <Grid columns={4}>
                  <Input
                    type="select"
                    label="Post Type"
                    placeholder="Please Select"
                    value={filter.postType}
                    onValue={(postType) => setFilter({ ...filter, postType })}
                    options={[
                      {
                        value: 0,
                        label: 'Post',
                      },
                      {
                        value: 1,
                        label: 'Reel',
                      },
                      {
                        value: 2,
                        label: 'Story',
                      },
                    ]}
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
                  <Input
                    type="min-max"
                    label="Cost Per Question Credit"
                    value={filter.costPerQuestionCredit}
                    onValue={(costPerQuestionCredit) =>
                      setFilter({ ...filter, costPerQuestionCredit })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Reach Multiplier"
                    value={filter.reachMultiplier}
                    onValue={(reachMultiplier) =>
                      setFilter({ ...filter, reachMultiplier })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Cost Per Like"
                    value={filter.costPerLike}
                    onValue={(costPerLike) =>
                      setFilter({ ...filter, costPerLike })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Cost Per Comment"
                    value={filter.costPerComment}
                    onValue={(costPerComment) =>
                      setFilter({ ...filter, costPerComment })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Cost Per Engagement"
                    value={filter.costPerEngagement}
                    onValue={(costPerEngagement) =>
                      setFilter({ ...filter, costPerEngagement })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Cost Per Engaged Target"
                    value={filter.costPerEngagedTarget}
                    onValue={(costPerEngagedTarget) =>
                      setFilter({ ...filter, costPerEngagedTarget })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Total Earnings"
                    value={filter.totalEarnings}
                    onValue={(totalEarnings) =>
                      setFilter({ ...filter, totalEarnings })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Earnings Last 30 Days"
                    value={filter.earningsLast30Days}
                    onValue={(earningsLast30Days) =>
                      setFilter({ ...filter, earningsLast30Days })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Total Projects"
                    value={filter.totalProjects}
                    onValue={(totalProjects) =>
                      setFilter({ ...filter, totalProjects })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Projects Last 30 Days"
                    value={filter.projectsLast30Days}
                    onValue={(projectsLast30Days) =>
                      setFilter({ ...filter, projectsLast30Days })
                    }
                  />
                </Grid>
              )}

              {tabs === 3 && (
                <Grid columns={4}>
                  <Input
                    type="number"
                    label="Influencers needed"
                    value={filter.influencersNeeded}
                    placeholder="Please Enter"
                    onValue={(influencersNeeded) =>
                      setFilter({ ...filter, influencersNeeded })
                    }
                  />
                  <Input
                    type="number"
                    label="Audience overlap"
                    placeholder="Please Enter"
                    value={filter.audienceOverlap}
                    endAdornment="%"
                    max={100}
                    min={0}
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
          <InfluencersPageActions>
            <Title title="Influencers" />
            <InfluencersPageButtons>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={openDonateiModal}
              >
                Donate
              </Button>
            </InfluencersPageButtons>
          </InfluencersPageActions>
          <Table head={DClientsHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
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
            <Button color="primary" variant="contained" onClick={handleMenu}>
              Actions
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
      {aiModal && <AddToInfluencerModal onClose={closeAiModal} />}
      {donateiModal && <DonateInfluencerModal onClose={closeDonateiModal} />}
      {eModal && <ExportInfluencersModal onClose={closeEModal} />}
      {diModal && <DeleteInfluencerModal onClose={closeDiModal} />}
      {ciModal && <ContactInfluencerModal onClose={closeCiModal} />}
      {siModal && <ScheduleInfluencerModal onClose={closeSiModal} />}
      {nsModal && <NotificationsSettingsModal onClose={closeNsModal} />}
      {ipModal && <InfluencerProfile onClose={closeIpModal} />}
      {niModal && <NoteInfluencer onClose={closeNiModal} />}
      {cfrmModal && <ConfirmInfluencerModal onClose={closeCfrmModal} />}
    </InfluencersPageMain>
  );
};

export default InfluencersPage;
