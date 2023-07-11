import Project from 'constants/project';
import {
  TCampaign,
  TReportId,
  TSingleCampaign,
  TSubmissionLinkForCampaign,
  TUpdateCampaign,
} from 'api/campaign/types';
import { client } from 'api/api-client';

const CampaignAPI = {
  getCampaignsReportTypes: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/campaign/reportTypes`,
      {
        withCredentials: true,
      }
    );

    return data;
  },

  getCampaigns: async (filters: any) => {
    const { data } = await client.get(`${Project.apis.v1}/campaign`, {
      params: {
        filters,
      },
    });
    return data;
  },

  addCampaign: async (body: any) => {
    await client.post(`${Project.apis.v1}/campaign`, body);
  },

  getSingleCampaign: async (id: TSingleCampaign): Promise<TCampaign> => {
    const { data } = await client.get(`${Project.apis.v1}/campaign/${id}`);

    return data;
  },

  updateCampaign: async (id: TSingleCampaign, body: TUpdateCampaign) => {
    await client.patch(`${Project.apis.v1}/campaign/${id}`, body);
  },

  deleteCampaign: async (id: TSingleCampaign) => {
    await client.delete(`${Project.apis.v1}/campaign/${id}`);
  },

  addInfluencerToCampaign: async (id: TSingleCampaign) => {
    await client.post(`${Project.apis.v1}/campaign/${id}/addInfluencers`);
  },

  inviteInfluencerToCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/inviteInfluencers`);
  },

  acceptInvitationToCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/acceptInvitation`);
  },

  declineInvitationToCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/declineInvitation`);
  },

  removeInfluencerFromCampaign: async (id: TSingleCampaign) => {
    await client.delete(`${Project.apis.v1}/campaign/${id}/removeInfluencers`);
  },

  submitInfluencerDataToCampaign: async (
    body: TSubmissionLinkForCampaign,
    id: TSingleCampaign
  ) => {
    await client.post(
      `${Project.apis.v1}/campaign/${id}/submitInfluencerData`,
      body
    );
  },

  approveSubmissionForCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/approveSubmission`);
  },

  disapproveSubmissionForCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/disapproveSubmission`);
  },

  startCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/startCampaign`);
  },

  finishCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/finishCampaign`);
  },

  archiveCampaign: async (id: TSingleCampaign) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/archiveCampaign`);
  },

  createReportForCampaign: async (id: any, body: any) => {
    await client.post(`${Project.apis.v1}/campaign/${id}/reports`, body);
  },

  getReportForCampaign: async (id: any) => {
    await client.get(`${Project.apis.v1}/campaign/${id}/reports`);
  },

  updateReportForCampaign: async (id: TSingleCampaign, reportId: TReportId) => {
    await client.put(`${Project.apis.v1}/campaign/${id}/reports/${reportId}`);
  },

  getPerformancesForCampaign: async (id: TSingleCampaign) => {
    await client.get(`${Project.apis.v1}/campaign/${id}/performances`);
  },

  getCampaignsOverTimeData: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/insight/campaigns/campaignsOverTimeData`
    );

    return data;
  },

  getCampaignsRevenueOverTimeData: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/insight/campaigns/campaignsRevenueOverTimedata`
    );

    return data;
  },

  createReport: async (body: any) => {
    await client.post(`${Project.apis.v1}/campaign/reports`, body);
  },

  getReports: async (filter: any) => {
    const { data } = await client.get(`${Project.apis.v1}/campaign/reports`, {
      params: {
        filter,
      },
    });

    return data;
  },
};

export default CampaignAPI;
