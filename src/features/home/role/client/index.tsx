import React from 'react';
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
import { faker } from '@faker-js/faker';
import SubscriptionIcon from 'components/svg/subscriptions';
import ReccomendedIcon from 'components/svg/recommended';

import { CampaignAndSurveyStatus, SMLStatus } from 'api/insights/types';
import useSurveys from './use-surveys';
import useCampaign from './use-campaign';
import useSML from './use-sml';

const HomePage = () => {

  // Campaigns
  const campaignInPreparation = useCampaign(CampaignAndSurveyStatus.InPreparation);
  const campaignOngoing = useCampaign(CampaignAndSurveyStatus.OnGoing);
  const campaignCompleted = useCampaign(CampaignAndSurveyStatus.Finished);
  const campaignTotal = useCampaign();

  // Reports
  // TODO: After backend is finished

  // Social Media Listening (SML)
  const SMLNew = useSML(SMLStatus.Ordered);
  const SMLToBeCreated = useSML(SMLStatus.Ordered);
  const SMLFinished = useSML(SMLStatus.Delivered);
  const SMLSubscriptions = useSML();

  // Surveys
  const surveysInPreparation = useSurveys(CampaignAndSurveyStatus.InPreparation)
  const surveysOngoing = useSurveys(CampaignAndSurveyStatus.OnGoing)
  const surveysCompleted = useSurveys(CampaignAndSurveyStatus.Finished)
  const surveysTotal = useSurveys()

  return (
    <HomePageMain>
      <HomePageCharts>
        <HomePageChartsLabel>Campaigns </HomePageChartsLabel>
        <HomePageChartsGrid>
          <CardWithChart
            title="In preparation"
            icon={<InpreparationIcon />}
            smallIcon={<CampaignsSmallIcon />}
            {...campaignInPreparation}
          />

          <CardWithChart
            title="Ongoing"
            icon={<OngoingIcon />}
            smallIcon={<CampaignsSmallIcon />}
            {...campaignOngoing}
          />

          <CardWithChart
            title="Completed"
            icon={<FinishedIcon />}
            smallIcon={<CampaignsSmallIcon />}
            {...campaignCompleted}
          />
          <CardWithChart
            title="Total"
            icon={<TotalIcon />}
            smallIcon={<CampaignsSmallIcon />}
            {...campaignTotal}
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
            title="Ordered"
            icon={<OrderedIcon />}
            smallIcon={<ReportsSmallIcon />}
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
            icon={<OngoingIcon />}
            smallIcon={<ReportsSmallIcon />}
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
            title="Delivered"
            icon={<FinishedIcon />}
            smallIcon={<ReportsSmallIcon />}
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
        <HomePageChartsLabel>Social Media Listening </HomePageChartsLabel>
        <HomePageChartsGrid>
          <CardWithChart
            title="New"
            icon={<ReccomendedIcon />}
            smallIcon={<SMLSmallIcon />}
            {...SMLNew}
          />
          <CardWithChart
            title="To Be Created"
            icon={<OrderedIcon />}
            smallIcon={<SMLSmallIcon />}
            {...SMLToBeCreated}
          />
          <CardWithChart
            title="Finished"
            icon={<OngoingIcon />}
            smallIcon={<SMLSmallIcon />}
            {...SMLFinished}
          />
          <CardWithChart
            title="Subscriptions"
            icon={<SubscriptionIcon />}
            smallIcon={<SMLSmallIcon />}
            {...SMLSubscriptions}
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
            {...surveysInPreparation}
          />
          <CardWithChart
            title="Ongoing"
            icon={<OngoingIcon />}
            smallIcon={<SurveysSmallIcon />}
            {...surveysOngoing}
          />
          <CardWithChart
            title="Completed"
            icon={<FinishedIcon />}
            smallIcon={<SurveysSmallIcon />}
            {...surveysCompleted}
          />
          <CardWithChart
            title="Total"
            icon={<TotalIcon />}
            smallIcon={<SurveysSmallIcon />}
            {...surveysTotal}

          />
        </HomePageChartsGrid>
      </HomePageCharts>
    </HomePageMain>
  );
};

export default HomePage;
