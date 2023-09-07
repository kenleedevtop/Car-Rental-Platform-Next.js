import Project from 'constants/project';
import { client } from 'api/api-client';

const EducationApi = {
  createEducation: async (body: any) => {
    await client.post(`${Project.apis.v1}/educations`, body);
  },

  getEducations: async (filter: any) => {
    const { data } = await client.get(`${Project.apis.v1}/educations`, {
      params: {
        filter,
      },
    });

    return data;
  },

  getEducation: async (id: number) => {
    const { data } = await client.get(`${Project.apis.v1}/educations/${id}`);

    return data;
  },

  updateEducation: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/educations/${id}`, body);
  },

  deleteEducation: async (id: number) => {
    await client.delete(`${Project.apis.v1}/educations/${id}`);
  },
};

export default EducationApi;
