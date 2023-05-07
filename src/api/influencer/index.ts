import axios from 'axios';
import Project from 'constants/project';
import {
  TSingleInfluencer,
  TRegisterAsInfluencerParams,
} from 'api/influencer/types';

const InfluencerAPI = {
  registration: async (body: TRegisterAsInfluencerParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/influencer/registration`,
      body
    );
    return data;
  },

  registrationViaInvitation: async (body: TRegisterAsInfluencerParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/influencer/registration`,
      body
    );
    return data;
  },

  getInfluencers: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/influencer`);

    return data;
  },

  getSingleInfluencer: async (id: TSingleInfluencer) => {
    const { data } = await axios.get(`${Project.apis.v1}/influencer/${id}`);

    return data;
  },

  deleteInfluencer: async (id: TSingleInfluencer) => {
    const { data } = await axios.delete(`${Project.apis.v1}/influencer/${id}`);

    return data;
  },
};

export default InfluencerAPI;
