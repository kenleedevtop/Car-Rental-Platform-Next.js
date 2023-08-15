export type TUserRole =
  | 'SUPERADMIN'
  | 'ADMIN'
  | 'INVESTOR'
  | 'INFLUENCER'
  | 'DEVELOPER';

export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  role: Array<TUserRole>;
};
