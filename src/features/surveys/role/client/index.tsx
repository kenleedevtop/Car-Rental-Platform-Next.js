import React, { useState } from 'react';
import {
  SurveysPageMain,
  SurveysPageCharts,
  SurveysPageFilter,
  SurveysPageFilterActions,
  SurveysPageFilterContainer,
} from 'features/surveys/styles';
import { CardWithChart, CardWithText, Table, Tabs } from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack } from 'components/system';
import { Collapse } from '@mui/material';
import { DGenerateSurveyFilter } from 'features/surveys/data';
import { TTableRenderItemObject } from 'components/custom/table/types';
import {
  ExportSurveysModal,
  CreateSurveysModal,
} from 'features/surveys/role/client/elements';
import { useModal } from 'hooks';

const SurveyPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSurveyFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabsValue, setTabsValue] = useState(0);

  const [esModal, openEsModal, closeEsModal] = useModal(false);
  const [csModal, openCsModal, closeCsModal] = useModal(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSurveyFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

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
            tabs={['In Preparation', 'Ongoing', 'Delivered']}
            value={tabsValue}
            onValue={setTabsValue}
          />
          <Table
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
                reference: 'market',
                label: 'Market',
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
            items={[]}
            renderItem={renderItem}
          />

          <Pagination count={32} />
        </Stack>
      </CardWithText>
      {esModal && <ExportSurveysModal onClose={closeEsModal} />}
      {csModal && <CreateSurveysModal onClose={closeCsModal} />}
    </SurveysPageMain>
  );
};

export default SurveyPage;
