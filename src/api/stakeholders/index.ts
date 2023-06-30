import Project from 'constants/project';
import { client } from 'api/api-client';
import { TCreateStakeholderParams } from './types';

const StakeholderApi = {
  getReportTypes: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/campaign/reportTypes`
    );

    return data;
  },
  createStakeholder: async (body: TCreateStakeholderParams) => {
    const { authorizationCode, userId } = body;

    const response = await client.post(`${Project.apis.v1}/stakeholders`, {
      authorizationCode,
      userId,
    });

    return response;
  },
};

export default StakeholderApi;
