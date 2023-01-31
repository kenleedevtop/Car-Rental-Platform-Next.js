import { TUserRole } from 'types/global';

export type TLoginParams = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  token: string;
  role: Array<TUserRole>;
};

export type TMeResponse = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    role: Array<TUserRole>;
  };
};

export type TChangePasswordParams = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

export type TChangePasswordWithTokenParams = {
  token: string;
  newPassword: string;
};

export type TVerifyEmailParams = {
  token: string;
  id: string;
};

export type TResetPasswordParams = {
  email: string;
};

export type TRegisterAsInfluencerParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type TRegisterAsCompanyParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: {
    name: string;
    role: string;
  };
};

export type TResendVerificationEmail = {
  email: string;
};
