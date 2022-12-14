import React from 'react';
import {
  HomePageMain,
  HomePageCharts,
  HomePageChartsLabel,
  HomePageChartsGrid,
} from 'features/home/styles';
import { CardWithChart, CardWithProgress } from 'components/custom';
import {
  BusinessmanIcon,
  ContactedIcon,
  IdentifiedIcon,
  InstagramIcon,
  RedCrossIcon,
  RegisteredIcon,
  TiktokIcon,
  TotalIcon,
  YoutubeIcon,
} from 'components/svg';
import { faker } from '@faker-js/faker';

const HomePage = () => (
  <HomePageMain>
    <HomePageCharts>
      <HomePageChartsLabel>Campaigns Overview</HomePageChartsLabel>
      <HomePageChartsGrid columns={4}>
        <CardWithChart
          title="In preparation"
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
          title="Completed"
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
      </HomePageChartsGrid>
    </HomePageCharts>
    <HomePageCharts>
      <HomePageChartsGrid columns={4}>
        <CardWithProgress
          title="Influencers"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
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
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
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
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
        <CardWithProgress
          title="Disease area"
          icon={<RedCrossIcon />}
          progressData={[
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
            {
              icon: <InstagramIcon />,
              percent: 100,
              title: 'Test',
            },
            {
              icon: <YoutubeIcon />,
              percent: 38,
              title: 'Test',
            },
            {
              icon: <TiktokIcon />,
              percent: 75,
              title: 'Test',
            },
          ]}
        />
      </HomePageChartsGrid>
    </HomePageCharts>
    <HomePageCharts>
      <HomePageChartsLabel>Reports Overview</HomePageChartsLabel>
      <HomePageChartsGrid columns={4}>
        <CardWithChart
          title="Instagram"
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
          title="Youtube"
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
          title="Tiktok"
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
        <CardWithChart
          title="Biotech"
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
          title="In Preparation"
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
          title="Medtech"
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
          title="Hospitals"
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
      </HomePageChartsGrid>
    </HomePageCharts>
    <HomePageCharts>
      <HomePageChartsLabel>Social Media Listening Overview</HomePageChartsLabel>
      <HomePageChartsGrid columns={4}>
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
          title="Revenue"
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
      </HomePageChartsGrid>
    </HomePageCharts>
    <HomePageCharts>
      <HomePageChartsLabel>Surveys Overview</HomePageChartsLabel>
      <HomePageChartsGrid columns={4}>
        <CardWithChart
          title="To Be Created"
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
          title="To Be Sent"
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
          title="Approved"
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
          title="Revenue"
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
      </HomePageChartsGrid>
    </HomePageCharts>
  </HomePageMain>
);

export default HomePage;
