import Project from 'constants/project';
import { client } from 'api/api-client';
import {
  GetClientsClientSurveysOverTimeDataRequest,
  GetClientsClientSMLsOverTimeDataRequest,
  GetClientsClientSMLsOverTimeDataResponse,
  GetClientsClientSurveysOverTimeDataResponse,
  GetClientsClientCampaignsOverTimeDataRequest,
  GetClientsClientCampaignsOverTimeDataResponse,
} from './types';

const InsightsAPI = {

  getClientsClientCampaignsOverTimeData: async (
    userId: string,
    request: GetClientsClientCampaignsOverTimeDataRequest
  ) => {
    const response =
      await client.get<GetClientsClientCampaignsOverTimeDataResponse>(
        `${Project.apis.v1}/insight/clients/clientCampaignsOverTimeData/${userId}`,
        { params: request }
      );

    return response.data;
  },

  getClientsClientSurveysOverTimeData: async (
    userId: string,
    request: GetClientsClientSurveysOverTimeDataRequest
  ) => {
    const response =
      await client.get<GetClientsClientSurveysOverTimeDataResponse>(
        `${Project.apis.v1}/insight/clients/clientSurveysOverTimeData/${userId}`,
        { params: request }
      );

    return response.data;
  },
  getClientsClientSMLsOverTimeData: async (
    userId: string,
    request: GetClientsClientSMLsOverTimeDataRequest
  ) => {
    const response = await client.get<GetClientsClientSMLsOverTimeDataResponse>(
      `${Project.apis.v1}/insight/clients/clientSMLsOverTimeData/${userId}`,
      { params: request }
    );

    return response.data;
  },
};

export default InsightsAPI;
