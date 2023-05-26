import Project from 'constants/project';
import { TSingleClient, TRegisterAsClientParams } from 'api/client/types';
import { client } from 'api/api-client';

const ClientAPI = {
  registration: async (body: any) => {
    const { data } = await client.post(
      `${Project.apis.v1}/client/registration`,
      body
    );
    return data;
  },

  getClients: async (params: any) => {
    const { data } = await client.get(`${Project.apis.v1}/client`, {
      params,
    });

    return data;
  },

  getSingleClient: async (id: TSingleClient) => {
    const { data } = await client.get(`${Project.apis.v1}/client/${id}`);

    return data;
  },

  deleteClient: async (id: TSingleClient) => {
    const { data } = await client.delete(`${Project.apis.v1}/client/${id}`);

    return data;
  },
};

export default ClientAPI;
