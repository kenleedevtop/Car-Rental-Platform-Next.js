import Project from 'constants/project';
import { client } from 'api/api-client';

const CarWorkExperienceApi = {
  createCarWorkExperience: async (body: any) => {
    await client.post(`${Project.apis.v1}/work-experiences`, body);
  },

  getCarWorkExperiences: async (filter: any) => {
    const { data } = await client.get(`${Project.apis.v1}/work-experiences`, {
      params: {
        filter,
      },
    });

    return data;
  },

  getCarWorkExperience: async (id: number) => {
    const { data } = await client.get(
      `${Project.apis.v1}/work-experiences/${id}`
    );

    return data;
  },

  updateCarWorkExperience: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/work-experiences/${id}`, body);
  },

  deleteCarWorkExperience: async (id: number) => {
    await client.delete(`${Project.apis.v1}/work-experiences/${id}`);
  },
};

export default CarWorkExperienceApi;
