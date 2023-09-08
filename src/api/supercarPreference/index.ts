import Project from 'constants/project';
import { client } from 'api/api-client';

const CarPreferenceApi = {
  createCarPreference: async (body: any) => {
    await client.post(`${Project.apis.v1}/preferences`, body);
  },

  getCarPreferences: async (filter: any) => {
    const { data } = await client.get(`${Project.apis.v1}/preferences`, {
      params: {
        filter,
      },
    });

    return data;
  },

  getCarPreference: async (id: number) => {
    const { data } = await client.get(`${Project.apis.v1}/preferences/${id}`);

    return data;
  },

  updateCarPreference: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/preferences/${id}`, body);
  },

  deleteCarPreference: async (id: number) => {
    await client.delete(`${Project.apis.v1}/preferences/${id}`);
  },
};

export default CarPreferenceApi;
