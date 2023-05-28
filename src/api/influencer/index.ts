import Project from 'constants/project';
import {
  TSingleInfluencer,
  TRegisterAsInfluencerParams,
  TInfluencer,
} from 'api/influencer/types';

import { client } from 'api/api-client';

const InfluencerAPI = {
  registration: async (body: TRegisterAsInfluencerParams) => {
    const { data } = await client.post(
      `${Project.apis.v1}/influencer/registration`,
      body
    );
    return data;
  },

  registrationViaInvitation: async (body: TRegisterAsInfluencerParams) => {
    const { data } = await client.post(
      `${Project.apis.v1}/influencer/registration`,
      body
    );
    return data;
  },

  getInfluencers: async () => {
    const { data } = await client.get(`${Project.apis.v1}/influencer?limit=50`);

    return data;
  },

  getDInfluencers: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/discoverInfluencers?limit=50`
    );

    return data;
  },

  getSingleInfluencer: async (id: any) => {
    const { data } = await client.get(`${Project.apis.v1}/influencer/${id}`);

    return data;
  },

  deleteInfluencer: async (id: TSingleInfluencer) => {
    const { data } = await client.delete(`${Project.apis.v1}/influencer/${id}`);

    return data;
  },

  updateInfluencer: async (body: TInfluencer, id: any) => {
    await client.patch(`${Project.apis.v1}/influencer/${id}`, body);
  },

  verifyInfluencer: async (id: TSingleInfluencer) => {
    await client.patch(`${Project.apis.v1}/influencer/${id}/verify`);
  },

  influencerGetPostTypes: async (id: TSingleInfluencer) => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/${id}/desiredIncome/campaign/postTypes`
    );

    return data;
  },

  influencerGetDesiredIncome: async (id: TSingleInfluencer) => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/${id}/desiredIncome/campaign`
    );

    return data;
  },

  addCampaignDesiredIncome: async (id: TSingleInfluencer) => {
    await client.put(
      `${Project.apis.v1}/influencer/${id}/desiredIncome/campaign`
    );
  },

  influencerGetSurveyTypes: async (id: TSingleInfluencer) => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/${id}/desiredIncome/survey/surveyTypes`
    );

    return data;
  },

  influencerGetDesiredIncomeSurvey: async (id: TSingleInfluencer) => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/${id}/desiredIncome/survey`
    );

    return data;
  },

  addSurveyDesiredIncome: async (id: TSingleInfluencer) => {
    await client.put(
      `${Project.apis.v1}/influencer/${id}/desiredIncome/survey`
    );
  },
};

export default InfluencerAPI;
