import React from 'react';
import {
  CampaignsPageMain,
  CampaignsPageCharts,
} from 'features/campaigns/styles';
import { CardWithChart, CardWithProgress } from 'components/custom';
import {
  ContactedIcon,
  IdentifiedIcon,
  RedCrossIcon,
  RegisteredIcon,
  TotalIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';

const CampaignsPage = () => (
  <CampaignsPageMain>
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
        progressData={[]}
      />
      <CardWithProgress
        title="Location"
        icon={<RedCrossIcon />}
        progressData={[]}
      />
      <CardWithProgress
        title="Disease Area"
        icon={<RedCrossIcon />}
        progressData={[]}
      />
      <CardWithProgress
        title="Platform"
        icon={<RedCrossIcon />}
        progressData={[]}
      />
    </CampaignsPageCharts>
  </CampaignsPageMain>
);

export default CampaignsPage;
