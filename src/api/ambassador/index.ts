import Project from 'constants/project';
import {
  TSingleAmbassador,
  TRegisterAsAmbassadorParams,
} from 'api/ambassador/types';

import { client } from 'api/api-client';

const AmbassadorAPI = {
  registration: async (body: TRegisterAsAmbassadorParams) => {
    await client.post(`${Project.apis.v1}/ambassador/registration`, body);
  },

  getAmbassadors: async (params?: any) => {
    const { data } = await client.get(`${Project.apis.v1}/ambassador`, {
      params,
    });

    return data;
  },

  getSingleAmbassador: async (id: TSingleAmbassador) => {
    const { data } = await client.get(`${Project.apis.v1}/ambassador/${id}`);

    return data;
  },

  deleteAmbassador: async (id: TSingleAmbassador) => {
    await client.delete(`${Project.apis.v1}/ambassador/${id}`);
  },
};

export default AmbassadorAPI;
