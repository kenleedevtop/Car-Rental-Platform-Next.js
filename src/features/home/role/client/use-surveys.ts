import { InsightsAPI } from 'api';
import { CampaignAndSurveyStatus } from 'api/insights/types';
import { TChartData } from 'components/custom/card-with-chart/types';
import { useAppContext } from 'context';
import { useEffect, useState } from 'react';
import useSnackbar from 'hooks/use-snackbar';
import { CardWithChartDataProps } from './types';

const useSurveys = (
  status?: CampaignAndSurveyStatus
): CardWithChartDataProps => {
  const { user } = useAppContext();

  const { push } = useSnackbar();

  const [count, setCount] = useState(0);
  const [percent, setPercent] = useState(0);
  const [chartData, setChartData] = useState<TChartData | undefined>();

  useEffect(() => {
    
      if (user?.id) {
        if (!count) {
          InsightsAPI.getClientsClientSurveysOverTimeData(user.id, {
            graphPeriod: 'daily',
            graphType: 'cumulative',
            maxResults: 1,
            status,
          }).then((result) => setCount(result.data?.[0].value || 0)).catch((error) => {
            if (error instanceof Error)
              push(error.message, {
                variant: 'error',
              });
          });
        }

        if (!percent) {
          InsightsAPI.getClientsClientSurveysOverTimeData(user.id, {
            graphPeriod: 'monthly',
            graphType: 'cumulative',
            maxResults: 2,
            status,
          }).then((result) => setPercent(result.changePercentage || 0)).catch((error) => {
            if (error instanceof Error)
              push(error.message, {
                variant: 'error',
              });
          });
        }

        if (!chartData) {
          InsightsAPI.getClientsClientSurveysOverTimeData(user.id, {
            graphPeriod: 'daily',
            status,
          }).then((result) =>
            setChartData({
              values: result.data?.map((point) => point.value) || [],
              labels: result.data?.map((point) => point.timestamp) || [],
            })
          ).catch((error) => {
            if (error instanceof Error)
              push(error.message, {
                variant: 'error',
              });
          });
        }
      }
  
  }, [user?.id]);

  return {
    count,
    percent,
    chartData: chartData || {
      values: [],
      labels: [],
    },
  };
};

export default useSurveys;
