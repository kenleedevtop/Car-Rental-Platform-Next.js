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
  Table,
  Tabs,
} from 'components/custom';
import {
  ContactedIcon,
  ContactIcon,
  DeleteIcon,
  EditIcon,
  IdentifiedIcon,
  InfoIcon,
  ManageIcon,
  RegisteredIcon,
  ScheduleIcon,
  SlidersHorizontalIcon,
  StartIcon,
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
} from 'features/surveys/role/admin/elements';
import { useMenu, useModal } from 'hooks';

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

  const [menu, open, setOpen] = useMenu(false);

  const handleMenu = () => {
    setOpen(!open);
  };

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
              <Grid columns={4}>
                <Input
                  type="select"
                  label="Company"
                  placeholder="Select Company"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
                />
                <Input
                  type="select"
                  label="Client"
                  placeholder="Select Client"
                  value={filter.client}
                  onValue={(client) => setFilter({ ...filter, client })}
                />
                <Input
                  type="select"
                  label="Location"
                  placeholder="Select Type"
                  value={filter.location}
                  onValue={(location) => setFilter({ ...filter, location })}
                />
                <Input
                  type="select"
                  label="Disease Area"
                  placeholder="Select Language"
                  value={filter.diseaseArea}
                  onValue={(diseaseArea) =>
                    setFilter({ ...filter, diseaseArea })
                  }
                />
                <Input
                  type="text"
                  label="Industry"
                  placeholder="Select Disease Area"
                  value={filter.industry}
                  onValue={(industry) => setFilter({ ...filter, industry })}
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
                  label="Budget"
                  value={filter.budget}
                  onValue={(budget) => setFilter({ ...filter, budget })}
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
                  type="multiselect"
                  label="Lable"
                  value={filter.lable}
                  onValue={(lable) => setFilter({ ...filter, lable })}
                />
              </Grid>
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
            items={[]}
            renderItem={renderItem}
          />

          <Pagination count={32} />
          <Button variant="contained" onClick={handleMenu}>
            Survey actions
          </Button>
        </Stack>
        {open && (
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
            ref={menu}
          />
        )}
      </CardWithText>
      {esModal && <ExportSurveysModal onClose={closeEsModal} />}
      {csModal && <CreateSurveysModal onClose={closeCsModal} />}
    </SurveysPageMain>
  );
};

export default SurveyPage;
