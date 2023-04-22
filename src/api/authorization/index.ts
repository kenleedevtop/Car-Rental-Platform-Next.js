import {
  TLoginParams,
  TLoginResponse,
  TResetPassword,
  TConfirmResetPassword,
  TEmailConfirmation,
  TResendEmailConfirmation,
} from 'api/authorization/types';

import { client } from 'api/api-client';

const AuthorizationAPI = {
  login: async (body: TLoginParams, locale?: string) => {
    const { data } = await client.post(`/auth/login`, body);
    return data as TLoginResponse;
  },

  logout: async () => {
    await client.post(`/auth/logout`);
  },

  emailConfirmation: async (body: TEmailConfirmation) => {
    const { data } = await client.post(`/auth/emailConfirmation`, {
      data: body,
    });

    return data;
  },

  resendEmailConfirmation: async (body: TResendEmailConfirmation) => {
    const { data } = await client.post(`/auth/resendEmailConfirmation`, {
      data: body,
    });

    return data;
  },

  resetPassword: async (body: TResetPassword) => {
    const { data } = await client.post(`/auth/resetPassword`, { data: body });

    return data;
  },

  confirmResetPassword: async (body: TConfirmResetPassword) => {
    const { data } = await client.post(`/auth/resetPassword/confirm`, {
      data: body,
    });

    return data;
  },

  me: async () => {
    const { data } = await client.get(`/auth/me`);

    return data;
  },

  pingAuth: () => client.get(`/pingAuth`),
};

export default AuthorizationAPI;
