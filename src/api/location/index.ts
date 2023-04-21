import axios from 'axios';
import Project from 'constants/project';
import { TCreateLocation, TSingleLocation } from 'api/location/types';

const LocationAPI = {
  create: async (body: TCreateLocation) => {
    const { data } = await axios.post(`${Project.apis.v1}/location`, body);

    return data;
  },

  getAll: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/location`);

    return data;
  },

  getOne: async (id: TSingleLocation) => {
    const { data } = await axios.get(`${Project.apis.v1}/location/${id}`);

    return data;
  },
};

export default LocationAPI;
