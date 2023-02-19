import axios from 'axios';
import Project from 'constants/project';

const AdminAPI = {
  createAmbassadorInviteLink: async () => {
    const { data } = await axios.get(
      `${Project.apis.v1}/admin/users/ambassador-invite-link`
    );
    return data;
  },
  getInfluencers: async (query: string) => {
    const { data } = await axios.get(
      `${Project.apis.v1}/admin/influencers?status=${query}`
    );
    return data;
  },
};

export default AdminAPI;
