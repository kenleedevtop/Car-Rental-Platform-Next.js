import React, { useEffect, useState } from 'react';
import {
  SurveysPageMain,
  SurveysPageCharts,
  SurveysPageFilter,
  SurveysPageFilterActions,
  SurveysPageFilterContainer,
  SurveyLink,
} from 'features/surveys/styles';
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
  ScheduleIcon,
  SlidersHorizontalIcon,
  SurveysSmallIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateSurveyClientFilter } from 'features/surveys/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportSurveysModal,
  CreateSurveysModal,
  InPreparationActions,
  CreatedSurveysModal,
} from 'features/surveys/role/client/elements';
import { useMenu, useModal, usePagination } from 'hooks';
import { useRouter } from 'next/router';
import {
  SurveyAPI,
  DiseaseAreaAPI,
  EnumsApi,
  LocationAPI,
  ProductApi,
} from 'api';

const SurveyPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSurveyClientFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);
  const [createdSurveyModal, openCreatedSurveyModal, closeCreatedSurveyModal] =
    useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSurveyClientFilter());
  };

  const [current, setCurrent] = useState(-1);

  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    if (headItem.reference === 'surveyName') {
      return (
        <SurveyLink
          onClick={() => {
            setCurrent(row.data.id);
            openCreatedSurveyModal();
          }}
        >
          {row.data.name}
        </SurveyLink>
      );
    }
    if (headItem.reference === 'diseaseArea') {
      if (row.data.platformProductOrder.platformProductOrderDiseaseAreas) {
        const diseaseAreas =
          row.data.platformProductOrder.platformProductOrderDiseaseAreas.map(
            (x: any) => x.diseaseArea.name
          );

        return diseaseAreas.join(', ');
      }
    }
    if (headItem.reference === 'participants') {
      return row.data.participantCount;
    }
    if (headItem.reference === 'language') {
      if (row.data.platformProductOrder.platformProductOrderLanguages) {
        const languages =
          row.data.platformProductOrder.platformProductOrderLanguages.map(
            (x: any) => x.name
          );

        return languages.join(', ');
      }
    }
    if (headItem.reference === 'questions') {
      return row.data.questionCount;
    }
    if (headItem.reference === 'actions') {
      return <InPreparationActions data={row.data.id} />;
    }

    return '';
  };

  const router = useRouter();

  const [menuIp, openIp, setOpenIp] = useMenu(false);
  const [menuOn, openOn, setOpenOn] = useMenu(false);
  const [menuF, openF, setOpenF] = useMenu(false);

  const handleMenuIp = () => {
    setOpenIp(!openIp);
  };
  const handleMenuOn = () => {
    setOpenOn(!openOn);
  };
  const handleMenuF = () => {
    setOpenF(!openF);
  };

  const [surveys, setSurveys] = useState<any>([]);

  const [tabs, setTabs] = useState(0);

  const [filterParams, setFilterParams] = useState({});

  const { pagesCount, page, setTotalResults, handlePageChange, reload } =
    usePagination({
      limit: 10,
      page: 1,
      onChange: async (params, setPage) => {
        const { result, meta } = await SurveyAPI.getSurveys({
          limit: params.limit,
          skip: params.skip,
          ...filterParams,
        });
        setSurveys(result);
        setTotalResults(meta.countFiltered);
      },
    });

  /* Filters */
  const [loading, setLoading] = useState(false);
  const [filtersProducts, setFilterProducts] = useState<any>([]);
  const [filterDiseaseAreas, setFilterDiseaseAreas] = useState<any>([]);
  const [filterStruggles, setFilterStruggles] = useState<any>([]);
  const [filterLocations, setFilterLocations] = useState<any>([]);
  const [filterEthnicitys, setFilterEthnicity] = useState<any>([]);
  const [filterInterests, setFilterInterests] = useState<any>([]);
  const [filterGenders, setFilterGenders] = useState<any>([]);
  const [filterLanguages, setFilterLanguages] = useState<any>([]);
  const [filterSymptoms, setFilterSymptoms] = useState<any>([]);

  const getProducts = async (s: string = '') => {
    const { result } = await ProductApi.getProducts(s);

    setFilterProducts(
      result.map((data: any) => ({
        value: data.id,
        label: data.name,
      }))
    );
  };

  const getDiseaseAreas = async (s: string = '') => {
    setLoading(true);
    const { result } = await DiseaseAreaAPI.getAll(s);

    setFilterDiseaseAreas(
      result.map((item: any) => ({
        value: item.id,
        label: item.name,
      }))
    );
    setLoading(false);
  };

  const getLocations = async (s: string = '') => {
    setLoading(true);
    const { result } = await LocationAPI.getAll(s);
    setFilterLocations(
      result.map((data: any) => ({
        value: data.id,
        label: data.country ? `${data.name}, ${data.country.name}` : data.name,
      }))
    );
    setLoading(false);
  };

  const getGenders = async () => {
    const result = await EnumsApi.getGenders();

    setFilterGenders(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getEthnicities = async () => {
    const result = await EnumsApi.getEthnicities();

    setFilterEthnicity(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getStruggles = async () => {
    const result = await EnumsApi.getStruggles();

    setFilterStruggles(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };
  const getInterests = async () => {
    const result = await EnumsApi.getInterests();

    setFilterInterests(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  const getLanguages = async () => {
    const result = await EnumsApi.getLanguages();

    setFilterLanguages(
      result.map((x: any) => ({
        value: x.value,
        label: x.name,
      }))
    );
  };

  const getSymptoms = async () => {
    const { result } = await EnumsApi.getSymptoms();

    setFilterSymptoms(
      result.map((x: any) => ({
        value: x.id,
        label: x.name,
      }))
    );
  };

  useEffect(() => {
    getLanguages();
    getProducts();
    getDiseaseAreas();
    getLocations();
    getGenders();
    getEthnicities();
    getStruggles();
    getInterests();
    getSymptoms();
  }, []);

  const handleNewProductTag = (v: any) => {
    setFilter({ ...filter, product: [...filter.product, v] });
  };

  const debounce = (func: any, wait: any) => {
    let timeout: any;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  return (
    <SurveysPageMain>
      <SurveysPageCharts>
        <CardWithChart
          title="In Preparation"
          icon={<InpreparationIcon />}
          smallIcon={<SurveysSmallIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
        <CardWithChart
          title="Ongoing"
          icon={<OngoingIcon />}
          smallIcon={<SurveysSmallIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
        <CardWithChart
          title="Finished"
          icon={<FinishedIcon />}
          smallIcon={<SurveysSmallIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
        <CardWithChart
          title="Revenue"
          icon={<TotalIcon />}
          smallIcon={<SurveysSmallIcon />}
          percent={0}
          count={0}
          chartData={{
            values: [0, 0, 0],
            labels: ['', '', ''],
          }}
        />
      </SurveysPageCharts>
      <CardWithText
        title="Surveys"
        // description="More than 290+ new Reports"
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
          // <Button color="default" variant="contained" onClick={openEsModal}>
          //   Export
          // </Button>,
          <Button color="primary" variant="contained" onClick={openCsModal}>
            Create Survey
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <SurveysPageFilter>
              <Tabs
                tabs={['Survey', 'Target']}
                value={tabs}
                onValue={setTabs}
              />

              {tabs === 0 && (
                <SurveysPageFilterContainer>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Please Enter"
                    value={filter.search}
                    onValue={(search) => setFilter({ ...filter, search })}
                  />
                  <Input
                    type="multiselect"
                    label="Languages"
                    placeholder="Please Select"
                    value={filter.language}
                    onValue={(language) => setFilter({ ...filter, language })}
                    options={filterLanguages}
                  />
                  <Input
                    type="min-max"
                    label="Budget"
                    value={filter.budget}
                    onValue={(budget) => setFilter({ ...filter, budget })}
                  />
                  <InputGroup
                    label="Start Date"
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
                    label="End Date"
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
                  <Input
                    type="min-max"
                    label="Participants"
                    value={filter.participants}
                    onValue={(participants) =>
                      setFilter({ ...filter, participants })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Questions"
                    value={filter.questions}
                    onValue={(questions) => setFilter({ ...filter, questions })}
                  />
                  <Input
                    type="min-max"
                    label="Question Credits"
                    value={filter.questionCredits}
                    onValue={(questionCredits) =>
                      setFilter({ ...filter, questionCredits })
                    }
                  />
                  <Input
                    type="multiselect"
                    label="Products"
                    placeholder="Please Select"
                    value={filter.product}
                    onValue={(product) => setFilter({ ...filter, product })}
                    options={filtersProducts}
                    onSearch={debounce(getProducts, 250)}
                    onNewTag={handleNewProductTag}
                    loading={loading}
                  />
                </SurveysPageFilterContainer>
              )}
              {tabs === 1 && (
                <SurveysPageFilterContainer>
                  <Input
                    type="multiselect"
                    label="Disease Areas"
                    placeholder="Please Select"
                    value={filter.diseaseArea}
                    onValue={(diseaseArea) =>
                      setFilter({ ...filter, diseaseArea })
                    }
                    options={filterDiseaseAreas}
                    onSearch={debounce(getDiseaseAreas, 250)}
                    loading={loading}
                  />
                  <Input
                    type="multiselect"
                    label="Struggles"
                    placeholder="Please Select"
                    value={filter.struggles}
                    onValue={(struggles) => setFilter({ ...filter, struggles })}
                    options={filterStruggles}
                  />
                  <Input
                    type="multiselect"
                    label="Locations"
                    placeholder="Please Select"
                    value={filter.location}
                    onValue={(location) => setFilter({ ...filter, location })}
                    options={filterLocations}
                    onSearch={debounce(getLocations, 250)}
                    loading={loading}
                  />
                  <Input
                    type="multiselect"
                    label="Ethnicities"
                    placeholder="Please Select"
                    value={filter.ethnicity}
                    onValue={(ethnicity) => setFilter({ ...filter, ethnicity })}
                    options={filterEthnicitys}
                  />
                  <Input
                    type="multiselect"
                    label="Interests"
                    placeholder="Please Select"
                    value={filter.interests}
                    onValue={(interests) => setFilter({ ...filter, interests })}
                    options={filterInterests}
                  />
                  <Input
                    type="min-max"
                    label="Age"
                    value={filter.age}
                    onValue={(age) => setFilter({ ...filter, age })}
                  />
                  <Input
                    type="multiselect"
                    label="Gender"
                    placeholder="Please Select"
                    value={filter.gender}
                    onValue={(gender) => setFilter({ ...filter, gender })}
                    options={filterGenders}
                  />
                  <Input
                    type="multiselect"
                    label="Symptoms"
                    placeholder="Please Select"
                    value={filter.symptoms}
                    onValue={(symptoms) => setFilter({ ...filter, symptoms })}
                    options={filterSymptoms}
                  />
                </SurveysPageFilterContainer>
              )}
              <SurveysPageFilterActions direction="horizontal">
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
              </SurveysPageFilterActions>
            </SurveysPageFilter>
          </Collapse>
          <Tabs
            tabs={['In Preparation', 'Ongoing', 'Finished']}
            value={tabsValue}
            onValue={setTabsValue}
            style={{ marginTop: '-30px' }}
          />
          {tabsValue === 0 && (
            <>
              <CheckboxTable
                head={[
                  {
                    reference: 'surveyName',
                    label: 'Survey Name',
                    visible: true,
                  },
                  {
                    reference: 'budget',
                    label: 'Budget',
                    visible: false,
                  },
                  {
                    reference: 'diseaseArea',
                    label: 'Disease Area',
                    visible: true,
                  },
                  {
                    reference: 'struggles',
                    label: 'Struggles',
                    visible: false,
                  },
                  {
                    reference: 'location',
                    label: 'Location',
                    visible: false,
                  },
                  {
                    reference: 'company',
                    label: 'Company',
                    visible: false,
                  },
                  {
                    reference: 'ethnicity',
                    label: 'Ethnicity',
                    visible: false,
                  },
                  {
                    reference: 'interests',
                    label: 'Interests',
                    visible: false,
                  },
                  {
                    reference: 'product',
                    label: 'Product',
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
                    visible: false,
                  },
                  {
                    reference: 'participants',
                    label: 'Participants',
                    visible: true,
                  },
                  {
                    reference: 'ageMin',
                    label: 'Age Min',
                    visible: false,
                  },
                  {
                    reference: 'ageMax',
                    label: 'Age Max',
                    visible: false,
                  },
                  {
                    reference: 'gender',
                    label: 'Gender',
                    visible: false,
                  },
                  {
                    reference: 'language',
                    label: 'Language',
                    visible: true,
                  },
                  {
                    reference: 'questions',
                    label: 'Questions',
                    visible: true,
                  },
                  {
                    reference: 'questionCredits',
                    label: 'Question Credits',
                    visible: false,
                  },
                  {
                    reference: 'actions',
                    label: '',
                    visible: true,
                  },
                ]}
                items={surveys}
                renderItem={renderItem}
              />
              <Pagination
                onChange={(_e, x) => handlePageChange(x)}
                page={page}
                count={pagesCount}
              />
            </>
          )}
          {tabsValue === 1 && (
            <>
              <CheckboxTable
                head={[
                  {
                    reference: 'surveyName',
                    label: 'Survey Name',
                    visible: true,
                  },
                  {
                    reference: 'budget',
                    label: 'Budget',
                    visible: false,
                  },
                  {
                    reference: 'diseaseArea',
                    label: 'Disease Area',
                    visible: true,
                  },
                  {
                    reference: 'struggles',
                    label: 'Struggles',
                    visible: false,
                  },
                  {
                    reference: 'location',
                    label: 'Location',
                    visible: false,
                  },
                  {
                    reference: 'company',
                    label: 'Company',
                    visible: false,
                  },
                  {
                    reference: 'ethnicity',
                    label: 'Ethnicity',
                    visible: false,
                  },
                  {
                    reference: 'interests',
                    label: 'Interests',
                    visible: false,
                  },
                  {
                    reference: 'product',
                    label: 'Product',
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
                    visible: false,
                  },
                  {
                    reference: 'participants',
                    label: 'Participants',
                    visible: true,
                  },
                  {
                    reference: 'ageMin',
                    label: 'Age Min',
                    visible: false,
                  },
                  {
                    reference: 'ageMax',
                    label: 'Age Max',
                    visible: false,
                  },
                  {
                    reference: 'gender',
                    label: 'Gender',
                    visible: false,
                  },
                  {
                    reference: 'language',
                    label: 'Language',
                    visible: true,
                  },
                  {
                    reference: 'questions',
                    label: 'Questions',
                    visible: true,
                  },
                  {
                    reference: 'questionCredits',
                    label: 'Question Credits',
                    visible: false,
                  },
                  {
                    reference: 'actions',
                    label: '',
                    visible: true,
                  },
                ]}
                items={[]}
                renderItem={() => {}}
              />
              <Pagination count={0} />
            </>
          )}
          {tabsValue === 2 && (
            <>
              <CheckboxTable
                head={[
                  {
                    reference: 'surveyName',
                    label: 'Survey Name',
                    visible: true,
                  },
                  {
                    reference: 'budget',
                    label: 'Budget',
                    visible: false,
                  },
                  {
                    reference: 'diseaseArea',
                    label: 'Disease Area',
                    visible: true,
                  },
                  {
                    reference: 'struggles',
                    label: 'Struggles',
                    visible: false,
                  },
                  {
                    reference: 'location',
                    label: 'Location',
                    visible: false,
                  },
                  {
                    reference: 'company',
                    label: 'Company',
                    visible: false,
                  },
                  {
                    reference: 'ethnicity',
                    label: 'Ethnicity',
                    visible: false,
                  },
                  {
                    reference: 'interests',
                    label: 'Interests',
                    visible: false,
                  },
                  {
                    reference: 'product',
                    label: 'Product',
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
                    visible: false,
                  },
                  {
                    reference: 'participants',
                    label: 'Participants',
                    visible: true,
                  },
                  {
                    reference: 'ageMin',
                    label: 'Age Min',
                    visible: false,
                  },
                  {
                    reference: 'ageMax',
                    label: 'Age Max',
                    visible: false,
                  },
                  {
                    reference: 'gender',
                    label: 'Gender',
                    visible: false,
                  },
                  {
                    reference: 'language',
                    label: 'Language',
                    visible: true,
                  },
                  {
                    reference: 'questions',
                    label: 'Questions',
                    visible: true,
                  },
                  {
                    reference: 'questionCredits',
                    label: 'Question Credits',
                    visible: false,
                  },
                  {
                    reference: 'actions',
                    label: '',
                    visible: true,
                  },
                ]}
                items={[]}
                renderItem={() => {}}
              />
              <Pagination count={0} />
            </>
          )}

          {/* <Stack direction="horizontal">
            <Button color="primary" variant="contained" onClick={handleMenuIp}>
              {' '}
              In Preparation Action
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuOn}>
              {' '}
              On Going Action
            </Button>
            <Button color="primary" variant="contained" onClick={handleMenuF}>
              {' '}
              Finished Action
            </Button>
            <Button color="primary" variant="contained" onClick={openCdModal}>
              {' '}
              Created Survey
            </Button>
          </Stack> */}
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
        {openOn && (
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
                action: () => router.push('/surveys/create'),
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
        {openF && (
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
                action: () => router.push('/surveys/create'),
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
      {esModal && <ExportSurveysModal onClose={closeEsModal} />}
      {csModal && (
        <CreateSurveysModal
          refresh={reload}
          onClose={async () => {
            reload();
            closeCsModal();
          }}
        />
      )}
      {createdSurveyModal && (
        <CreatedSurveysModal
          id={current.toString()}
          onClose={closeCreatedSurveyModal}
        />
      )}
    </SurveysPageMain>
  );
};

export default SurveyPage;
