import axios from 'axios';
import Project from 'constants/project';

const AdminAPI = {
  getUsers: async (param: string) => {
    const { data } = await axios.get(`${Project.apis.v1}/admin/users/${param}`);
    return data;
  },
  createAmbassadorInviteLink: async () => {
    const { data } = await axios.get(
      `${Project.apis.v1}/admin/users/ambassador-invite-link`
    );
    return data;
  },
};

export default AdminAPI;
