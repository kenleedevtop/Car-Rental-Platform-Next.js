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
import {
  CardWithChart,
  CardWithProgress,
  CardWithText,
  Table,
} from 'components/custom';
import {
  BusinessmanIcon,
  ContactedIcon,
  IdentifiedIcon,
  RedCrossIcon,
  RegisteredIcon,
  SlidersHorizontalIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';
import { Button, Input, Pagination } from 'components/ui';
import { Grid, Stack, Collapse } from 'components/system';
import { TTableRenderItemObject } from 'components/custom/table/types';
import { useModal } from 'hooks';
import {
  AddCampaignModal,
  ExportCampaignsModal,
} from 'features/campaigns/role/admin/elements';
import { useQuery } from 'react-query';
import { CampaignAPI } from 'api';

const CampaignsPage = () => {
  const { isLoading, error, data } = useQuery('campaigns/all', () =>
    CampaignAPI.getAll()
  );

  const [acModal, openAcModal, closeAcModal] = useModal(false);
  const [ecModal, openEcModal, closeEcModal] = useModal(false);

  const [filter, setFilter] = useState<any>(DGenerateCampaignsFilter());

  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const clearFilters = () => {
    setFilter(DGenerateCampaignsFilter());
  };

  const renderItem = ({ cell }: TTableRenderItemObject) => '';

  return (
    <CampaignsPageMain>
      <div>
        <div>{isLoading ? 'LOADING' : 'NOT LOADING'}</div>
        <div>{error ? 'ERROR' : 'NOT ERROR'}</div>
        <div>{data ? JSON.stringify(data) : 'NOT DATA'}</div>
      </div>
      <CampaignsPageCharts columns={4}>
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
          percent={2}
          count={75}
          chartData={{
            values: Array.from(Array(20).keys()).map((_x) =>
              faker.datatype.number({ min: 10, max: 30 })
            ),
            labels: Array.from(Array(20).keys()).map((_x) => ''),
          }}
        />
      </CampaignsPageCharts>

      <CampaignsPageCharts columns={4}>
        <CardWithProgress
          title="Industry"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Location"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Disease Area"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Platform"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <BusinessmanIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <BusinessmanIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
      </CampaignsPageCharts>
      <CardWithText
        title="Campaigns"
        description="More than 290+ new Campaigns"
        actions={[
          <Button
            color={filterOpen ? 'secondary' : 'default'}
            variant="contained"
            onClick={toggleFilter}
            startIcon={<SlidersHorizontalIcon width="18" height="18" />}
          >
            Filters
          </Button>,
          <Button color="default" variant="contained" onClick={openEcModal}>
            Export
          </Button>,
          <Button color="primary" variant="contained" onClick={openAcModal}>
            Add Campaign
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
                  label="Client"
                  placeholder="Please Select"
                  value={filter.client}
                  onValue={(client) => setFilter({ ...filter, client })}
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
                  label="Industry"
                  placeholder="Please Select"
                  value={filter.industry}
                  onValue={(industry) => setFilter({ ...filter, industry })}
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
                  label="Promotion Type"
                  placeholder="Please Select"
                  value={filter.promotionType}
                  onValue={(promotionType) =>
                    setFilter({ ...filter, promotionType })
                  }
                />
                <Input
                  type="select"
                  label="Data Range"
                  placeholder="Please Select"
                  value={filter.dataRange}
                  onValue={(dataRange) => setFilter({ ...filter, dataRange })}
                />
                <Input
                  type="number"
                  label="Influencer Size"
                  placeholder="Please Enter"
                  value={filter.influencerSize}
                  onValue={(influencerSize) =>
                    setFilter({ ...filter, influencerSize })
                  }
                />
                <Input
                  type="min-max"
                  label="Influencers"
                  value={filter.influencers}
                  onValue={(influencers) =>
                    setFilter({ ...filter, influencers })
                  }
                />
                <Input
                  type="min-max"
                  label="Budget"
                  value={filter.budget}
                  onValue={(budget) => setFilter({ ...filter, budget })}
                />
                <Input
                  type="multiselect"
                  label="Label"
                  placeholder="Please Select"
                  value={filter.label}
                  onValue={(label) => setFilter({ ...filter, label })}
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
          <Pagination count={10} />
        </Stack>
      </CardWithText>
      {acModal && <AddCampaignModal onClose={closeAcModal} />}
      {ecModal && <ExportCampaignsModal onClose={closeEcModal} />}
    </CampaignsPageMain>
  );
};

export default CampaignsPage;
