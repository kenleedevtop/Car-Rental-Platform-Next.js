import Project from 'constants/project';
import { TCreateCar } from 'api/cars/types';

import { client } from 'api/api-client';

const CarAPI = {
  create: async (body: TCreateCar) => {
    const { data } = await client.post(`${Project.apis.v1}/car-projects`, body);

    return data;
  },

  getAll: async (search?: string, status?: string) => {
    const { data } = await client.get(`${Project.apis.v1}/car-projects`, {
      params: {
        search,
        status,
      },
    });

    return data;
  },

  updateCar: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/car-projects/${id}`, body);
  },

  getOne: async (id: any) => {
    const { data } = await client.get(`${Project.apis.v1}/car-projects/${id}`);

    return data;
  },
};

export default CarAPI;
