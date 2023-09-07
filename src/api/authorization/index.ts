import {
  TLoginParams,
  TLoginResponse,
  TConfirmResetPassword,
  TEmailConfirmation,
  TResendEmailConfirmation,
  TRegisterParams,
} from 'api/authorization/types';

import { client } from 'api/api-client';
import Project from 'constants/project';

const AuthorizationAPI = {
  login: async (body: TLoginParams) => {
    const { data } = await client.post(`/auth/sign-in`, body);
    return data as TLoginResponse;
  },

  register: async (body: TRegisterParams) => {
    const { data } = await client.post(`/auth/sign-up`, body);
    return data as TRegisterParams;
  },

  logout: async () => {
    await client.post(`/auth/logout`);
  },

  emailConfirmation: async (body: TEmailConfirmation) => {
    await client.post(`/auth/verify-email`, body);
  },

  resendEmailConfirmation: async (
    body: TResendEmailConfirmation,
    locale: string
  ) => {
    await client.post(`/auth/send-conformationcode`, body, {
      params: {
        lang: locale,
      },
    });
  },

  resetPassword: async (body: any, locale: string) => {
    await client.post(
      `/auth/send-recoverycode`,
      { email: body },
      {
        params: {
          lang: locale,
        },
      }
    );
  },

  adminResetPassword: async (oldPassword: string, newPassword: string) => {
    await client.post(`/auth/admin/reset-password`, {
      oldPassword,
      newPassword,
    });
  },

  confirmResetPassword: async (body: TConfirmResetPassword) => {
    await client.post(`/auth/reset-password`, body);
  },

  me: async () => {
    const { data } = await client.get(`/auth/me`);
    return data;
  },

  pingAuth: () => client.get(`/pingAuth`),

  getAffiliateLink: async (userId: number) => {
    const { data } = await client.get(
      `${Project.apis.v1}/auth/affiliateLink/${userId}`
    );
    return data;
  },
};

export default AuthorizationAPI;
