import axios from 'axios';
import Project from 'constants/project';
import {
  TLoginParams,
  TChangePasswordParams,
  TResetPasswordWithTokenParams,
  TVerifyEmailParams,
  TResetPasswordParams,
  TRegisterAsInfluencerParams,
  TRegisterAsCompanyParams,
  TRegisterAsAmbassadorParams,
  TMeResponse,
  TLoginResponse,
  TResendVerificationEmail,
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
  resetPasswordWithToken: async (body: TResetPasswordWithTokenParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/reset-password-with-token`,
      body
    );
    return data;
  },
  verifyEmail: async (body: TVerifyEmailParams) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/register/verify-email`,
      body
    );
    return data;
  },
  resendVerificationEmail: async (
    body: TResendVerificationEmail,
    locale?: string
  ) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/register/resend-verification-email`,
      body,
      {
        headers: { 'Accept-Language': locale },
      }
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
  registerAsAmbassador: async (
    body: TRegisterAsAmbassadorParams,
    language: string
  ) => {
    const { data } = await axios.post(
      `${Project.apis.v1}/auth/register/ambassador`,
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
