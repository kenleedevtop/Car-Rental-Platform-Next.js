import React, { useState } from 'react';
import {
  CampaignsPageMain,
  CampaignsInfluencerPageCharts,
} from 'features/campaigns/styles';
import {
  DCampaignsInfluencerHead,
  DCampaignsInfluencerHead2,
  DGenerateCampaignsFilter,
} from 'features/campaigns/data';
import { CardWithChart, CardWithText, CheckboxTable } from 'components/custom';
import {
  CampaignsSmallIcon,
  FinishedIcon,
  InpreparationIcon,
  OngoingIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Pagination } from 'components/ui';
import { Stack } from 'components/system';
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
      <CampaignsInfluencerPageCharts>
        <CardWithChart
          title="Available"
          icon={<InpreparationIcon />}
          smallIcon={<CampaignsSmallIcon />}
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
          icon={<OngoingIcon />}
          smallIcon={<CampaignsSmallIcon />}
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
          icon={<FinishedIcon />}
          smallIcon={<CampaignsSmallIcon />}
          percent={5}
          count={51245}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </CampaignsInfluencerPageCharts>
      <CardWithText
        title="Available Campaigns"
        style={
          window.innerWidth < 600
            ? { padding: '1.25rem 10px', boxShadow: 'unset' }
            : { padding: '1.25rem', boxShadow: '0px 2px 5px #00000010' }
        }
        actions={
          [
            // <Button
            //   color={filterOpen ? 'secondary' : 'default'}
            //   variant="contained"
            //   onClick={toggleFilter}
            //   startIcon={<SlidersHorizontalIcon width="18" height="18" />}
            // >
            //   Filters
            // </Button>,
          ]
        }
      >
        <Stack>
          {/* <Collapse removeGap in={filterOpen}>
            <CampaignsPageFilter>
              <CampaignsPageFilterContainer>
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
                <InputGroup
                  label="Date"
                  inputRatio="1fr 1fr"
                  elements={[
                    {
                      type: 'date',
                      placeholder: 'From',
                      value: filter.startDate,
                      onValue: (startDate) =>
                        setFilter({ ...filter, startDate }),
                    },
                    {
                      type: 'date',
                      placeholder: 'To',
                      value: filter.endDate,
                      onValue: (endDate) => setFilter({ ...filter, endDate }),
                    },
                  ]}
                />
              </CampaignsPageFilterContainer>
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
          </Collapse> */}
          <CheckboxTable
            head={DCampaignsInfluencerHead}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={0} />
        </Stack>
      </CardWithText>
      <CardWithText
        title="Ongoing Campaigns"
        style={
          window.innerWidth < 600
            ? { padding: '1.25rem 0', boxShadow: 'unset' }
            : { padding: '1.25rem', boxShadow: '0px 2px 5px #00000010' }
        }
      >
        <Stack>
          <CheckboxTable
            head={DCampaignsInfluencerHead2}
            items={[]}
            renderItem={renderItem}
          />
          <Pagination count={0} />
        </Stack>
      </CardWithText>
    </CampaignsPageMain>
  );
};

export default CampaignsPage;
