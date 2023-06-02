import Project from 'constants/project';
import { TSingleClient, TRegisterAsClientParams } from 'api/client/types';
import { client } from 'api/api-client';

const ClientAPI = {
  registration: async (body: any, locale: string) => {
    const { data } = await client.post(
      `${Project.apis.v1}/client/registration`,
      body,
      {
        params: {
          lang: locale,
        },
      }
    );
    return data;
  },

  getClients: async (params?: any) => {
    const { data } = await client.get(`${Project.apis.v1}/client`, {
      params,
    });

    return data;
  },

  getDClientsIdentified: async (params?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=identified`,
      {
        params,
      }
    );

    return data;
  },

  getDClientsContacted: async (params?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=contacted`,
      {
        params,
      }
    );

    return data;
  },

  getDClientsRegistered: async (params?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=registered`,
      {
        params,
      }
    );

    return data;
  },

  getDClientsScheduled: async (params?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=scheduled`,
      {
        params,
      }
    );

    return data;
  },

  addDClients: async (body: any) => {
    await client.post(`${Project.apis.v1}/client/discoverClients`, body);
  },

  inviteDClients: async (id: any) => {
    await client.put(`${Project.apis.v1}/client/discoverClients/${id}/invite`);
  },

  updateDClients: async (body: any, id: any) => {
    await client.patch(`${Project.apis.v1}/client/discoverClients/${id}`, body);
  },

  updateClient: async (body: any, id: any) => {
    await client.patch(`${Project.apis.v1}/client/${id}`, body);
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
