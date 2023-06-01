import Project from 'constants/project';
import { client } from 'api/api-client';

const EnumsApi = {
  getReportTypes: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/campaign/reportTypes`
    );

    return data;
  },

  getGenders: async () => {
    const { data } = await client.get(`${Project.apis.v1}/users/genders`);

    return data;
  },

  getStakeholderTypes: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/stakeholders/stakeholderTypes`
    );

    return data;
  },

  getEthnicities: async () => {
    const { data } = await client.get(`${Project.apis.v1}/ethnicities`);

    return data;
  },

  getStruggles: async () => {
    const { data } = await client.get(`${Project.apis.v1}/struggles`);

    return data;
  },

  getInterests: async () => {
    const { data } = await client.get(`${Project.apis.v1}/interests`);

    return data;
  },

  getInfluencerSize: async () => {
    const { data } = await client.get(`${Project.apis.v1}/influencerSizes`);

    return data;
  },

  getSurveyTypes: async () => {
    const { data } = await client.get(`${Project.apis.v1}/surveys/surveyTypes`);

    return data;
  },
};

export default EnumsApi;
