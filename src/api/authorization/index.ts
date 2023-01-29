import axios from 'axios';
import Project from 'constants/project';
import {
  TLoginParams,
  TChangePasswordParams,
  TChangePasswordWithTokenParams,
  TVerifyEmailParams,
  TResetPasswordParams,
  TRegisterAsInfluencerParams,
  TRegisterAsCompanyParams,
  TMeResponse,
  TLoginResponse,
} from 'api/authorization/types';

const AuthorizationAPI = {
  me: async () => {
    const { data } = await axios.get(`${Project.apis.v1}/auth/me`);
    return data as TMeResponse;
  },
  login: async (body: TLoginParams) => {
    const { data } = await axios.post(`${Project.apis.v1}/auth/login`, body);
    return data as TLoginResponse;
  },
  changePassword: async (body: TChangePasswordParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/change-password`,
      body
    );
    return data;
  },
  changePasswordWithToken: async (body: TChangePasswordWithTokenParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/change-password-with-token`,
      body
    );
    return data;
  },
  verifyEmail: async (body: TVerifyEmailParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/verify-email`,
      body
    );
    return data;
  },
  resetPassword: async (body: TResetPasswordParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/reset-password`,
      body
    );
    return data;
  },
  registerAsInfluencer: async (
    body: TRegisterAsInfluencerParams,
    language: string
  ) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/register/influencer`,
      body,
      {
        headers: {
          'Accept-Language': language,
        },
      }
    );
    return data;
  },
  registerAsCompany: async (
    body: TRegisterAsCompanyParams,
    language: string
  ) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/register/company`,
      body,
      {
        headers: {
          'Accept-Language': language,
        },
      }
    );
    return data;
  },
};

export default AuthorizationAPI;
