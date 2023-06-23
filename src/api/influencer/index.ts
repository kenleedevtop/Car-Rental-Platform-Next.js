// eslint-disable-next-line import/no-named-as-default
import Project from 'constants/project';
import {
  TSingleInfluencer,
  TRegisterAsInfluencerParams,
  TInfluencer,
} from 'api/influencer/types';

import { client } from 'api/api-client';

const InfluencerAPI = {
  getAffiliateCodeOwner: async (affiliateCode: string) => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/affiliateCodeOwner/${affiliateCode}`
    );

    return data;
  },

  registration: async (body: TRegisterAsInfluencerParams, locale: string) => {
    const { data } = await client.post(
      `${Project.apis.v1}/influencer/registration`,
      body,
      {
        params: {
          lang: locale,
        },
      }
    );
    return data;
  },

  registrationViaInvitation: async (body: TRegisterAsInfluencerParams) => {
    const { data } = await client.post(
      `${Project.apis.v1}/influencer/registrationViaInvitation`,
      body
    );
    return data;
  },

  getInfluencers: async (filters: any) => {
    const { data } = await client.get(`${Project.apis.v1}/influencer`, {
      params: {
        filters,
      },
    });

    return data;
  },

  getDInfluencersRegistered: async (filters: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/discoverInfluencers?stage=registered`,
      {
        params: {
          ...filters,
        },
      }
    );

    return data;
  },

  getDInfluencersToBeApproved: async (filters: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/influencer/discoverInfluencers?stage=toBeApproved`,
      {
        params: {
          ...filters,
        },
      }
    );

    return data;
  },

  getSingleInfluencer: async (id: any): Promise<TInfluencer> => {
    const { data } = await client.get(`${Project.apis.v1}/influencer/${id}`);

    return data;
  },

  deleteInfluencer: async (id: TSingleInfluencer) => {
    const { data } = await client.delete(`${Project.apis.v1}/influencer/${id}`);

    return data;
  },

  updateInfluencer: async (body: any, id: any) => {
    await client.patch(`${Project.apis.v1}/influencer/${id}`, body);
  },

  verifyInfluencer: async (body: any, id: TSingleInfluencer) => {
    const { data } = await client.patch(
      `${Project.apis.v1}/influencer/${id}/verify`,
      body
    );
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
