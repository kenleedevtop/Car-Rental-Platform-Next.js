import Project from 'constants/project';
import { TCreateCar } from 'api/cars/types';

import { client } from 'api/api-client';

const CarAPI = {
  create: async (body: TCreateCar) => {
    const { data } = await client.post(
      `${Project.apis.v1}/house-projects`,
      body
    );

    return data;
  },

  getAll: async (search?: string, marketType?: string, status?: string) => {
    const { data } = await client.get(`${Project.apis.v1}/house-projects`, {
      params: {
        search,
        marketType,
        status,
      },
    });

    return data;
  },

  updateCar: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/house-projects/${id}`, body);
  },

  getOne: async (id: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/house-projects/${id}`
    );

    return data;
  },
};

export default CarAPI;
