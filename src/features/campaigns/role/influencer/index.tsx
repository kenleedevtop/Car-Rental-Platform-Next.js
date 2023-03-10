import React, { useState } from 'react';
import {
  CampaignsPageMain,
  CampaignsPageCharts,
  CampaignsPageFilter,
  CampaignsPageFilterActions,
} from 'features/campaigns/styles';
import {
  DCampaignsHead,
  DGenerateCampaignsFilter,
} from 'features/campaigns/data';
import { CardWithChart, CardWithText, Table, Tabs } from 'components/custom';
import { GramophoneIcon, SlidersHorizontalIcon } from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';

const CampaignsPage = () => {
  const [filter, setFilter] = useState<any>(DGenerateCampaignsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const [tabs, setTabs] = useState(0);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateCampaignsFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <CampaignsPageMain>
      <CampaignsPageCharts>
        <CardWithChart
          title="Available Campaigns"
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
          title="Campaigns in Progress"
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
          title="Finished Campaigns"
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
      </CampaignsPageCharts>
      <CardWithText
        title="Available Campaigns"
        description="20 new Campaigns"
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
            <CampaignsPageFilter>
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
                  label="Post Type"
                  placeholder="Please Select"
                  value={filter.postType}
                  onValue={(postType) => setFilter({ ...filter, postType })}
                />
                <Input
                  type="min-max"
                  label="Start & Finish"
                  value={filter.startNFinish}
                  onValue={(startNFinish) =>
                    setFilter({ ...filter, startNFinish })
                  }
                />
              </Grid>
              <CampaignsPageFilterActions direction="horizontal">
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
              </CampaignsPageFilterActions>
            </CampaignsPageFilter>
          </Collapse>
          <Table head={DCampaignsHead} items={[]} renderItem={renderItem} />
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
    </CampaignsPageMain>
  );
};

export default CampaignsPage;
