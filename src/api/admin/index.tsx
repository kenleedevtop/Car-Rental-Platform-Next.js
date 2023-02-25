import axios from 'axios';
import Project from 'constants/project';
import { TAddInfluencer } from 'api/admin/types';

const AdminAPI = {
  createAmbassadorInviteLink: async () => {
    const { data } = await axios.get(
      `${Project.apis.v1}/admin/users/ambassador-invite-link`
    );
    return data;
  },
  getInfluencers: async (query: string) => {
    const { data } = await axios.get(
      `${Project.apis.v1}/admin/influencers/leads/?status=${query}`
    );
    return data;
  },
  getDiseaseAreas: async () => {
    const { data } = await axios.get(
      `${Project.apis.v1}/admin/filters/disease-area`
    );
    return data;
  },
  getSocialMedia: async () => {
    const { data } = await axios.get(
      `${Project.apis.v1}/admin/filters/social-media`
    );
    return data;
  },
  addInfluencer: async (body: TAddInfluencer) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/admin/influencers`,
      body
    );
    return data;
  },
};

export default AdminAPI;
