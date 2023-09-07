// eslint-disable-next-line import/no-named-as-default
import Project from 'constants/project';
import { TSingleSocialMedia } from 'api/socialMedia/types';

import { client } from 'api/api-client';
import { IUser } from 'api/users/types';

const SocialMediaAPI = {
  createSocialMedia: async (body: any) => {
    await client.post(`${Project.apis.v1}/social-medias`, body);
  },

  getSocialMedias: async (filters: any) => {
    const { data } = await client.get(`${Project.apis.v1}/social-medias`, {
      params: {
        ...filters,
      },
    });

    return data;
  },

  getSingleSocialMedia: async (id: any): Promise<IUser> => {
    const { data } = await client.get(`${Project.apis.v1}/social-medias/${id}`);

    return data;
  },

  deleteSocialMedia: async (id: TSingleSocialMedia) => {
    const { data } = await client.delete(
      `${Project.apis.v1}/social-medias/${id}`
    );

    return data;
  },

  deleteManySocialMedias: async (body: any) => {
    const users = await client.patch(
      `${Project.apis.v1}/social-medias/deleteSelectedUsers`,
      body
    );

    return users;
  },

  updateSocialMedia: async (body: any, id: any) => {
    const { data } = await client.patch(
      `${Project.apis.v1}/social-medias/${id}`,
      body
    );

    return data;
  },
};

export default SocialMediaAPI;
