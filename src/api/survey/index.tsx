import Project from 'constants/project';
import { TCreateSurveyParams } from 'api/survey/types';
import { client } from 'api/api-client';

const SurveyAPI = {
  createSurvey: async (body: any) => {
    await client.post(`${Project.apis.v1}/surveys`, body);
  },

  getSurveys: async (filters: any) => {
    const { data } = await client.get(`${Project.apis.v1}/surveys`, {
      params: {
        filters,
      },
    });

    return data;
  },

  getSurvey: async (id: any) => {
    const { data } = await client.get(`${Project.apis.v1}/surveys/${id}`);

    return data;
  },
};

export default SurveyAPI;
