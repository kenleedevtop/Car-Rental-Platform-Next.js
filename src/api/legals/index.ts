import Project from 'constants/project';
import { client } from 'api/api-client';

const LegalsAPI = {
  getLegals: async () => {
    const { data } = await client.get(`${Project.apis.v1}/legals`);
    return data;
  },
};

export default LegalsAPI;
