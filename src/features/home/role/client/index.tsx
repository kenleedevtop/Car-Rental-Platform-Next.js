import React, { useEffect } from 'react';
import {
  HomePageMain,
  HomePageCharts,
  HomePageChartsLabel,
  HomePageChartsGrid,
} from 'features/home/styles';
import { CardWithChart } from 'components/custom';
import {
  CampaignsSmallIcon,
  FinishedIcon,
  InpreparationIcon,
  OngoingIcon,
  OrderedIcon,
  ReportsSmallIcon,
  SMLSmallIcon,
  SurveysSmallIcon,
  TotalIcon,
  WithoutReportIcon,
} from 'components/svg';
import SubscriptionIcon from 'components/svg/subscriptions';
import ReccomendedIcon from 'components/svg/recommended';
import { useAppContext } from 'context';
import GraphsAPI from 'api/graphs';

const HomePage = () => {
  const { user } = useAppContext();

  const getGraphData = async () => {
    const result = await GraphsAPI.getGraphs(user.id);

    console.log(result);
  };

  useEffect(() => {
    getGraphData();
  }, []);

  return (
    <HomePageMain>
      <HomePageCharts>
        <HomePageChartsLabel>Campaigns </HomePageChartsLabel>
        <HomePageChartsGrid>
          <CardWithChart
            title="In preparation"
            icon={<InpreparationIcon />}
            smallIcon={<CampaignsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />

          <CardWithChart
            title="Ongoing"
            icon={<OngoingIcon />}
            smallIcon={<CampaignsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />

          <CardWithChart
            title="Finished"
            icon={<FinishedIcon />}
            smallIcon={<CampaignsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Influencers"
            icon={<TotalIcon />}
            smallIcon={<CampaignsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
        </HomePageChartsGrid>
      </HomePageCharts>
      <HomePageCharts>
        <HomePageChartsLabel>Reports </HomePageChartsLabel>
        <HomePageChartsGrid>
          <CardWithChart
            title="Without Report"
            icon={<WithoutReportIcon />}
            smallIcon={<ReportsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Ordered"
            icon={<OrderedIcon />}
            smallIcon={<ReportsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Ongoing"
            icon={<OngoingIcon />}
            smallIcon={<ReportsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Delivered"
            icon={<FinishedIcon />}
            smallIcon={<ReportsSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
        </HomePageChartsGrid>
      </HomePageCharts>
      <HomePageCharts>
        <HomePageChartsLabel>Social Media Listening </HomePageChartsLabel>
        <HomePageChartsGrid>
          <CardWithChart
            title="Recommended"
            icon={<ReccomendedIcon />}
            smallIcon={<SMLSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Ordered"
            icon={<OrderedIcon />}
            smallIcon={<SMLSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Ongoing"
            icon={<OngoingIcon />}
            smallIcon={<SMLSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Subscriptions"
            icon={<SubscriptionIcon />}
            smallIcon={<SMLSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
        </HomePageChartsGrid>
      </HomePageCharts>
      <HomePageCharts>
        <HomePageChartsLabel>Surveys </HomePageChartsLabel>
        <HomePageChartsGrid>
          <CardWithChart
            title="In Preparation"
            icon={<InpreparationIcon />}
            smallIcon={<SurveysSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Ongoing"
            icon={<OngoingIcon />}
            smallIcon={<SurveysSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Completed"
            icon={<FinishedIcon />}
            smallIcon={<SurveysSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
          <CardWithChart
            title="Participants"
            icon={<TotalIcon />}
            smallIcon={<SurveysSmallIcon />}
            percent={0}
            count={0}
            chartData={{
              values: [0, 0, 0],
              labels: ['', '', ''],
            }}
          />
        </HomePageChartsGrid>
      </HomePageCharts>
    </HomePageMain>
  );
};

export default HomePage;
