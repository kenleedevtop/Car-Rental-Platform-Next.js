import Project from 'constants/project';
import { TCreateUser, TSingleUser, TAddComment } from 'api/users/types';
import { client } from 'api/api-client';

const UsersAPI = {
  createUser: async (body: TCreateUser) => {
    const { data } = await client.post(`${Project.apis.v1}/users`, body);
    return data;
  },

  getUsers: async () => {
    const { data } = await client.get(`${Project.apis.v1}/users`);
    return data;
  },

  getUser: async (id: any) => {
    const { data } = await client.get(`${Project.apis.v1}/users/${id}`);
    return data;
  },

  changeUser: async (id: TSingleUser, body: TCreateUser) => {
    const { data } = await client.patch(`${Project.apis.v1}/users/${id}`, body);
    return data;
  },

  deleteUser: async (id: TSingleUser) => {
    await client.delete(`${Project.apis.v1}/users/${id}`);
  },

  addComment: async (id: TSingleUser, body: TAddComment) => {
    await client.post(`${Project.apis.v1}/users/${id}/comment`, body);
  },

  getComments: async (id: TSingleUser) => {
    await client.get(`${Project.apis.v1}/users/${id}/comment`);
  },

  deleteComment: async (
    id: TSingleUser,
    body: TAddComment,
    commentId: TSingleUser
  ) => {
    await client.post(
      `${Project.apis.v1}/users/${id}/comment/${commentId}`,
      body
    );
  },

  contactAdmin: async (body: any) => {
    await client.post(`${Project.apis.v1}/users/contactAdmins`, body);
  },

  updateSingleUser: async (id: number, body: any) => {
    await client.patch(`${Project.apis.v1}/users/${id}`, body);
  },
};

export default UsersAPI;
