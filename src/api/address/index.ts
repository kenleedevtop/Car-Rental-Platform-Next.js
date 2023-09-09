import Project from 'constants/project';
import { client } from 'api/api-client';
import { TAddress } from 'api/cars/types';

const AddressAPI = {
  createAddress: async (body: any) => {
    const { data } = await client.post(`${Project.apis.v1}/address`, body);
    return data;
  },

  getAddresss: async (filter: any) => {
    const { data } = await client.get(`${Project.apis.v1}/address`, {
      params: {
        filter,
      },
    });

    return data;
  },

  getAddress: async (id: number) => {
    const { data } = await client.get(`${Project.apis.v1}/address/${id}`);

    return data;
  },

  updateAddress: async (body: any, id: number) => {
    await client.patch(`${Project.apis.v1}/address/${id}`, body);
  },

  deleteAddress: async (id: number) => {
    await client.delete(`${Project.apis.v1}/address/${id}`);
  },
};

export default AddressAPI;
