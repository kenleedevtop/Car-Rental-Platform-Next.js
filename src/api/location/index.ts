import Project from 'constants/project';
import { TCreateLocation, TSingleLocation } from 'api/location/types';

import { client } from 'api/api-client';

const LocationAPI = {
  create: async (body: TCreateLocation) => {
    const { data } = await client.post(`${Project.apis.v1}/location`, body);

    return data;
  },

  getAll: async () => {
    const { data } = await client.get(`${Project.apis.v1}/location`);

    return data;
  },

  getOne: async (id: TSingleLocation) => {
    const { data } = await client.get(`${Project.apis.v1}/location/${id}`);

    return data;
  },
};

export default LocationAPI;
