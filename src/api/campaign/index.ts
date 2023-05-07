import axios from 'axios';
import Project from 'constants/project';
import { TAddCampaign, TSingleCampaign } from 'api/campaign/types';

const CampaignAPI = {
  getCampaigns: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/campaign`);
    return data;
  },

  addCampaign: async (body: TAddCampaign) => {
    await axios.post(`${Project.apis.v1}/campaign`);
  },

  getSingleCampaign: async (id: TSingleCampaign) => {
    const { data } = await axios.post(`${Project.apis.v1}/campaign/${id}`);

    return data;
  },

  updateBenefit: async (id: TSingleCampaign, body: TAddCampaign) => {
    await axios.patch(`${Project.apis.v1}/campaign/${id}`, body);
  },

  deleteBenefit: async (id: TSingleCampaign) => {
    await axios.delete(`${Project.apis.v1}/campaign/${id}`);
  },
};

export default CampaignAPI;
