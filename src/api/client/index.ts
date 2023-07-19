import Project from 'constants/project';
import { TSingleClient } from 'api/client/types';
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

  registrationViaInvitation: async (body: any) => {
    const { data } = await client.post(
      `${Project.apis.v1}/client/registrationViaInvitation`,
      body
    );
    return data;
  },

  getClientsTable: async (filters?: any) => {
    const { data } = await client.get(`${Project.apis.v1}/client/table`, {
      params: {
        ...filters,
      },
    });

    return data;
  },

  getClients: async (search?: string) => {
    const { data } = await client.get(`${Project.apis.v1}/client`, {
      params: {
        search,
        limit: 10,
      },
    });

    return data;
  },

  getDClientsIdentified: async (filters?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=identified`,
      {
        params: {
          ...filters,
        },
      }
    );

    return data;
  },

  getDClientsContacted: async (filters?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=contacted`,
      {
        params: {
          ...filters,
        },
      }
    );

    return data;
  },

  getDClientsRegistered: async (filters?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=registered`,
      {
        params: {
          ...filters,
        },
      }
    );

    return data;
  },

  getDClientsScheduled: async (filters?: any) => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/discoverClients?stage=scheduled`,
      {
        params: {
          ...filters,
        },
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

  getSingleClient: async (id: number) => {
    const { data } = await client.get(`${Project.apis.v1}/client/${id}`);

    return data;
  },

  deleteClient: async (id: TSingleClient) => {
    const { data } = await client.delete(`${Project.apis.v1}/client/${id}`);

    return data;
  },

  clientDiseaseAreas: async () => {
    const { data } = await client.get(`${Project.apis.v1}/client/diseaseAreas`);

    return data;
  },

  clientRecommendedDiseaseAreas: async () => {
    const { data } = await client.get(
      `${Project.apis.v1}/client/recommendedDiseaseAreas`
    );

    return data;
  },

  clientProducts: async () => {
    const { data } = await client.get(`${Project.apis.v1}/client/products`);

    return data;
  },

  addClientProduct: async (body: any) => {
    await client.post(`${Project.apis.v1}/client/products`, body);
  },
};

export default ClientAPI;
