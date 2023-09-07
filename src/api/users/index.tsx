import Project from 'constants/project';
import { TSingleUser } from 'api/users/types';
import { client } from 'api/api-client';

const UsersAPI = {
  getUsers: async (filters: any) => {
    const { data } = await client.get(`${Project.apis.v1}/users`, {
      params: {
        ...filters,
      },
    });
    return data;
  },

  contactAdmin: async (body: any) => {
    await client.post(`${Project.apis.v1}/users/contact-admins`, body);
  },

  getUser: async (id: any) => {
    const { data } = await client.get(`${Project.apis.v1}/users/${id}`);
    return data;
  },

  deleteUser: async (id: number) => {
    await client.delete(`${Project.apis.v1}/users/${id}`);
  },

  updateSingleUser: async (id: number, body: any) => {
    await client.patch(`${Project.apis.v1}/users/${id}`, body);
  },
};

export default UsersAPI;
