import axios from 'axios';
import Project from 'constants/project';
import { TCreateUser, TSingleUser, TAddComment } from 'api/users/types';

const UsersAPI = {
  createUser: async (body: TCreateUser) => {
    const { data } = await axios.post(`${Project.apis.v1}/users`, body);
    return data;
  },

  getUsers: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/users`);
    return data;
  },

  getUser: async (id: TSingleUser) => {
    const { data } = await axios.get(`${Project.apis.v1}/users/${id}`);
    return data;
  },

  changeUser: async (id: TSingleUser, body: TCreateUser) => {
    const { data } = await axios.patch(`${Project.apis.v1}/users/${id}`, body);
    return data;
  },

  deleteUser: async (id: TSingleUser) => {
    await axios.delete(`${Project.apis.v1}/users/${id}`);
  },

  addComment: async (id: TSingleUser, body: TAddComment) => {
    await axios.post(`${Project.apis.v1}/users/${id}/comment`, body);
  },

  getComments: async (id: TSingleUser) => {
    await axios.get(`${Project.apis.v1}/users/${id}/comment`);
  },

  deleteComment: async (
    id: TSingleUser,
    body: TAddComment,
    commentId: TSingleUser
  ) => {
    await axios.post(
      `${Project.apis.v1}/users/${id}/comment/${commentId}`,
      body
    );
  },
};

export default UsersAPI;
