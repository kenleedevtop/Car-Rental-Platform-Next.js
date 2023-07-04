import Project from 'constants/project';
import {
  TSingleAmbassador,
  TRegisterAsAmbassadorParams,
  ISingleAmbassadorResponse,
} from 'api/ambassador/types';

import { client } from 'api/api-client';

const AmbassadorAPI = {
  registration: async (
    body: TRegisterAsAmbassadorParams,
    token: string,
    locale: string
  ) => {
    await client.post(
      `${Project.apis.v1}/ambassador/registration?token=${token}`,
      body,
      {
        params: {
          lang: locale,
        },
      }
    );
  },

  getAmbassadors: async (params?: any) => {
    const { data } = await client.get(`${Project.apis.v1}/ambassador`, {
      params,
    });

    return data;
  },

  getSingleAmbassador: async (
    id: number
  ): Promise<ISingleAmbassadorResponse> => {
    const { data } = await client.get(`${Project.apis.v1}/ambassador/${id}`);

    return data;
  },

  deleteAmbassador: async (id: TSingleAmbassador) => {
    await client.delete(`${Project.apis.v1}/ambassador/${id}`);
  },
};

export default AmbassadorAPI;
