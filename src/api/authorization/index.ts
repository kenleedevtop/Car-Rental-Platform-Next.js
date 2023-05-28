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
  login: async (body: TLoginParams) => {
    const { data } = await client.post(`/auth/login`, body);
    return data as TLoginResponse;
  },

  logout: async () => {
    await client.post(`/auth/logout`);
  },

  emailConfirmation: async (body: TEmailConfirmation) => {
    await client.post(`/auth/emailConfirmation`, body);
  },

  resendEmailConfirmation: async (
    body: TResendEmailConfirmation,
    locale: string
  ) => {
    await client.post(`/auth/resendEmailConfirmation`, body, {
      params: {
        lang: locale,
      },
    });
  },

  resetPassword: async (body: any, locale: string) => {
    await client.post(
      `/auth/resetPassword`,
      { email: body },
      {
        params: {
          lang: locale,
        },
      }
    );
  },

  confirmResetPassword: async (body: TConfirmResetPassword) => {
    await client.post(`/auth/resetPassword/confirm`, body);
  },

  me: async () => {
    const { data } = await client.get(`/auth/me`);

    return data;
  },

  pingAuth: () => client.get(`/pingAuth`),
};

export default AuthorizationAPI;
