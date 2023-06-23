import React, { useEffect, useState } from 'react';
import {
  InfluencersPageMain,
  InfluencersPageCharts,
  InfluencersPageFilter,
  InfluencersPageFilterActions,
  InfluencersPageActions,
  InfluencersPageButtons,
  InfluencerAction,
} from 'features/influencers/styles';
import {
  CardWithChart,
  CardWithText,
  Menu,
  CheckboxTable,
  Tabs,
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
import { useMenu, useModal, usePagination } from 'hooks';
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
  DiscoverActions,
} from 'features/influencers/role/admin/elements';
import { InfluencerAPI } from 'api';

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

  const [currentInfluencer, setCurrentInfluencer] = useState<any>();

  const getCurrentInfluencer = (value: any) => {
    setCurrentInfluencer(value);
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateInfluencersFilter());
  };

  const renderItem = ({
    headItem,
    cell,
    row,
    table,
  }: TTableRenderItemObject) => {
    if (headItem.reference === 'firstName') {
      return (
        <InfluencerAction
          onClick={() => {
            // getCurrentInfluencer(row.data.user.id);
            // openIpModal();
          }}
        >
          {row.data.firstName}
        </InfluencerAction>
      );
    }

    if (headItem.reference === 'diseaseArea') {
      if (row.data.diseaseAreas) {
        return row.data.diseaseAreas.map((x: any) => x.name);
      }
    }
    if (headItem.reference === 'location') {
      return row.data.location.name;
    }
    if (headItem.reference === 'age') {
      return row.data.age;
    }
    if (headItem.reference === 'gender') {
      if (row.data.gender === 1) {
        return 'Male';
      }
      if (row.data.gender === 2) {
        return 'Female';
      }
      if (row.data.gender === 3) {
        return 'Other';
      }
    }
    if (headItem.reference === 'followers') {
      return row.data.followers;
    }

    if (headItem.reference === 'lastName') {
      return row.data.lastName;
    }
    if (headItem.reference === 'email') {
      return row.data.email;
    }
    if (headItem.reference === 'status') {
      return 'Approved';
    }
    if (headItem.reference === 'registeredAt') {
      return row.data.user.createdAt.slice(0, 10);
    }

    if (headItem.reference === 'invitedBy') {
      return row.data.invitendByUser;
    }

    if (headItem.reference === 'actions') {
      return <DiscoverActions data={row.data} />;
    }

    return '';
  };

  const [influencers, setInfluencers] = useState([]);

  const [filterParams, setFilterParams] = useState({});

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { dataFormatted, pagination } =
          await InfluencerAPI.getInfluencers({
            limit: params.limit,
            skip: params.skip,
            ...filterParams,
          });

        setPage(params.page);

        setInfluencers(dataFormatted);
        setTotalResults(pagination.totalFilteredItems);
      },
    });

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
                <Grid columns={2}>
                  <Input
                    type="select"
                    label="Stakeholders"
                    placeholder="Please Select"
                    value={filter.stakeholder}
                    onValue={(stakeholder) =>
                      setFilter({ ...filter, stakeholder })
                    }
                    options={[
                      {
                        value: 0,
                        label: 'Patients',
                      },
                      {
                        value: 1,
                        label: 'Caregivers',
                      },
                      {
                        value: 2,
                        label: 'Doctors',
                      },
                      {
                        value: 3,
                        label: 'Nurses',
                      },
                    ]}
                  />
                  <InputGroup
                    label="Gender"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
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
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Age"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'number',
                        placeholder: 'Please Enter',
                        value: filter.patientsAgeCount,
                        onValue: (patientsAgeCount) =>
                          setFilter({ ...filter, patientsAgeCount }),
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Ethnicity"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Location"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
                          {
                            value: 0,
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Disease Area"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
                          {
                            value: 0,
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Struggles"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
                          {
                            value: 0,
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Interests"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
                          {
                            value: 0,
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Brands"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
                          {
                            value: 0,
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <InputGroup
                    label="Products"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
                          {
                            value: 0,
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                  <Input
                    type="text"
                    label="Keywords"
                    placeholder="Please Enter"
                    value={filter.patientsKeywords}
                    onValue={(patientsKeywords) =>
                      setFilter({ ...filter, patientsKeywords })
                    }
                  />
                  <InputGroup
                    label="Language"
                    inputRatio="1fr 1fr 1fr"
                    elements={[
                      {
                        type: 'select',
                        placeholder: 'Please Select',
                        value: filter.patientsGender,
                        onValue: (patientsGender) =>
                          setFilter({ ...filter, patientsGender }),
                        options: [
                          {
                            value: 0,
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
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
                            label: 'Number',
                          },
                          {
                            value: 1,
                            label: '%',
                          },
                        ],
                      },
                    ]}
                  />
                </Grid>
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
          <CheckboxTable
            head={DClientsHead}
            items={influencers}
            renderItem={renderItem}
          />
          <Pagination
            onChange={(_e, x) => handlePageChange(x)}
            page={page}
            count={pagesCount}
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
