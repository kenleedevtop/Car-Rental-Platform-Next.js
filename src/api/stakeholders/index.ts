import Project from 'constants/project';
import { client } from 'api/api-client';

const StakeholderApi = {
  getReportTypes: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/campaign/reportTypes`
    );

    return data;
  },
};

export default StakeholderApi;
