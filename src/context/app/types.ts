import {
  TLoginParams,
  TResendVerificationEmail,
} from 'api/authorization/types';
import { TUser, TUserRole } from 'types/global';

export type TAppContextState = {
  user: null | TUser;
  routeName: string;
  role: TUserRole;
  initialLoading: boolean;
};

export type TAppContext = TAppContextState & {
  setRouteName: (name: string) => void;
  login: (body: TLoginParams) => Promise<any>;
  logout: () => void;
};
