import React, { useState } from 'react';
import {
  SurveysPageMain,
  SurveysPageCharts,
  SurveysPageFilter,
  SurveysPageFilterActions,
  SurveysPageFilterContainer,
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
  ContactedIcon,
  IdentifiedIcon,
  InfoIcon,
  ManageIcon,
  RegisteredIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
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
  CreatedSurveysModal,
} from 'features/surveys/role/client/elements';
import { useMenu, useModal, usePagination } from 'hooks';
import { useRouter } from 'next/router';
import { SurveyAPI } from 'api';

const SurveyPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSurveyClientFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);
  const [cdModal, openCdModal, closeCdModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSurveyClientFilter());
  };

  const renderItem = ({ headItem, row, cell }: TTableRenderItemObject) => {
    console.log(row.data);

    if (headItem.reference === 'surveyName') {
      return row.data.name;
    }
    if (headItem.reference === 'diseaseArea') {
      if (row.data.platformProductOrder.platformProductOrderDiseaseAreas[0]) {
        return row.data.platformProductOrder.platformProductOrderDiseaseAreas[0]
          .diseaseArea.name;
      }
    }
    if (headItem.reference === 'participants') {
      return row.data.participantCount;
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
    if (headItem.reference === 'actions') {
      return '';
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

  return (
    <SurveysPageMain>
      <SurveysPageCharts>
        <CardWithChart
          title="In Preparation"
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
          title="Ongoing"
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
          title="Finished"
          icon={<RegisteredIcon />}
          percent={-6}
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
          icon={<TotalIcon />}
          percent={-6}
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
                    label="Participants (Number)"
                    value={filter.participants}
                    onValue={(participants) =>
                      setFilter({ ...filter, participants })
                    }
                  />
                  <Input
                    type="min-max"
                    label="Questions (Number)"
                    value={filter.questions}
                    onValue={(questions) => setFilter({ ...filter, questions })}
                  />
                  <Input
                    type="min-max"
                    label="Questions Credits"
                    value={filter.questionCredits}
                    onValue={(questionCredits) =>
                      setFilter({ ...filter, questionCredits })
                    }
                  />
                  <Input
                    type="select"
                    label="Product"
                    placeholder="Please Select"
                    value={filter.product}
                    onValue={(product) => setFilter({ ...filter, product })}
                  />
                </SurveysPageFilterContainer>
              )}
              {tabs === 1 && (
                <SurveysPageFilterContainer>
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
                </SurveysPageFilterContainer>
              )}

              <SurveysPageFilterContainer>
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
                  type="text"
                  label="Language"
                  value={filter.language}
                  onValue={(language) => setFilter({ ...filter, language })}
                />
                <Input
                  type="text"
                  label="Date Range"
                  value={filter.dateRange}
                  onValue={(dateRange) => setFilter({ ...filter, dateRange })}
                />
                <Input
                  type="min-max"
                  label="Budget"
                  value={filter.budget}
                  onValue={(budget) => setFilter({ ...filter, budget })}
                />
              </SurveysPageFilterContainer>
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
          />
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
          </Stack>
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
          onClose={async () => {
            reload();
            closeCsModal();
          }}
        />
      )}
      {cdModal && <CreatedSurveysModal onClose={closeCdModal} />}
    </SurveysPageMain>
  );
};

export default SurveyPage;
