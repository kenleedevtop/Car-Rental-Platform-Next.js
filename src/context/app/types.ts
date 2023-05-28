import { TLoginParams } from 'api/authorization/types';
import { TUser, TUserRole } from 'types/global';

export type TAppContextState = {
  user: null | TUser | any;
  routeName: string;
  role: TUserRole;
  initialLoading: boolean;
  showMobileMenu: boolean;
};

export type TAppContext = TAppContextState & {
  setRouteName: (name: string) => void;
  login: (body: TLoginParams, locale?: string) => Promise<any>;
  logout: () => void;
  handleMobileMenu: (value: boolean) => void;
};
