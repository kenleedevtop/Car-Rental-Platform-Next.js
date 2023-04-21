import React, { useState } from 'react';
import {
  SurveysPageMain,
  SurveysInfluencerPageCharts,
  SurveysPageFilter,
  SurveysPageFilterActions,
  SurveysPageFilterContainer,
} from 'features/surveys/styles';
import { DSurveysHead, DGenerateSurveyFilter } from 'features/surveys/data';
import {
  CardWithChart,
  CardWithText,
  CheckboxTable,
  Tabs,
} from 'components/custom';
import { GramophoneIcon, SlidersHorizontalIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';

const SurveysPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateSurveyFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateSurveyFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <SurveysPageMain>
      <SurveysInfluencerPageCharts>
        <CardWithChart
          title="Available"
          icon={<GramophoneIcon />}
          percent={5}
          count={51245}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Ongoing"
          icon={<GramophoneIcon />}
          percent={5}
          count={51245}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
        <CardWithChart
          title="Finished"
          icon={<GramophoneIcon />}
          percent={5}
          count={51245}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </SurveysInfluencerPageCharts>
      <CardWithText
        title="Available Surveys"
        description="20 new Surveys"
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
        ]}
      >
        <Stack>
          <Collapse removeGap in={filterOpen}>
            <SurveysPageFilter>
              <SurveysPageFilterContainer>
                <Input
                  type="select"
                  label="Company"
                  placeholder="Please Select"
                  value={filter.company}
                  onValue={(company) => setFilter({ ...filter, company })}
                />
                <Input
                  type="select"
                  label="Platform"
                  placeholder="Please Select"
                  value={filter.platform}
                  onValue={(platform) => setFilter({ ...filter, platform })}
                />
                <Input
                  type="select"
                  label="Type"
                  placeholder="Please Select"
                  value={filter.type}
                  onValue={(type) => setFilter({ ...filter, type })}
                />
                <Input
                  type="min-max"
                  label="Amount"
                  value={filter.amount}
                  onValue={(amount) => setFilter({ ...filter, amount })}
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
          <CheckboxTable
            head={DSurveysHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      <CardWithText
        title="Campaings in Progress"
        style={
          window.innerWidth < 600
            ? { padding: '1.25rem 0', boxShadow: 'unset' }
            : { padding: '1.25rem', boxShadow: '0px 2px 5px #00000010' }
        }
      >
        <Stack>
          <Tabs
            value={tabs}
            onValue={setTabs}
            tabs={['Accepted', 'Info Received', 'To Be Posted', 'Approved']}
          />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
    </SurveysPageMain>
  );
};

export default SurveysPage;
