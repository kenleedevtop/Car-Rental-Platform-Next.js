import { TLoginParams } from 'api/authorization/types';
import { IUser } from 'api/users/types';
import { TUser, TUserRole } from 'types/global';

export type TAppContextState = {
  user: null | TUser | any;
  routeName: string;
  role: TUserRole;
  initialLoading: boolean;
  showMobileMenu: boolean;
  currency: string;
  influencer: null | IUser;
  houseStatus: number;
  applicationStatus: number;
  userStatus: number;
  notificationStatus: number;
};

export type TAppContext = TAppContextState & {
  setRouteName: (name: string) => void;
  login: (body: TLoginParams, locale?: string) => Promise<any>;
  logout: () => void;
  handleMobileMenu: (value: boolean) => void;
  handleCurrencyChange: (value: string) => void;
  handleInfluencer: (value: IUser) => void;
  getMeData: () => Promise<any>;
  handleCarStatus: (value: number) => void;
  handleApplicationStatus: (value: number) => void;
  handleUserStatus: (value: number) => void;
  handleNotificationStatus: (value: number) => void;
};
