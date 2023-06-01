import React, { useState } from 'react';
import {
  SurveysPageMain,
  SurveysPageCharts,
  SurveysPageFilter,
  SurveysPageFilterActions,
} from 'features/surveys/styles';
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
  FinishedIcon,
  FinishIcon,
  InfoIcon,
  InpreparationIcon,
  ManageIcon,
  OngoingIcon,
  RevenueIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  StartIcon,
  SurveysSmallIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, InputGroup, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateSurveyFilter } from 'features/surveys/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportSurveysModal,
  CreateSurveysModal,
  SurveyInfoModal,
} from 'features/surveys/role/admin/elements';
import { useMenu, useModal, usePagination } from 'hooks';
import { useRouter } from 'next/router';
import { SurveyAPI } from 'api';

const SurveyPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSurveyFilter());

  const router = useRouter();

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [tabs, setTabs] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);
  const [siModal, openSiModal, closeSiModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSurveyFilter());
  };

  const renderItem = ({ headItem, row }: TTableRenderItemObject) => {
    console.log(row.data);

    if (headItem.reference === 'survey') {
      return row.data.name;
    }

    if (headItem.reference === 'diseaseArea') {
      if (row.data.platformProductOrder.platformProductOrderDiseaseAreas[0]) {
        return row.data.platformProductOrder.platformProductOrderDiseaseAreas[0]
          .diseaseArea.name;
      }
    }

    if (headItem.reference === 'date') {
      return `${row.data.dateStart.slice(0, 10)} - ${row.data.dateEnd.slice(
        0,
        10
      )}`;
    }

    if (headItem.reference === 'participants') {
      return row.data.participantCount;
    }

    if (headItem.reference === 'questions') {
      return '';
    }

    if (headItem.reference === 'budget') {
      return `${row.data.platformProductOrder.budget} CHF`;
    }

    if (headItem.reference === 'language') {
      switch (row.data.language) {
        case 1:
          return 'English';
        case 2:
          return 'French';
        case 3:
          return 'German';
        case 4:
          return 'Spanish';
        case 5:
          return 'Italian';
        default:
          return '';
      }
    }
    if (headItem.reference === 'questions') {
      return row.data.questionCount;
    }

    return '';
  };

  const [menuIP, openIP, setOpenIP] = useMenu(false);

  const handleMenuIP = () => {
    setOpenIP(!openIP);
  };

  const [menuO, openO, setOpenO] = useMenu(false);

  const handleMenuO = () => {
    setOpenO(!openO);
  };

  const [menuF, openF, setOpenF] = useMenu(false);

  const handleMenuF = () => {
    setOpenF(!openF);
  };

  const [surveys, setSurveys] = useState<any>([]);

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

  return (
    <SurveysPageMain>
      <SurveysPageCharts>
        <CardWithChart
          title="In Preparation"
          icon={<InpreparationIcon />}
          smallIcon={<SurveysSmallIcon />}
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
          smallIcon={<SurveysSmallIcon />}
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
          smallIcon={<SurveysSmallIcon />}
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
          smallIcon={<SurveysSmallIcon />}
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </SurveysPageCharts>
      <CardWithText
        title="Surveys"
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
            Create Survey
          </Button>,
        ]}
      >
        <Stack>
          <Collapse in={filterOpen}>
            <SurveysPageFilter>
              <Tabs
                tabs={['Survey', 'Client', 'Target']}
                value={tabs}
                onValue={setTabs}
              />
              {tabs === 0 && (
                <Grid columns={4}>
                  <Input
                    type="text"
                    label="Search"
                    placeholder="Please Enter"
                    value={filter.search}
                    onValue={(search) => setFilter({ ...filter, search })}
                  />
                  <Input
                    type="select"
                    label="Language"
                    placeholder="Please Select"
                    value={filter.language}
                    onValue={(language) => setFilter({ ...filter, language })}
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
                    label="Question Credit"
                    value={filter.questionCredits}
                    onValue={(questionCredits) =>
                      setFilter({ ...filter, questionCredits })
                    }
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
              {tabs === 1 && (
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
              {tabs === 2 && (
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
                </Grid>
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
            tabs={['In Preparation', 'Ongoing', 'Finished', 'Delivered']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <CheckboxTable
            head={[
              {
                reference: 'survey',
                label: 'Survey',
                visible: true,
              },
              {
                reference: 'diseaseArea',
                label: 'Disease Area',
                visible: true,
              },
              {
                reference: 'language',
                label: 'Language',
                visible: true,
              },
              {
                reference: 'date',
                label: 'Date',
                visible: true,
              },
              {
                reference: 'participants',
                label: 'Participants',
                visible: true,
              },
              {
                reference: 'questions',
                label: 'Questions',
                visible: true,
              },
              {
                reference: 'budget',
                label: 'Budget',
                visible: true,
              },
              {
                reference: 'actions',
                label: 'Actions',
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
          <Stack direction="horizontal">
            <Button variant="contained" onClick={handleMenuIP}>
              In preparation
            </Button>
            <Button variant="contained" onClick={handleMenuO}>
              Ongoing
            </Button>
            <Button variant="contained" onClick={handleMenuF}>
              Finished
            </Button>
            <Button variant="contained" onClick={openSiModal}>
              Survey Info
            </Button>
          </Stack>
        </Stack>
        {openIP && (
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
                action: () => router.push('/services/surveys/manage'),
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
            ref={menuIP}
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
                action: () => router.push('/services/surveys/manage'),
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
                icon: <InfoIcon />,
                label: 'Info',
                action: () => {},
              },
              {
                icon: <ManageIcon />,
                label: 'Manage',
                action: () => router.push('/services/surveys/manage'),
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
      </CardWithText>
      {esModal && <ExportSurveysModal onClose={closeEsModal} />}
      {csModal && <CreateSurveysModal onClose={closeCsModal} />}
      {siModal && <SurveyInfoModal onClose={closeSiModal} />}
    </SurveysPageMain>
  );
};

export default SurveyPage;
