// eslint-disable-next-line import/no-named-as-default
import Project from 'constants/project';
import {
  TCreateAsApplicationParams,
  TSingleApplication,
} from 'api/applications/types';

import { client } from 'api/api-client';
import { IUser } from 'api/users/types';

const ApplicationAPI = {
  apply: async (body: TCreateAsApplicationParams) => {
    console.log(body);
    const { data } = await client.post(`${Project.apis.v1}/applications`, body);

    return data;
  },

  getApplications: async (filters: any) => {
    const { data } = await client.get(`${Project.apis.v1}/applications`, {
      params: {
        ...filters,
      },
    });

    return data;
  },

  getSingleApplication: async (id: any): Promise<IUser> => {
    const { data } = await client.get(`${Project.apis.v1}/applications/${id}`);

    return data;
  },

  deleteApplication: async (id: TSingleApplication) => {
    const { data } = await client.delete(
      `${Project.apis.v1}/applications/${id}`
    );

    return data;
  },

  deleteManyApplications: async (body: any) => {
    const users = await client.patch(
      `${Project.apis.v1}/applications/deleteSelectedUsers`,
      body
    );

    return users;
  },

  updateApplication: async (body: any, id: any) => {
    const { data } = await client.patch(
      `${Project.apis.v1}/applications/${id}`,
      body
    );

    return data;
  },
};

export default ApplicationAPI;
