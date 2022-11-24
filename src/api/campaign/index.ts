import axios from 'axios';
import Project from 'constants/project';

const CampaignAPI = {
  getAll: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/campaign/all`);
    return data;
  },
};

export default CampaignAPI;
