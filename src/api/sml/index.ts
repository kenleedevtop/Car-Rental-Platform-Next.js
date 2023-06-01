import Project from 'constants/project';
import { client } from 'api/api-client';

const SMLApi = {
  createSML: async (body: any) => {
    await client.post(`${Project.apis.v1}/sml`, body);
  },

  getSMLs: async (filter: any) => {
    const { data } = await client.get(`${Project.apis.v1}/sml`, {
      params: {
        filter,
      },
    });

    return data;
  },

  getSML: async (id: number) => {
    const { data } = await client.get(`${Project.apis.v1}/sml/${id}`);

    return data;
  },

  updateSML: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/sml/${id}`, body);
  },

  deleteSML: async (id: number) => {
    await client.delete(`${Project.apis.v1}/sml/${id}`);
  },
};

export default SMLApi;
