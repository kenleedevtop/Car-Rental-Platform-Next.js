import React, { useState } from 'react';
import {
  SurveysPageMain,
  SurveysInfluencerPageCharts,
  SurveysPageFilter,
  SurveysPageFilterActions,
} from 'features/surveys/styles';
import { DSurveysHead, DGenerateSurveyFilter } from 'features/surveys/data';
import { CardWithChart, CardWithText, Table, Tabs } from 'components/custom';
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
              <Grid columns={4}>
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
          <Table head={DSurveysHead} items={[]} renderItem={renderItem} />
          <Pagination count={32} />
        </Stack>
      </CardWithText>
      <CardWithText title="Campaings in Progress">
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
